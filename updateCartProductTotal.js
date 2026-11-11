import { getCartProductsFromLS } from "./src/getCartProducts";

export const ulpdateCartProductTota = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinaliTotal = document.querySelector(".productFinalTotal");
    let localCartProducts = getCartProductsFromLS();
    let intialValue = 0;

    let totalProductPrice = localCartProducts.reduce((acc, curEle) => {
        let productPrice = parseFloat(curEle.price) || 0;
        return acc + productPrice;
    }, intialValue);
    console.log(totalProductPrice);
    productSubTotal.textContent = `₹ ${totalProductPrice.toFixed(2)}`;
    productFinaliTotal.textContent = `₹ ${(totalProductPrice + 50).toFixed(2)}`;
    // productSubTotal.textContent = `₹ ${totalProductPrice}`;
    // productFinaliTotal.textContent = `₹ ${totalProductPrice + 50}`;
}