import model from "./model.js";

const GET = async (req, res) => {
    try {
      const images = await model.GET(req.params);
      res.send(images);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const images = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"images created",
      data:images
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const images = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"images update",
      data:images
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const images = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"images deleted",
      data:images
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