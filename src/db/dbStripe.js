const productArray = [
  { id: "price_1MwJISL6lgKHC7sSXU6UtwkH", title: "Coffee", price: 4.99 },
  { id: "price_1MwJKJL6lgKHC7sS15SBd26n", title: "Sunglasses", price: 56.99 },
  { id: "price_1MwJLDL6lgKHC7sSCwPZY486", title: "Camera", price: 34.99 },
];

const getProductData = (id) => {
  let productData = productArray.find((product) => product.id === id);
  if (productData == undefined) {
    console.log("product data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
};

export { productArray, getProductData };
