import { User } from "../models/User";

export class DataProvider {
  constructor() {
  }

  getUserInfo(): User {
    return new User({name: 'Dhiogo Boza',
        title: 'Software Developer',
        location: 'Extremoz, BR',
        email: 'dhiogoboza@gmail.com',
        phoneNumber: '+55 84994061406'})
  }
}