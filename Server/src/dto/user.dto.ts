type Calories = {
  _id: string;
  desc: string;
  calories: number;
  date?: Date | unknown;
};

export type UserDto = {
  name: string;
  email: string;
  password: string;
  calories: Calories[];
  date?: Date | unknown;
};

export type tokenuser = {
  name: string;
  email: string;
};
