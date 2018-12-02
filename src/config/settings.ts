import { environment } from './environments/environment';

export class Settings {
  public static ExampleOfGlobalSetting = 0;
}

export const OAuthConfig = {
  provider: {
    authEndpoint: `${environment.apiUrl}users/login`,
    clientId: environment.provider.clientId,
    redirectURI: `${environment.appUrl}auth`
  }
};
