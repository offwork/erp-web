/* tslint:disable */
declare var Object: any;
export interface SystemUserInterface {
  "id"                  : string;
  "username"            : string;
  "email"               : string;
  "password"            : string;
  "passwordExpired"?    : number;
  "localization"?       : string;
  "loginTry"?           : number;
  "status"?             : string;
  "fullName"?           : string;
  "avatar"?             : string;
  "realm"?              : string;
  "emailVerified"?      : boolean;
  "verificationToken"?  : string;
  "created"?            : Date;
  "modified"?           : Date;
  accessTokens?         : any[];
  roles?                : any[];
}

export class SystemUser implements SystemUserInterface {
  "id"                  : string;
  "username"            : string;
  "email"               : string;
  "password"            : string;
  "passwordExpired"     : number;
  "localization"        : string;
  "loginTry"            : number;
  "status"              : string;
  "fullName"            : string;
  "avatar"              : string;
  "realm"               : string;
  "emailVerified"       : boolean;
  "verificationToken"   : string;
  "created"             : Date;
  "modified"            : Date;

  constructor(data?: SystemUserInterface) {
      Object.assign(this, data);
  }

  public static getModelName() {
    return "SystemUser";
  }

  public static factory(data: SystemUserInterface): SystemUser{
    return new SystemUser(data);
  }

  public static getModelDefinition() {
    return {
      name: 'SystemUser',
      plural: 'Users',
      properties: {},
    }
  }
}
