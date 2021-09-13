import { Router } from "express";
import { addCalories } from "../Controllers/addCalories";
import { deleteCalory } from "../Controllers/deleteCalories";
import { editCalories } from "../Controllers/editCalories";
import { getCalories } from "../Controllers/getCalories";
import { auth } from "../Middlewares/authenticate";
import { validCalories, valideditCalories } from "../Validations/caloriesdata";

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
  const { error: serverr, data } = await addCalories(req.body, req.user);
  if (serverr) {
    return res.status(406).json({ message: serverr });
  }
  return res.json({ data });
});

router.post("/editcalories", auth, async (req: any, res) => {
  const { error } = valideditCalories(req.body);
  if (error) {
    return res.status(422).json({ message: error });
  }
  const { error: editerr, data } = await editCalories(req.body, req.user);
  if (editerr) {
    return res.status(406).json({ message: editerr });
  }
  return res.json({ data });
});

router.post("/deletecalories", auth, async (req: any, res) => {
  if (!req.body.objid) {
    return res
      .status(422)
      .json({ message: "Please specify id delete calories" });
  }
  const { error } = await deleteCalory(req.body.objid, req.user);
  if (error) {
    return res.status(406).json({ message: error });
  }
  return res.json({ data: " Successfully deleted " });
});

export default router;
