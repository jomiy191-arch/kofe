const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-list");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
});

window.addEventListener("load", function () {
    const loader = document.getElementById("preloader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 500);
});
nks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("preloader").classList.remove("hide");
    });
});
