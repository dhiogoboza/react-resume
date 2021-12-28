export class Company {
  name: string;
  site: string;
  img: string;

  public constructor(init?: Partial<Company>) {
    Object.assign(this, init);
  }
}
  