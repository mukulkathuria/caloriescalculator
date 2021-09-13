import { CaloriesDataDto } from "../dto/calories.dto";
import { tokenuser } from "../dto/user.dto";
import User from "../Models/user";

export async function addCalories(params: CaloriesDataDto, user: tokenuser) {
  try {
    await User.findOneAndUpdate(
      { email: user.email },
      { $push: { calories: params } }
    );
    return { data: true };
  } catch (error) {
    return { error: "Calories is not added in database" };
  }
}