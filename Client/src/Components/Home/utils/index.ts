import { CaloriesData } from '../../../Redux/Reducerdtos/caloriesReducer.dto';

export function getTotalCalories(arr: CaloriesData[]) {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i].calories;
  }
  return result;
}
