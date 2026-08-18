document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menuButton && nav) {
        menuButton.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
            menuButton.textContent = isOpen ? "×" : "☰";
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation");
                menuButton.textContent = "☰";
            });
        });
    }

    const slide = document.getElementById("slide");
    const dots = document.querySelectorAll(".dot");
    if (!slide || !dots.length) return;

    const images = [
        "1.JPG", "2.jpeg", "3.jpeg", "4.jpg", "5.JPG",
        "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"
    ];
    let index = 0;

    setInterval(function () {
        index = (index + 1) % images.length;
        slide.src = images[index];
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }, 3000);
});
