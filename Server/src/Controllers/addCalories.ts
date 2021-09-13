import { CaloriesDataDto } from "../dto/calories.dto";
import { tokenuser } from "../dto/user.dto";
import User from "../Models/user";
import { getCalories } from "./getCalories";
import dayjs from "dayjs";

export async function addCalories(params: CaloriesDataDto, user: tokenuser) {
  try {
    await User.findOneAndUpdate(
      { email: user.email },
      { $push: { calories: params } }
    );
    const date = dayjs().format("MM/DD/YYYY");
    const { data } = await getCalories(date, user);
    return { data };
  } catch (error) {
    return { error: "Calories is not added in database" };
  }
}
