import connectDB from "@/db";
import Hotel from "@/models/Hotel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    if (req.query.id) {
      const id = req.query.id;
      const hotel = await Hotel.findById(id);
      res.status(200).json({ msg: "Success", hotel });
    }
  }
}
