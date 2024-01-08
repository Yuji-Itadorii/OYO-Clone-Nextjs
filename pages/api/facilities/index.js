import connectDB from "@/db";
import Hotel from "@/models/Hotel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const facilities = await Hotel.find({}).distinct("facilities.name");
    res.status(200).json({ msg: "Achha Lagta hai !", facilities });
  }
}
