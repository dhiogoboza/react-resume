import { Experience } from "../models/Experience";
import { Education } from "../models/Education";
import { User } from "../models/User";
import { userdata } from '../userdata.js';

export class DataProvider {

  getUserInfo(): User {
    return new User(userdata.user);
  }

  getExperiences(): Experience[] {
    const experiences: Experience[] = [];

    for (let experience of userdata.experiences) {
        experiences.push(new Experience(experience));
    }

    return experiences;
  }

  getEducation(): Education[] {
    const educationArray: Education[] = [];

    for (let education of userdata.education) {
      educationArray.push(new Education(education));
    }

    return educationArray;
  }
}