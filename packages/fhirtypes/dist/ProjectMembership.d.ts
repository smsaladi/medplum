/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { AccessPolicy } from './AccessPolicy';
import { Bot } from './Bot';
import { ClientApplication } from './ClientApplication';
import { Meta } from './Meta';
import { Patient } from './Patient';
import { Practitioner } from './Practitioner';
import { Project } from './Project';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { User } from './User';
import { UserConfiguration } from './UserConfiguration';

/**
 * Medplum project membership. A project membership grants a user access
 * to a project.
 */
export interface ProjectMembership {

  /**
   * This is a ProjectMembership resource
   */
  readonly resourceType: 'ProjectMembership';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Project where the memberships are available.
   */
  project: Reference<Project>;

  /**
   * The project administrator who invited the user to the project.
   */
  invitedBy?: Reference<User>;

  /**
   * User that is granted access to the project.
   */
  user: Reference<Bot | ClientApplication | User>;

  /**
   * Reference to the resource that represents the user profile within the
   * project.
   */
  profile: Reference<Bot | ClientApplication | Patient | Practitioner | RelatedPerson>;

  /**
   * A String that is an identifier for the resource as defined by the
   * provisioning client.  The &quot;externalId&quot; may simplify identification of
   * a resource between the provisioning client and the service provider by
   * allowing the client to use a filter to locate the resource with an
   * identifier from the provisioning domain, obviating the need to store a
   * local mapping between the provisioning domain's identifier of the
   * resource and the identifier used by the service provider.  Each
   * resource MAY include a non-empty &quot;externalId&quot; value.  The value of the
   * &quot;externalId&quot; attribute is always issued by the provisioning client and
   * MUST NOT be specified by the service provider.  The service provider
   * MUST always interpret the externalId as scoped to the provisioning
   * domain.
   */
  externalId?: string;

  /**
   * The access policy for the user within the project memebership.
   */
  accessPolicy?: Reference<AccessPolicy>;

  /**
   * Extended access configuration using parameterized access policies.
   */
  access?: ProjectMembershipAccess[];

  /**
   * The user configuration for the user within the project memebership
   * such as menu links, saved searches, and features.
   */
  userConfiguration?: Reference<UserConfiguration>;

  /**
   * Whether this user is a project administrator.
   */
  admin?: boolean;
}

/**
 * Extended access configuration using parameterized access policies.
 */
export interface ProjectMembershipAccess {

  /**
   * The base access policy used as a template.  Variables in the template
   * access policy are replaced by the values in the parameter.
   */
  policy: Reference<AccessPolicy>;

  /**
   * User options that control the display of the application.
   */
  parameter?: ProjectMembershipAccessParameter[];
}

/**
 * User options that control the display of the application.
 */
export interface ProjectMembershipAccessParameter {

  /**
   * The unique name of the parameter.
   */
  name: string;

  /**
   * Value of the parameter - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueString?: string;

  /**
   * Value of the parameter - must be one of a constrained set of the data
   * types (see [Extensibility](extensibility.html) for a list).
   */
  valueReference?: Reference;
}
