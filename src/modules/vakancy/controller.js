import model from "./model.js";

const GET = async (req, res) => {
    try {
      const vakancy = await model.GET(req.params);
      res.send(vakancy);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const vakancy = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"vakancy created",
      data:vakancy
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const vakancy = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"vakancy update",
      data:vakancy
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const vakancy = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"vakancy deleted",
      data:vakancy
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