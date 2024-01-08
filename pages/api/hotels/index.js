import connectDB from "@/db";
import Hotel from "@/models/Hotel";

export default async function handler(req, res) {
  connectDB();
  // Code to add Hotels

  // if (req.method === "POST") {
  //   const newHotel = await Hotel.create(req.body);
  //   res.status(201).json({
  //     success: true,
  //     data: newHotel,
  //   });
  // }

  if (req.method === "GET") {
    const hotels = await Hotel.find({
      location: req.query.city,
    });

    if (hotels.lenght > 0) {
      res.status(200).json({
        success: true,
        hotels,
      });
    } else {
      const allHotels = await Hotel.find();
      res.status(200).json({
        success: true,
        allHotels,
      });
    }
  }
}
