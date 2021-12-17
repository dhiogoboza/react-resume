export class User {
  name: string;
  title: string;
  location: string;
  email: string;
  phoneNumber: string;

  public constructor(init?:Partial<User>) {
    Object.assign(this, init);
  }
}
