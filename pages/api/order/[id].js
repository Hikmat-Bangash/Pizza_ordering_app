import dbConnection from "../../../lib/mongodb.js";
import OrderSchema from "../../../models/Order.js";

export default async function handler(req, res) {
  await dbConnection();

  const { method, query: { id } } = req;

  // checking method requests
  switch (method) {
    case "GET":
      try {
        const order = await OrderSchema.findById(id);
        res.status(201).json(order);
      } catch (error) {
        res.status(501).json({ err: error });
      }
      break;

    case "PUT":
      try {
        const checking = await OrderSchema.findById(id);
        if(checking){
            const updated = await OrderSchema.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json(updated);
        }
      } catch (error) {
        res.status(500).json({ err: error });
      }
    break;

    case "DELETE":
      try {
        const order = await OrderSchema.findByIdAndDelete(id);
        res.status(200).json("User has been successfully deleted!");
      } catch (error) {
        res.status(500).json({ err: error });
      }
  }
}
