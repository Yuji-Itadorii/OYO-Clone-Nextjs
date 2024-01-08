import connectDB from "@/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const emailExists = await User.findOne({ email });

    if (!emailExists) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const passwordMatch = await bcrypt.compare(password, emailExists.password);

    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ token: emailExists._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(200).json({ token, message: "Logged in successfully!" });
  }
}
