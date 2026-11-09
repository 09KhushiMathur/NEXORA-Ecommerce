import products from "./api/products.json";
import { getCartProductsFromLS } from "./src/getCartProducts";
import { fetchQuantityFromCartLS } from "./fetchQuantity";
import { removeFromCart } from "./removeProductFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { ulpdateCartProductTota } from "./updateCartProductTotal";


let cartProducts = getCartProductsFromLS();
console.log(cartProducts);
let filterProducts = products.filter((curPro) => {
    return cartProducts.some((currEle) => currEle.id === curPro.id);
});
console.log(filterProducts);

const CartElement = document.querySelector("#productCartContainer");
const templetContainer = document.querySelector("#productCartTemplate");

const showCartProducts = () => {
    filterProducts.forEach((curPro) => {
        const { category, id, image, name, stock, price } = curPro;
        let productClone = document.importNode(templetContainer.content, true);
        let LSActualData = fetchQuantityFromCartLS(id, price);
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = LSActualData.price;
        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;
        productClone.querySelector(".stockElement").addEventListener("click",(e)=>{
            incrementDecrement(e,id,stock,price);
    })
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () =>removeFromCart(id));
        CartElement.appendChild(productClone);
    })
}
showCartProducts();

ulpdateCartProductTota();