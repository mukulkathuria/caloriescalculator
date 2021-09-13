import { Types } from "mongoose";
import { tokenuser } from "../dto/user.dto";
import User from "../Models/user";
import { getCalories } from "./getCalories";
import dayjs from "dayjs";

export async function deleteCalory(param: string, user: tokenuser) {
  const id = new Types.ObjectId(param);
  try {
    await User.updateOne(
      { email: user.email },
      { $pull: { calories: { _id: param } } }
    );
    return { data: true };
  } catch (error) {
    return { error: "Data not found!!!" };
  }
}
