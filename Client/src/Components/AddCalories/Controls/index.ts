import { checkString } from '../../../Utils/Validations';

export type initials = {
  desc: string;
  calories: number;
};

export const initialValues: initials = {
  desc: '',
  calories: 0
};

type errorType = {
  desc?: string;
  calories?: string;
};

export const validate: (values: initials) => errorType = (values: initials) => {
  const error: errorType = {};
  if (!values.desc) {
    error.desc = 'Description is required field';
  } else if (checkString(values.desc)) {
    error.desc = 'Please specify valid desciption';
  }
  if (typeof values.calories !== 'number') {
    error.calories = 'Please specify valid calories';
  }
  return error;
};
