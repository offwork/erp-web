export class BaseStorage {
  get(key: string): any {}

  set(key: string, value: any): void {}

  remove(key: string): void {}
}

export class InternalStorage extends BaseStorage {}

export class SDKStorage extends BaseStorage {}
