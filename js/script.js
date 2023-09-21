const button = document.querySelector(".add-cart-button a");

console.log(button);

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "green";
});

button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
});

const hamburgerMenu = document.querySelectorAll("#hamburger-menu");

console.log(hamburgerMenu);

hamburgerMenu.addEventListener("mouseover", () => {
    hamburgerMenu.color = "yellow";
});

hamburgerMenu.addEventListener("mouseout", () => {
    hamburgerMenu.color = "";
});