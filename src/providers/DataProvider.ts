import { Experience } from "../models/Experience";
import { Education } from "../models/Education";
import { User } from "../models/User";
import { userdata } from '../userdata.js';
import { SocialNetwork } from "../models/SocialNetwork";

export class DataProvider {

  getUserInfo(): User {
    return new User(userdata.user);
  }

  getExperiences(): Experience[] {
    return userdata.experiences.map((el) => {
      return new Experience(el)
    });
  }

  getEducation(): Education[] {
    return userdata.education.map((el) => {
      return new Education(el)
    });
  }

  getSocialNetworks(): SocialNetwork[] {
    return userdata.socialNetworks.map((el) => {
      return new SocialNetwork(el)
    });
  }
}