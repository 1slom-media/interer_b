import model from "./model.js";

const GET = async (req, res) => {
    try {
      const single = await model.GET(req.params);
      res.send(single);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const single = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"single created",
      data:single
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const single = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"single update",
      data:single
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const single = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"single deleted",
      data:single
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