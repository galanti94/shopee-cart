async function addItem(userCart, item) {
    userCart.push(item);
    console.log(`${item.quantity} ${item.name} added to your cart`);
}

async function deleteItem(userCart, item) {
    
}

async function removeItem(userCart, item) {
    
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => {
        return total += item.subtotal();
    }, 0);

    console.log(`Total in cart: ${result}`);
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
};