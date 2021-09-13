export type CaloriesData = {
  _id: string;
  desc: string;
  calories: number;
  date: Date | string;
  edit: boolean;
};

export type CaloriesInitialDto = {
  isFetching: boolean;
  calories: null | CaloriesData[];
  error: null | string;
};

export type CaloryActionDto = {
  type: string;
  payload: any;
};

export type caloriesUserData = {
  desc: string;
  calories: number;
};