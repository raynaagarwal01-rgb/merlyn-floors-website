const images = [
    "1.JPG",
    "2.jpeg",
    "3.jpeg",
    "4.jpg",
    "5.JPG",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
];

let index = 0;

const dots = document.querySelectorAll(".dot");

setInterval(function () {

    index = (index + 1) % images.length;

    document.getElementById("slide").src = images[index];

    dots.forEach(dot => dot.classList.remove("active"));

    dots[index].classList.add("active");

}, 3000);