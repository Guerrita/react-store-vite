/**
 * This Function calculates total price of a new order
 * @param {Array} products CartProducts: Array of Objects (JSON)
 * @returns {number} Total price for products
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => {
      sum += product.price;
    });
    return sum;
}