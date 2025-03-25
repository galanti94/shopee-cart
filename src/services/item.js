async function createItem(name, price, quantity) {
    let currentQuantity = quantity;

    return {
        name,
        price,
        get quantity() {
            return currentQuantity;
        },
        set quantity(newQuantity) {
            currentQuantity = newQuantity;
        },
        subtotal: () => price * currentQuantity
    };
}

export default createItem;