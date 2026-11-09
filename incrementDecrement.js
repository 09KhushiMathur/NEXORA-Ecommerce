import { getCartProductsFromLS } from "./src/getCartProducts";
import { ulpdateCartProductTota } from "./updateCartProductTotal";
export const incrementDecrement = (e, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductsFromLS();
    let existingPro = localCartProducts.find((curPro) => curPro.id === id);
    if (existingPro) {
        quantity = existingPro.quantity;
        localStoragePrice = existingPro.price;
    } else {
        localStoragePrice = price;
        price = price;
    }
    if (e.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
            localStoragePrice = price * quantity;
        } else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if (e.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
            localStoragePrice = price * quantity;
        }

    }
    localStoragePrice = price * quantity;
    localStoragePrice = localStoragePrice.toFixed(2);


    let updateCart = { id, quantity, price: localStoragePrice };
    updateCart = localCartProducts.map((currPro) => {
        return currPro.id == id ? updateCart : currPro;
    });
    console.log(updateCart);
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;
    ulpdateCartProductTota();
}

