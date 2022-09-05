import dbConnection from "../../../lib/mongodb.js";
import OrderSchema from "../../../models/Order.js";

export default async function handler(req, res) {
  await dbConnection();

  const { method } = req;

  // checking method requests
  switch (method) {
    case "GET":
      try {
        const orders = await OrderSchema.find();
        res.status(200).json(orders);
      } catch (error) {
        res.status(500).json({ err: error });
      }
      break;

    case "POST":
      try {
        const order = await OrderSchema.create(req.body);
        res.status(201).json(order);
      } catch (error) {
        res.status(501).json({ err: error });
      }
  }
}
