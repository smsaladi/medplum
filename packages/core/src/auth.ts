// State machine for authentication
// There are 2 levels of tracking:
// 1. Top level:
// 2. Sub level represents the state of the authentication flow

export enum AuthState {
  InitializingStorage = 'InitializingStorage',
  LoadingStorage = 'LoadingStorage',
  Authenticating = 'Authenticating',
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
}

export const authTransitions: Record<AuthState, AuthState[]> = {
  [AuthState.InitializingStorage]: [AuthState.LoadingStorage],
  [AuthState.LoadingStorage]: [AuthState.Authenticating, AuthState.Unauthenticated],
  [AuthState.Authenticating]: [AuthState.Authenticated, AuthState.Unauthenticated],
  [AuthState.Authenticated]: [AuthState.Authenticating, AuthState.Unauthenticated],
  [AuthState.Unauthenticated]: [AuthState.Authenticating],
};

export enum LoginState {
  SubmittingEmail = 'SubmittingEmail',
  RedirectingToExternal = 'RedirectingToExternal',
  WaitingForPassword = 'WaitingForPassword',
  SubmittingPassword = 'SubmittingPassword',
  WaitingForMfa = 'WaitingForMfa',
  SubmittingMfa = 'SubmittingMfa',
  WaitingForProfile = 'WaitingForProfile',
  SubmittingProfile = 'SubmittingProfile',
  WaitingForScopes = 'WaitingForScopes',
  SubmittingScopes = 'SubmittingScopes',
  SubmittingGoogleCredentials = 'SubmittingGoogleCredentials',
  RefreshingAccessToken = 'Refreshing',
  RefreshingProfile = 'RefreshingProfile',
}

export const loginTransitions: Record<LoginState, LoginState[]> = {
  [LoginState.SubmittingEmail]: [LoginState.RedirectingToExternal, LoginState.WaitingForPassword],
  [LoginState.RedirectingToExternal]: [LoginState.WaitingForPassword],
  [LoginState.WaitingForPassword]: [LoginState.SubmittingPassword],
  [LoginState.SubmittingPassword]: [LoginState.WaitingForMfa, LoginState.WaitingForProfile],
  [LoginState.WaitingForMfa]: [LoginState.SubmittingMfa],
  [LoginState.SubmittingMfa]: [LoginState.WaitingForProfile],
  [LoginState.WaitingForProfile]: [LoginState.SubmittingProfile],
  [LoginState.SubmittingProfile]: [LoginState.WaitingForScopes],
  [LoginState.WaitingForScopes]: [LoginState.SubmittingScopes],
  [LoginState.SubmittingScopes]: [LoginState.WaitingForProfile],
  [LoginState.SubmittingGoogleCredentials]: [LoginState.WaitingForProfile],
  [LoginState.RefreshingAccessToken]: [LoginState.RefreshingProfile],
  [LoginState.RefreshingProfile]: [LoginState.RefreshingAccessToken],
};

export class StateMachine<T extends string> {
  private state: T;

  constructor(
    readonly initialState: T,
    readonly transitions: Record<T, T[]>
  ) {
    this.state = initialState;
  }

  public getState(): T {
    return this.state;
  }

  public setState(newState: T): void {
    this.state = newState;
  }

  public transition(transition: T): void {
    const nextStates = this.transitions[this.state];
    if (!nextStates) {
      throw new Error(`State not found: ${this.state}`);
    }
    if (!nextStates.includes(transition)) {
      throw new Error(`Invalid transition: ${this.state} -> ${transition}`);
    }
    this.state = transition;
  }
}
