import { renderGames } from "./renderGames.js";

export function searchGames(products) {
    const search = document.querySelector(".search");

    search.onkeyup = function(event) {
        console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredGames = products.filter(function(game) {
            if (game.name.toLowerCase().includes(searchValue)) {
                return true;
            }
        });

        renderGames(filteredGames);

    }; 
}