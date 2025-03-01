document.addEventListener("DOMContentLoaded", function () {
    const watchButtons = document.querySelectorAll(".watch-btn");

    watchButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const movieLink = this.getAttribute("href");
            if (movieLink && movieLink !== "#") {
                window.open(movieLink, "_blank");
            }
        });
    });

    // Image error handling
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.onerror = function () {
            this.src = "https://via.placeholder.com/200"; // Fallback image
        };
    });

    // Responsive menu
    const nav = document.querySelector("nav");
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
