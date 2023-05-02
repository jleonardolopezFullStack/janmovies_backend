require("dotenv").config();
const stripe = require("stripe")(process.env.KEY);
const port = process.env.PORT || 3001;

const checkoutGet = async (req, res) => {
  const items = req.body.items;
  console.log("probando si entramos aqui");
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({ price: item.idStripe, quantity: item.quantity });
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ msg: lineItems, url: session.url });
};

module.exports = { checkoutGet };
