export class SocialNetwork {
  link: string;
  name: string;
  icon: string;

  public constructor(init?: Partial<SocialNetwork>) {
    Object.assign(this, init);
  }
}
  