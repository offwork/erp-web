import {Inject, Injectable} from '@angular/core';
import { InternalStorage } from '../storage/storage.swaps';
import { SDKToken } from '../models/BaseModel';

@Injectable()
export class KalemAuth {
  private token: SDKToken = new SDKToken();
  protected prefix: string = '$KalemSDK$';

  constructor(@Inject(InternalStorage) protected storage: InternalStorage) {
    this.token.access_token = this.load('access_token');
    this.token.expires_in = this.load('expires_in');
    this.token.refresh_token = this.load('refresh_token');
    this.token.rememberMe = this.load('rememberMe');
    this.token.token_type = this.load('token_type');
    this.token.scope = this.load('scope');
    this.token.user = this.load('user');
  }

  public setRememberMe(value: boolean): void {
    this.token.rememberMe = value;
  }

  public setUser(user: any): void {
    this.token.user = user;
    this.save();
  }

  public setToken(token: SDKToken): void {
    this.token = Object.assign(this.token, token);
    console.log('TOKEN: ', token);
    console.log('THIS TOKEN: ', this.token);
    this.save();
  }

  public getAccessTokenId(): string {
    return this.token.access_token;
  }

  public getToken(): SDKToken {
    return <SDKToken>this.token;
  }

  public getCurrentUserData(): any {
    return (typeof this.token.user === 'string') ? JSON.stringify(this.token.user) : this.token.user;
  }

  public save(): boolean {
    if (this.token.rememberMe) {
      this.persist('access_token', this.token.access_token);
      this.persist('expires_in', this.token.expires_in);
      this.persist('refresh_token', this.token.refresh_token);
      this.persist('rememberMe', this.token.rememberMe);
      this.persist('token_type', this.token.token_type);
      this.persist('scope', this.token.scope);
      this.persist('user', this.token.user);
      return true;
    } else {
      return false;
    }
  }

  protected load(prop: string): any {
    return this.storage.get(`${this.prefix}${prop}`);
  }
// {"headers":{"normalizedNames":{},"lazyUpdate":null},"status":200,"statusText":"OK","url":"http://192.168.0.105:8988/oauth/token","ok":true,"type":4,"body":{"access_token":"d456e281-654e-4cf8-9d7f-2d94bba1d1a1","token_type":"bearer","refresh_token":"47a806d2-f1f3-4e06-a15c-a393d8282152","expires_in":3599,"scope":"read write trust openid","user":{"grant_type":"password","password":"12345678","username":"ADMIN"},"rememberMe":true}}
  public clear(): void {
    Object.keys(this.token).forEach((prop: string) => this.storage.remove(`${this.prefix}${prop}`));
    this.token = new SDKToken();
  }

  protected persist(prop: string, value: any): void {
    try {
      this.storage.set(
        `${this.prefix}${prop}`,
        (typeof value === 'object') ? JSON.stringify(value) : value
      );
    } catch (err) {
      console.error('local/session depoya erişilemiyor: ', err);
    }
  }
}
