const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { authRouter } = require("./src/routes/authRoutes");
const { mongoConnection } = require("./src/db/dbConection");
const { loginRouter } = require("./src/routes/loginRoutes");
const { productRoter } = require("./src/routes/productRoutes");
const { categoryRouter } = require("./src/routes/categoryRoutes");
const { packRouter } = require("./src/routes/packRoutes");
const { emailRouter } = require("./src/routes/emailRoutes");
const { checkoutRouter } = require("./src/routes/checkoutRoutes");

const app = express();
const port = process.env.PORT;
const links = {
  authentication: "/auth",
  login: "/login",
  product: "/product",
  category: "/category",
  pack: "/pack",
  email: "/email",
  checkout: "/checkout",
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(links.authentication, authRouter);
app.use(links.login, loginRouter);
app.use(links.product, productRoter);
app.use(links.category, categoryRouter);
app.use(links.pack, packRouter);
app.use(links.email, emailRouter);
app.use(links.checkout, checkoutRouter);

app.listen(port, () => {
  console.log(`Server is runing in port: ${port}`);
});