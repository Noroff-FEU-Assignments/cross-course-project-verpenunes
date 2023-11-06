const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://cors.noroff.dev/https://game-hub.store/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();
    
        console.log(details);
    
        createHtml(details);
    
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="detail-container"><div class="product-image-detail" 
                                 style="background-image:url(${details.images[0].src});"</div>
                                 <div class="productName-detail"><p>${details.name}</p></div>
                                 <div class="productPrice-detail"><p>${details.price_html}</p></div>
                                 </div>
                                 `;                   
}

/* <div class="productPrice-descripition"><h4>${details.short_description}</h4></div>*/