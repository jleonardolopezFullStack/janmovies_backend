const { request, response } = require("express");
var jwt = require("jsonwebtoken");
const Category = require("../models/categorySchema");
const User = require("../models/authSchema");

const categoryGet = async (req, res) => {
  try {
    const categorys = await Promise.all([
      Category.countDocuments(),
      Category.find().populate("user", "name"),
    ]);
    categorys
      ? res.json({ msg: "category Get", categorys })
      : res.json({
          msg: "something went wrong, try again to get categorys",
        });
  } catch (error) {
    console.log(error);
  }
};
const categoryGetOne = async (req, res) => {
  const { name } = req.params;

  try {
    const category = await Category.findOne({ name }).populate("user", "name");
    category
      ? res.json({ msg: "category Get One", category })
      : res.json({
          msg: "something went wrong, try again to get category",
        });
  } catch (error) {
    console.log(error);
  }
};

const categoryPost = async (req, res) => {
  const { name } = req.body;
  const user = req.user;
  /* const secret = process.env.SECRET_KEY;
  console.log(token);
  if (!token) {
    return res.json({ msg: "Token have to be fill" });
  }
  const { user } = jwt.verify(token, secret);

  const verifyUserByToken = await User.findById(user._id);
  if (!verifyUserByToken) {
    return res.json({ msg: "wrong Token, please verify the information" });
  }

  const newUser = verifyUserByToken; */

  try {
    const data = {
      name,
      user: user.id,
    };
    const category = new Category(data);
    const newCategory = await category.save();
    newCategory
      ? res.json({ msg: "category Post", newCategory })
      : res.json({
          msg: "something went wrong, try again to create a new category",
        });
  } catch (error) {
    console.log(error);
  }
};

const categoryDelete = async (req, res) => {
  const { name } = req.params;
  console.log(name);
  try {
    const category = await Category.findOneAndRemove({ name });
    category
      ? res.json({ msg: "Category delete", category })
      : res.json({
          msg: "something went wrong, try again to delete category",
        });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { categoryGet, categoryGetOne, categoryPost, categoryDelete };
