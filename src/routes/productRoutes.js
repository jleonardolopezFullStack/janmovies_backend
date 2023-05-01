const { Router } = require("express");
const { check } = require("express-validator");
const {
  productGet,
  productGetOne,
  productPost,
  productDelete,
} = require("../controllers/productController");
const { tokenVerification } = require("../middlewears/tokenVerification");
const { generalResult } = require("../middlewears/validationResult");

const productRoter = Router();

productRoter.get("/", /* [tokenVerification, generalResult], */ productGet);

productRoter.get(
  "/:name",
  [
    /* tokenVerification, */
    check("name", "The name have to be fill").not().isEmpty(),
    generalResult,
  ],
  productGetOne
);

productRoter.post(
  "/:token",
  [
    tokenVerification,
    check("name", "The name have to be fill").not().isEmpty(),
    generalResult,
  ],
  productPost
);

productRoter.delete(
  "/:name/:token",
  [
    tokenVerification,
    check("name", "The name have to be fill").not().isEmpty(),
    generalResult,
  ],
  productDelete
);

module.exports = { productRoter };
