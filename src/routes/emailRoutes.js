const { Router } = require("express");
const { getEmail } = require("../controllers/emailController");

const emailRouter = Router();

emailRouter.post("/", getEmail);

module.exports = { emailRouter };
