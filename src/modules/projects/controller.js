import model from "./model.js";

const GET = async (req, res) => {
    try {
      const projects = await model.GET(req.params);
      res.send(projects);
    } catch (error) {
      console.error(error);
    }
};

const POST = async (req, res) => {
  try {
    const projects = await model.POST(req.body);
    res.status(201).json({
      status:201,
      message:"projects created",
      data:projects
    })
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const projects = await model.PUT(req.params,req.body);
    res.status(202).json({
      status:202,
      message:"projects update",
      data:projects
    })
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const projects = await model.DELETE(req.params);
    res.status(202).json({
      status:203,
      message:"projects deleted",
      data:projects
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