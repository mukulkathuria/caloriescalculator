import { Router } from "express";
import { sign, verify } from "jsonwebtoken";
import { ACCESS_TOKEN } from "../Constants/constants";

const router = Router();

router.post("/user/refreshtoken", async (req, res) => {
  if (!req.body.token) {
    return res.status(422).json({ message: "token not found" });
  }
  verify(req.body.token, ACCESS_TOKEN, (err: any, user: any) => {
    if (err) return res.status(403).json({ message: "invalid token" });
    const { name, email } = user;

    const access_token = sign({ name, email: email }, ACCESS_TOKEN, {
      algorithm: "HS512",
      expiresIn: "1h",
    });
    const refresh_token = sign({ name: name, email: email }, ACCESS_TOKEN, {
      algorithm: "HS512",
      expiresIn: "3h",
    });
    return res.json({ access_token, refresh_token });
  });
});

export default router;
