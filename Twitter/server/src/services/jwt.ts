import JWT from 'jsonwebtoken';
import { User } from "@prisma/client";
import { JWTUser } from "../interfaces";
const JWT_SECRET = 'ITISTWITTER';
class JWTService {
  public static generateToken(user: User) {
    const payload: JWTUser = {
      id: user?.id,
      email: user?.email,
    };
    const token = JWT.sign(payload, JWT_SECRET);
    return token;
  }
  public static decodeToken(token: string) {
    return JWT.verify(token, JWT_SECRET) as JWTUser;
  }
}

export default JWTService;