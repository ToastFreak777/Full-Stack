import jwt from "jsonwebtoken";
import { UserTokenPayloadType } from "../@types/user";

import unAuthorized from "../errors/Unauthorized";

export default (req: any, res: any, next: any) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer "))
    throw new unAuthorized("Authenication token Invalid");

  const token = authorization.split(" ")[1];

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as UserTokenPayloadType;
    req.user = { userId: payload.userId };
    next();
  } catch (error: any) {
    console.log(error.message);
    throw new unAuthorized("Authenication Invalid");
  }
};
