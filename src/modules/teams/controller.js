import model from "./model.js";

const GET = async (req, res) => {
    try {
      const teams = await model.GET(req.params);
      res.send(teams);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const teams = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"teams created",
      data:teams
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const teams = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"teams update",
      data:teams
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const teams = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"teams deleted",
      data:teams
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