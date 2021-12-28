export class Language {
  name: string;
  percentage: string;
  certificate: string;

  public constructor(init?: Partial<Language>) {
    Object.assign(this, init);
  }
}