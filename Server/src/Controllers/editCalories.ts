import { Types } from "mongoose";
import { tokenuser } from "../dto/user.dto";
import { editCaloriesData } from "../dto/calories.dto";
import User from "../Models/user";
import { getCalories } from "./getCalories";
import dayjs from "dayjs";

export async function editCalories(params: editCaloriesData, user: tokenuser) {
    const id = new Types.ObjectId(params.objid);
  try {
    await User.updateOne(
      { email: user.email, "calories._id": params.objid },
      {
        $set: {
          "calories.$.desc": params.desc,
          "calories.$.calories": params.calories,
        },
      }
    );

    const date = dayjs().format("MM/DD/YYYY");
    const { data } = await getCalories(date, user);
    return { data };
  } catch (error) {
    return { error: "Its not updated in Database" };
  }
}
