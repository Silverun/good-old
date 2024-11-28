import { User } from "../../../store/userSlice/userSlice";
import { userFirestore } from "./userFirestore";

export interface newUserRegData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface loginUserData {
  email: string;
  password: string;
}

export type AuthHandlerFunc = (userId: string | null) => Promise<void>;

export interface IUserService {
  addUser: (userData: newUserRegData) => Promise<void>;
  loginUser: (userData: loginUserData) => Promise<void>;
  getUser: (id: string) => Promise<User | undefined>;
  logoutUser: () => Promise<void>;
  authChangeHandler: (handler: AuthHandlerFunc) => () => void;
}

class UserService implements IUserService {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  authChangeHandler(handler: AuthHandlerFunc) {
    return this.userService.authChangeHandler(handler);
  }

  async addUser(userData: newUserRegData) {
    try {
      await this.userService.addUser(userData);
    } catch (error) {
      throw new Error(
        "There was an error while registering. Please try again."
      );
    }
  }

  async loginUser(data: loginUserData) {
    try {
      await this.userService.loginUser(data);
    } catch (error) {
      throw new Error("There was an error while logging in. Please try again.");
    }
  }

  async logoutUser() {
    try {
      await this.userService.logoutUser();
    } catch (error) {
      throw new Error(
        "There was an error while logging out. Please try again."
      );
    }
  }

  async getUser(id: string) {
    try {
      const user = await this.userService.getUser(id);
      return user;
    } catch (error) {
      throw new Error("There was an error retrieving user");
    }
  }
}

export const userService = new UserService(userFirestore);
