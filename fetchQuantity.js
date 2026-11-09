import { getCartProductsFromLS } from "./src/getCartProducts";

export const fetchQuantityFromCartLS = (id,price)=>{
    let cartProducts = getCartProductsFromLS();
    let existingPro = cartProducts.find((curPro)=>curPro.id === id);
    let quantity = 1;

    if(existingPro){
        quantity = existingPro.quantity;
        price = existingPro.price;

    }
    return {quantity, price};
}