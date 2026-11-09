import { getCartProductsFromLS } from "./getCartProducts";
getCartProductsFromLS();
export const addToCart = (e, id, stock) => {
    let arrLocalStorageProduct = getCartProductsFromLS();
    const currentProduct = document.querySelector(`#card${id}`);
    // console.log(currentProduct);
    let quantity = currentProduct.querySelector(".productQuantity").innerText;
    let price = currentProduct.querySelector(".productPrice").innerText;
    // console.log(price, quantity)
    price = price.replace("₹", "");

    let existing = arrLocalStorageProduct.find((currEle) => currEle.id === id);
   
    if (existing && quantity > 1) {
        quantity = Number(existing.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updateCart = { id, quantity, price };
        updateCart = arrLocalStorageProduct.map((currPro) => {
            return currPro.id == id ? updateCart : currPro;
        });
        console.log(updateCart);
        localStorage.setItem("cartProductLS",JSON.stringify(updateCart));
    }

    if (existing) {
    quantity = Number(existing.quantity) + Number(quantity);

    price = Number(price) * quantity;

    let updateCart = { id, quantity, price };

    updateCart = arrLocalStorageProduct.map((currPro) => {
        return currPro.id == id ? updateCart : currPro;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    return;
}
    quantity = Number(quantity)


    price = price * quantity;
    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


};
