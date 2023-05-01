const { Router } = require("express");
const { check } = require("express-validator");
const { checkoutGet } = require("../controllers/checkoutController");

const checkoutRouter = Router();

checkoutRouter.post("/", checkoutGet);

module.exports = { checkoutRouter };
