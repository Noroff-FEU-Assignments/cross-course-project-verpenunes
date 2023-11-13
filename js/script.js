import { renderGames } from "./ui/renderGames.js";
import { searchGames } from "./ui/searchGames.js";

const gamesUrl = "https://cors.noroff.dev/https://game-hub.store/wp-json/wc/store/products";

async function getGames() {
    const response = await fetch(gamesUrl);
    const games = await response.json();
    //console.log(games);

    //let gamesToRender = games;
    //renderGames(gamesToRender);
    //searchGames(gamesToRender);
}

getGames(gamesUrl);


const button = document.querySelector(".add-cart-button a");

//console.log(button);

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "green";
});

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
});

//const hamburgerMenu = document.querySelector("#hamburger-menu");

//console.log(hamburgerMenu);

//hamburgerMenu.addEventListener("mouseover", () => {
    //hamburgerMenu.color = "yellow";
//});

//hamburgerMenu.addEventListener("mouseout", () => {
    //hamburgerMenu.color = "";
//});
