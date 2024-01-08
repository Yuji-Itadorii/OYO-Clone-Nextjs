import connectDB from "@/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(422).json("Please fill all the fields");
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      res.status(422).json("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ token: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token: token,
      });
    } else {
      res.status(422).json("Something went wrong");
    }
  }
}
