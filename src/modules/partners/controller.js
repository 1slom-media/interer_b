import model from "./model.js";

const GET = async (req, res) => {
    try {
      const partners = await model.GET(req.params);
      res.send(partners);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const partners = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"partners created",
      data:partners
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const partners = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"partners update",
      data:partners
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const partners = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"partners deleted",
      data:partners
    })
  } catch (error) {
    console.error(error);
  }
};



export default {
  GET,
  POST,
  PUT,
  DELETE,
};