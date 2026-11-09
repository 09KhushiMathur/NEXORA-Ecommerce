import { updateCartValue } from "./src/updateCartValue";
import { getCartProductsFromLS } from "./src/getCartProducts";
import { ulpdateCartProductTota } from "./updateCartProductTotal";
export const removeFromCart = (id) => {
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter((curPro) => curPro.id !== id);
    
    
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
    let CartElement = document.getElementById(`card${id}`);
    if(CartElement){
        CartElement.remove();
    }
    updateCartValue(cartProducts);
    ulpdateCartProductTota();
}