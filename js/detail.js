const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://cors.noroff.dev/https://game-hub.store/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchGame() {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);

}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="detail-container"><div class="product-image-detail" 
                                 style="background-image:url(${details.images[0].src});"</div>
                                 <div class="productName-detail"><h2>${details.name}</h2></div>
                                 <div class="productPrice-detail"><h3>${details.price_html}</h3></div>
                                 </div>
                                 `;                   
}

/* <div class="productPrice-descripition"><h4>${details.short_description}</h4></div>*/