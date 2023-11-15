export function renderGames(gamesToRender) {
    const productContainer = document.querySelector(".newProducts");
    productContainer.innerHTML = "";

    gamesToRender.forEach(function(product) {
        productContainer.innerHTML += `<a href="cart.html?id=${product.id}" class="productDetail">
                                          <div class="product-image" style="background-image: url(${product.images[0].src})">
                                              <div class="productName">
                                              <h4 class="name-product">${product.name}</h4>
                                              <a href="cart.html?id=${product.id}" class="button-game-page">See more</a>
                                         </div> 
                                      </a>`;
});
}