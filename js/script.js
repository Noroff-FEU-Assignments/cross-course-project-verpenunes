import { renderGames } from "./ui/renderGames.js";
import { searchGames } from "./ui/searchGames.js";

const baseUrl = "https://cors.noroff.dev/https://game-hub.store/wp-json/wc/store/products";

async function getProducts() {
   try {
        const response = await fetch(baseUrl);
        const products = await response.json();
        console.log(products);

        renderGames(products);
        searchGames(products);
        
    } catch(error) {
        console.log(error);
        productContainer.innerHTML = message("error", error);
    }
}

getProducts();


const button = document.querySelector(".add-cart-button a");

//console.log(button);

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "green";
});

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
});
