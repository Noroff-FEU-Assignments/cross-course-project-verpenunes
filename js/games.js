const productContainer = document.querySelector(".newProducts");

const baseUrl = "https://cors.noroff.dev/https://game-hub.store/wp-json/wc/store/products";

async function getProducts() {
    const response = await fetch(baseUrl);
    const products = await response.json();
    //console.log(products);
    productContainer.innerHTML = "";
    
    products.forEach(function(product){
        productContainer.innerHTML += 
        `<a href="cart.html?id=${product.id}" class="productDetail"> 
        <div class="product-image" style="background-image:url(${product.images[0].src});"</div>
        <div class="productName"><h2>${product.name}</h2>
        </div>
        </a>`;
})
}

getProducts(baseUrl);