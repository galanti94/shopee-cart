import createItem from "./services/item.js";
import {
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
    displayCart,
} from "./services/cart.js"

const cart = [];

console.log('Walcome to your Shopee Cart!');

const item1 = await createItem('hotwheels ferrari', 20.99, 1);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);

await addItem(cart, item1);
await addItem(cart, item2);

await removeItem(cart, item2);

await displayCart(cart);

