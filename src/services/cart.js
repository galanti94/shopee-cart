async function addItem(userCart, item) {
    userCart.push(item);
    console.log(`${item.quantity} ${item.name} added to your cart`);
}

async function deleteItem(userCart, index) {
    
}

async function removeItem(userCart, index) {
    if (index < 0 || index >= userCart.length) {
        console.log("Index out of scope");
        return;
    }

    const removeIndex = index - 1;

    userCart.splice(removeIndex, 1);
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