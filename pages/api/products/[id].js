import dbconnect from "../../../lib/mongodb.js";
import ProductModel from "../../../models/Products.js";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbconnect(); // to check weather connection with database is established or not

  //--- to get the specific pizza according to the id
  if (method === "GET") {
    try {
      const product = await ProductModel.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  // to update pizza record in database
  if (method === "PUT") {
    try {
      const product = await ProductModel.create(req.body);
      console.log(product);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ err: error });
    }
  }
  // to delete pizza from the database
  if (method === "DELETE") {
    try {
      const product = await ProductModel.findByIdAndDelete(id);
        
      res.status(201).json("Pizza Record Deleted Successfully");
    } catch (error) {
      res.status(500).json({ err: error });
    }
  }
}
