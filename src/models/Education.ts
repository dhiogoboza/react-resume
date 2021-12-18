export class Education {
  place: string;
  title: string;
  begin: string;
  end: string;
  current: boolean;
  description: string[];

  public constructor(init?: Partial<Education>) {
    Object.assign(this, init);
  }
}
  