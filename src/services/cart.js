async function addItem(userCart, item) {
    userCart.push(item);
    console.log(`${item.quantity} ${item.name} added to your cart`);
}

async function deleteItem(userCart, index) {
    userCart.splice(index, 1);
    console.log('Item deleted');
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((product) => product.name === item.name);

    if (indexFound === -1) {
        console.log(`Item not found`);
        return;
    }

    if (userCart[indexFound].quantity <=1) {
        await deleteItem(userCart, indexFound);
        return;
    }

    userCart[indexFound].quantity--;
    console.log(`One quantity removed`);
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => {
        return total += item.subtotal();
    }, 0);

    console.log(`Total in cart: ${result}`);
}

async function displayCart(userCart) {
    console.log("Shopee cart list:");

    let total = 0;

    userCart.forEach((item, index) => {
        console.log(`Item ${index + 1}. ${item.name} Quantity: ${item.quantity} Price: ${item.price} Subtotal: ${item.subtotal()}`);
        total += item.subtotal();
    });

    console.log(`Cart total: ${total}`);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
};