import dbconnect from '../../../lib/mongodb.js'
import ProductModel from '../../../models/Products.js'

export default async function handler(req, res){
    const {method} = req;
  
  await dbconnect();  // to check weather connection with database is established or not

   if(method === "GET"){
    try {
        const products  = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error})
    }
   }

   // for posting method
   if(method === "POST"){
    try {
        const product = await ProductModel.create(req.body);
        console.log(product)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({err:error});
    }
   }

}