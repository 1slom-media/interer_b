import model from "./model.js";

const GET = async (req, res) => {
    try {
      const client = await model.GET(req.params);
      res.send(client);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const client = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"client created",
      data:client
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const client = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"client update",
      data:client
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const client = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"client deleted",
      data:client
    })
  } catch (error) {
    console.error(error);
  }
};



export default {
  GET,
  POST,
  PUT,
  DELETE
};