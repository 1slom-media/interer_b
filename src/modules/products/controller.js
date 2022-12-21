import model from "./model.js";

const GET = async (req, res) => {
    try {
      const products = await model.GET(req.params);
      res.send(products);
    } catch (error) {
      return new Error (error.message)
    }
};

const POST = async (req, res) => {
    try {
      const products = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"products upload",
        data:products
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const PUT = async (req, res) => {
    try {
      const products = await model.PUT(req.params,req.body);
       res.status(202).json({
        status:202,
        message:"products update",
        data:products
      })
    } catch (error) {
      return new Error (error.message)
    }
};

const DELETE = async (req, res) => {
    try {
      const products = await model.DELETE(req.params);
       res.status(202).json({
        status:204,
        message:"products deleted",
        data:products
      })
    } catch (error) {
      return new Error (error.message)
    }
  };
  

export default {
    GET,
    POST,
    PUT,
    DELETE
  };