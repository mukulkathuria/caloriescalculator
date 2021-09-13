import { Router } from "express";
import { addCalories } from "../Controllers/addCalories";
import { getCalories } from "../Controllers/getCalories";
import { auth } from "../Middlewares/authenticate";
import { validCalories } from "../Validations/caloriesdata";

const router = Router();

router.get("/getcalories", auth, async (req: any, res) => {
  const date = req.query.date as string;
  if (date) {
    const { data, error, status } = await getCalories(date, req.user);
    if (error && status) {
      return res.status(status).json({ message: error });
    }
    return res.json({ data });
  }
});

router.post("/addcalories", auth, async (req: any, res) => {
  const { error } = validCalories(req.body);
  if (error) {
    return res.status(422).json({ message: error });
  }
  const { error: serverr } = await addCalories(req.body, req.user);
  if (serverr) {
    return res.status(406).json({ message: serverr });
  }
  return res.json({ success: "Its saved in data" });
});

export default router;
