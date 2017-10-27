export class KalemConfig {
  private static path: string = 'http://192.168.0.105:8988';
  private static version: string | number = 'api/v1';
  private static authPrefix: string = '';
  private static debug: boolean = true;
  private static filterOn: string = 'headers';

  public static setApiVersion(version: string = 'api'): void {
    KalemConfig.version = version;
  }

  public static getApiVersion(): string | number {
    return KalemConfig.version;
  }

  public static setBaseURL(url: string = '/'): void {
    KalemConfig.path = url;
  }

  public static getPath(): string {
    return KalemConfig.path;
  }

  public static setAuthPrefix(authPrefix: string = ''): void {
    KalemConfig.authPrefix = authPrefix;
  }

  public static getAuthPrefix(): string {
    return KalemConfig.authPrefix;
  }

  public static setDebugMode(isEnabled: boolean): void {
    KalemConfig.debug = isEnabled;
  }

  public static debuggable(): boolean {
    return KalemConfig.debug;
  }

  public static filterOnUrl(): void {
    KalemConfig.filterOn = 'url';
  }

  public static filterOnHeaders(): void {
    KalemConfig.filterOn = 'headers';
  }

  public static isHeadersFilteringSet(): boolean {
    return (KalemConfig.filterOn === 'headers');
  }
}
