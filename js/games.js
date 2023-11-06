const productContainer = document.querySelector(".newProducts");

const baseUrl = "https://cors.noroff.dev/https://game-hub.store/wp-json/wc/store/products";

async function getProducts() {

    try {
        const response = await fetch(baseUrl);
        const products = await response.json();
        //console.log(products);
        productContainer.innerHTML = "";
        
        products.forEach(function(product) {
            productContainer.innerHTML += 
            `<a href="cart.html?id=${product.id}" class="productDetail">
                  <div class="product-image" style="background-image: url(${product.images[0].src});"</div>
                  <div class="productName">
                      <h4 class="name-product">${product.name}</h4>
                      <a href="cart.html?id=${product.id}" class="button-game-page">See more</a>
                  </div>
                   
            </a>`;
    });
    
    }
    catch(error) {
        console.log(error);
        productContainer.innerHTML = message("error", error);
    }

}

getProducts(baseUrl);