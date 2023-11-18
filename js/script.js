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

//const gameDiv = document.querySelector(".newProducts");
//gameDiv.innerHTML = baseUrl;
//document.querySelector(".sort").addEventListener("click", function(gameList) {
//gameDiv.sort(baseUrl);
//})
