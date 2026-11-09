import './style.css'
import products from "../api/products.json";
import { showProductContainer } from "./homeProductCards";
console.log(products);
// call the fuction to display all the products as a cart


showProductContainer(products);
