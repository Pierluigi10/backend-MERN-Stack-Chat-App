import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id },process.env.JTW_SECRET);
};
