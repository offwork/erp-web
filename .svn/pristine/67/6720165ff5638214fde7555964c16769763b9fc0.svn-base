declare var Object: any;
export interface IUser {
  id?: number;
  email?: string;
  fullName?: string;
  localization?: string;
  password?: string;
  passwordExpired?: string;
  username?: string;
}

export class User implements IUser {
  id: number;
  email: string;
  fullName: string;
  localization: string;
  password: string;
  passwordExpired: string;
  username: string;

  constructor(data?: IUser) { Object.assign(this, data); }
}
