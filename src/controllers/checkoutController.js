require("dotenv").config();
const stripe = require("stripe")(process.env.KEY);

const checkoutGet = async (req, res) => {
  const items = req.body.items;

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
