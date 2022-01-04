import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not found");
    }

    req.token = token;
    req.rootUser = rootUser;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Unauthorized : No token provided" });
  }
};
