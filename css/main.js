const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-list");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});
