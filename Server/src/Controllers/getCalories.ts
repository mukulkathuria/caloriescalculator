import User from "../Models/user";
import dayjs from "dayjs";
import { tokenuser } from "../dto/user.dto";

export async function getCalories(date: string, user: tokenuser) {
  const today = dayjs(date).toDate();
  if (!isNaN(today.getTime())) {
    try {
      const nextDay = dayjs(today).add(1, "days").toDate();
      const data = await User.aggregate([
        { $match: { email: user.email } },
        {
          $project: {
            calories: {
              $filter: {
                input: "$calories",
                as: "cal",
                cond: {
                  $and: [
                    { $gte: ["$$cal.date", today] },
                    { $lte: ["$$cal.date", nextDay] },
                  ],
                },
              },
            },
          },
        },
      ]);
      return { data };
    } catch (error) {
      return { error: "Cant get data from DB", status: 406 };
    }
  } else {
    return { error: "Invalid date", status: 422 };
  }
}
