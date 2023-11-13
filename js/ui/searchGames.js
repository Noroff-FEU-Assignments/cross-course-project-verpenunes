import { renderGames } from "./renderGames.js";

export function searchGames(games) {
    const search = document.querySelector(".search");

    search.onkeyup = function(event) {
        console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredGames = games.filter(function(game) {
            if (game.name.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderGames(filteredGames);

    };
}