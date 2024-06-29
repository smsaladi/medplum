import postgres from 'postgres';
import { MedplumServerConfig } from './config';
import { globalLogger } from './logger';
import * as migrations from './migrations/schema';

let psql: postgres.Sql | undefined;

export function getDatabasePool(): postgres.Sql {
  if (!psql) {
    throw new Error('Database not setup');
  }
  return psql;
}

export const locks = {
  migration: 1,
};

export async function initDatabase(serverConfig: MedplumServerConfig): Promise<void> {
  const config = serverConfig.database;

  const poolConfig = {
    host: config.host,
    port: config.port,
    database: config.dbname,
    user: config.username,
    password: config.password,
    ssl: config.ssl,
    max: 100,
    idle_timeout: 120,
    connection: {
      statement_timeout: config.queryTimeout ?? 60000,
      default_transaction_isolation: 'repeatable read' as const,
    },
  };

  if (serverConfig.databaseProxyEndpoint) {
    poolConfig.host = serverConfig.databaseProxyEndpoint;
    poolConfig.ssl = poolConfig.ssl ?? {};
    poolConfig.ssl.require = true;
  }

  psql = postgres(poolConfig);

  // pool.on('error', (err) => {
  //   globalLogger.error('Database connection error', err);
  // });

  // Run migrations by default
  if (config.runMigrations !== false) {
    let reserved: postgres.ReservedSql | undefined = undefined;
    try {
      reserved = await psql.reserve();
      // await reserved.unsafe('SELECT pg_advisory_lock($1)', [locks.migration]);
      await migrate(reserved);
    } finally {
      if (reserved) {
        // await psql.unsafe('SELECT pg_advisory_unlock($1)', [locks.migration]);
        reserved.release();
      }
    }
  }
}

export async function closeDatabase(): Promise<void> {
  if (psql) {
    await psql.end();
    psql = undefined;
  }
}

async function migrate(psql: postgres.Sql): Promise<void> {
  await psql.unsafe(`CREATE TABLE IF NOT EXISTS "DatabaseMigration" (
    "id" INTEGER NOT NULL PRIMARY KEY,
    "version" INTEGER NOT NULL,
    "dataVersion" INTEGER NOT NULL
  )`);

  const result = await psql.unsafe<{ version: number }[]>('SELECT "version" FROM "DatabaseMigration"');
  const version = result?.[0]?.version ?? -1;

  if (version < 0) {
    await psql.unsafe('INSERT INTO "DatabaseMigration" ("id", "version", "dataVersion") VALUES (1, 0, 0)');
  }

  const migrationKeys = Object.keys(migrations);
  for (let i = version + 1; i <= migrationKeys.length; i++) {
    const migration = (migrations as Record<string, migrations.Migration>)['v' + i];
    if (migration) {
      const start = Date.now();
      // await migration.run(client);
      globalLogger.info('Database schema migration', { version: `v${i}`, duration: `${Date.now() - start} ms` });
      await psql.unsafe('UPDATE "DatabaseMigration" SET "version"=$1', [i]);
    }
  }
}
