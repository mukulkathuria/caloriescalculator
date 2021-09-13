import { verify } from "jsonwebtoken";
import { Response } from "express";
import { ACCESS_TOKEN } from "../Constants/constants";

export async function auth(req: any, res: Response, next: Function) {
  const authtoken = req.headers["authorization"];
  const token = authtoken && authtoken.split(" ")[1];
  if (!token) return res.status(401).json({ error: "UnAuthenticated" });

  try {
    const verifiedUser = verify(token, ACCESS_TOKEN);
    req.user = verifiedUser;
    next();
  } catch (err) {
    return res.status(403).json({ error: "InValid Token" });
  }
}
