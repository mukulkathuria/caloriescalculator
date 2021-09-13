import { stringonlyregex } from "../Constants/regexs";
import { CaloriesDataDto, editCaloriesData } from "../dto/calories.dto";

export function validCalories(params: CaloriesDataDto) {
  if (!stringonlyregex.test(params.desc)) {
    return { error: "Please specify vaid description" };
  }
  if (typeof params.calories !== "number") {
    return { error: "Please specify valid calories" };
  }
  return { data: true };
}

export function valideditCalories(params:editCaloriesData){
  if(!params.objid){
    return { error: 'please specify valid id' }
  }
  return validCalories(params);
}