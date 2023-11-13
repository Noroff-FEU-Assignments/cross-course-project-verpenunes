export function renderGames(gamesToRender) {
    const gameContainer = document.querySelector(".newProducts");
    gameContainer.innerHTML = "";

    gamesToRender.forEach(function (game) {
        gameContainer.innerHTML += `<div class="game">
                                     <h5>${game.name}</h5>
                                    </div>`;
    });
}