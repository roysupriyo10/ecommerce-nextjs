import { CustomJwtPayload, JwtExpiry } from "@/@types";
import { sign } from "jsonwebtoken";

export function generateJwtToken(payload: CustomJwtPayload, expiry: JwtExpiry) {
  return sign(payload, process.env.JWT_SECRET_TOKEN as string, {
    expiresIn: expiry,
  });
}
