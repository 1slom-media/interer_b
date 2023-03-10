import model from "./model.js";

const GET = async (req, res) => {
    try {
      const youtube = await model.GET(req.params);
      res.send(youtube);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const youtube = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"youtube created",
      data:youtube
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const youtube = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"youtube update",
      data:youtube
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const youtube = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"youtube deleted",
      data:youtube
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