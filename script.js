window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.style.backgroundColor = window.scrollY > 50 ? "#000" : "#0a3cff";
});
