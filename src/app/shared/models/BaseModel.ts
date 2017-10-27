/* tslint:disable */
declare var Object: any;
export interface AccessTokenInterface {
  "access_token"?: string;
  "token_type"?: string;
  "refresh_token"?: string;
  "expires_in"?: number;
  "scope"?: string;
  "user"?: any;
}

export class AccessToken implements AccessTokenInterface {
  "access_token": string;
  "token_type": string;
  "refresh_token": string;
  "expires_in": number;
  "scope": string;
  "user": any;

  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }

  /**
   * The name of the model represented by this $resource,
   * i.e. `AccessToken`.
   */
  public static getModelName() {
    return "AccessToken";
  }

  /**
   * @method factory
   * @author Jonathan Casarrubias
   * @license MIT
   * This method creates an instance of AccessToken for dynamic purposes.
   **/
  public static factory(data: AccessTokenInterface): AccessToken {
    return new AccessToken(data);
  }

  /**
   * @method getModelDefinition
   * @author Julien Ledun
   * @license MIT
   * This method returns an object that represents some of the model
   * definitions.
   **/
  public static getModelDefinition() {
    return {
      name: 'AccessToken',
      plural: 'AccessTokens',
      properties: {},
    }
  }
}

export class SDKToken implements AccessTokenInterface {
  access_token: any = null;
  token_type: any = null;
  refresh_token: any = null;
  expires_in: number = null;
  scope: any = null;
  user: any = null;
  rememberMe: boolean = null;

  constructor(data?: AccessTokenInterface) {
    Object.assign(this, data);
  }
}
