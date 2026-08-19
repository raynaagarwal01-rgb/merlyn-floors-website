/* Shared client-side site layer. Content remains available as HTML if JavaScript is disabled. */

const siteNavigation = [
    ["Home", "index.html"],
    ["Our Projects", "projects.html"],
    ["Contact Us", "contact.html"],
    ["Catalogues", "catalogues.html"],
    ["About Us", "about.html"]
];

const productNavigation = [
    ["CARPET TILES", "carpet.html"],
    ["WALL TO WALL CARPET", "wall.html"],
    ["LVT FLOORING", "lvt.html"],
    ["SPORTS FLOORING", "sports.html"],
    ["GYM FLOORING", "gym.html"],
    ["ARTIFICIAL GRASS", "grass.html"],
    ["PVC MAT", "pvc.html"]
];

const catalogueSections = [
    { container: ".catalog-container", card: "catalog-card", items: [
        ["Diva", "images/catalog2.jpg", "cata/diva.pdf"],
        ["Streamline", "images/Streamline pic.jpg", "cata/Streamline.pdf"],
        ["Reborn", "images/Rebornn.png", "cata/REBORN.pdf"]
    ] },
    { container: ".catalogs-container", card: "catalogs-card", items: [
        ["Laylines", "images/LAYLINES pic.png", "cata/LAYLINES.pdf"],
        ["Appeal", "images/Appeall.png", "cata/appeal.pdf"],
        ["Embark", "images/catalog3.jpg", "cata/embark.pdf"]
    ] },
    { container: ".catalogss-container", card: "catalogss-card", items: [
        ["Tranquil", "images/Tranquil pic.jpg", "cata/TRANQUIL.pdf"],
        ["Radiance", "images/Radiance.jpg", "cata/RADIANCE.pdf"],
        ["Graffiti", "images/Graffiti.png", "cata/Graffiti.pdf"]
    ] },
    { container: ".catalog1-container", card: "catalog1-card", items: [
        ["Vintage", "images/Vintage pic.jpg", "cata/VINTAGE.pdf"],
        ["Motif", "images/Motif pic.jpg", "cata/MOTIF.pdf"],
        ["Velvet Sapphire", "images/Velvet sapphire pic.jpg", "cata/VELVET SAPPHIRE.pdf"]
    ] },
    { container: ".catalog11-container", card: "catalog11-card", items: [
        ["Cloud Step", "images/Cloud step pic.jpg", "cata/CLOUDSTEP.pdf"],
        ["Silky Breeze", "images/Silky breeze pic.jpg", "cata/SILKY BREEZE.pdf"]
    ] },
    { container: ".catalog111-container", card: "catalog111-card", items: [
        ["1.5mm", "images/1.5mm.5mm pic", "cata/IKONIC 1.5mm.pdf"],
        ["2mm", "images/2mm.jpg", "cata/IKONIC 2MM.pdf"]
    ] },
    { container: ".catalog2-container", card: "catalog2-card", items: [
        ["RAVEFLEX", "images/Raveflex.png", "cata/RAVEFLEX.pdf"],
        ["TOPFLEX", "images/Topflex.png", "cata/Topflex Prime.pdf"],
        ["MERLYN TURF", "images/Turf pic.jpg", "cata/MERLYN TURF.pdf"]
    ] },
    { container: ".catalog12-container", card: "catalog12-card", items: [
        ["SPORTEK", "images/Sportek.jpg", "cata/SPORTEK SPORTS FLOORING.pdf"],
        ["ENDURA", "images/Endura pic.jpg", "cata/ENDURA.pdf"]
    ] }
];

function currentPage() {
    const file = window.location.pathname.split("/").pop();
    return file || "index.html";
}

function renderNavigation() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const page = currentPage();
    const links = siteNavigation.map(([label, href]) => `
        <li><a href="${href}"${page === href ? ' aria-current="page"' : ""}>${label}</a></li>
    `).join("");
    const products = productNavigation.map(([label, href]) => `
        <li><a href="${href}">${label}</a></li>
    `).join("");

    navbar.innerHTML = `
        <div class="logo"><a href="index.html" aria-label="Ravishing Floors home">
            <img src="logo.PNG" alt="Ravishing Floors logo">
        </a></div>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
        <ul class="nav-links">
            <li class="dropdown">
                <button class="products-toggle" type="button" aria-expanded="false">Products <span aria-hidden="true">▼</span></button>
                <ul class="dropdown-content">${products}</ul>
            </li>
            ${links}
        </ul>
    `;

    const menuButton = navbar.querySelector(".menu-toggle");
    const nav = navbar.querySelector(".nav-links");
    const productsToggle = navbar.querySelector(".products-toggle");
    const dropdown = navbar.querySelector(".dropdown");

    menuButton.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        menuButton.textContent = isOpen ? "×" : "☰";
    });

    productsToggle.addEventListener("click", function () {
        const isOpen = dropdown.classList.toggle("submenu-open");
        productsToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("open");
            dropdown.classList.remove("submenu-open");
            productsToggle.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
            menuButton.textContent = "☰";
        });
    });
}

function renderCatalogues() {
    catalogueSections.forEach(function (section) {
        const container = document.querySelector(section.container);
        if (!container) return;

        container.replaceChildren(...section.items.map(function ([label, image, pdf]) {
            const card = document.createElement("div");
            card.className = section.card;
            card.innerHTML = `
                <img src="${image}" alt="${label} catalogue" loading="lazy" decoding="async">
                <b>${label}</b><br><br>
                <a href="${pdf}" download class="download-btn">Download</a>
            `;
            return card;
        }));
    });
}

function initHomepageSlider() {
    const slide = document.getElementById("slide");
    const dots = document.querySelectorAll(".dot");
    if (!slide || !dots.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const images = ["1.JPG", "2.jpeg", "3.jpeg", "4.jpg", "5.JPG", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
    let index = 0;

    window.setInterval(function () {
        index = (index + 1) % images.length;
        slide.src = images[index];
        slide.alt = `Ravishing Floors project ${index + 1}`;
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) dots[index].classList.add("active");
    }, 3000);
}

function improveModals() {
    document.querySelectorAll(".modal").forEach(function (modal) {
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.setAttribute("aria-label", "Image gallery");

        const close = modal.querySelector(".close");
        if (close) {
            close.setAttribute("role", "button");
            close.setAttribute("tabindex", "0");
            close.setAttribute("aria-label", "Close image gallery");
            close.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    if (typeof closeModal === "function") closeModal();
                }
            });
        }

        const modalImage = modal.querySelector(".modal-image");
        if (modalImage) modalImage.alt = "Expanded flooring product or project image";
    });

    document.addEventListener("keydown", function (event) {
        if (event.key !== "Escape") return;
        const openModal = document.querySelector('.modal[style*="flex"], .modal[style*="block"]');
        if (openModal && typeof closeModal === "function") closeModal();
    });
}

function improveMarkup() {
    document.querySelectorAll("img:not([alt])").forEach(function (image) {
        image.alt = "Ravishing Floors flooring project or product image";
    });

    document.querySelectorAll("img").forEach(function (image, index) {
        if (index > 1 && !image.hasAttribute("loading")) image.loading = "lazy";
        if (!image.hasAttribute("decoding")) image.decoding = "async";
    });

    document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
        const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
        rel.add("noopener");
        rel.add("noreferrer");
        link.setAttribute("rel", Array.from(rel).join(" "));
    });

    document.querySelectorAll("[id=mainImage]").forEach(function (image) {
        image.removeAttribute("id");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    renderNavigation();
    renderCatalogues();
    improveMarkup();
    improveModals();
    initHomepageSlider();
});
