import { Company } from "./Company";

export class Experience {
  role: string;
  company: Company;
  begin: string;
  end: string;
  current: boolean;
  techs: string[];

  public constructor(init?: Partial<Experience>) {
    Object.assign(this, init);
  }
}
  