/* Shared client-side site layer. Content remains available as HTML if JavaScript is disabled. */

const siteNavigation = [
    ["Home", "index.html"],
    ["Our Projects", "projects.html"],
    ["Our Catalogues", "catalogues.html"],
    ["About Us", "about.html"],
    ["Contact Us", "contact.html"]
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
        ["Diva", "assets/web/catalog2-4b23aa7eca.webp", "cata/diva.pdf"],
        ["Streamline", "assets/web/streamline-pic-448ab37f15.webp", "cata/Streamline.pdf"],
        ["Reborn", "assets/web/rebornn-4316ac3f1d.webp", "cata/REBORN.pdf"]
    ] },
    { container: ".catalogs-container", card: "catalogs-card", items: [
        ["Laylines", "assets/web/laylines-pic-ed707fd5b5.webp", "cata/LAYLINES.pdf"],
        ["Appeal", "assets/web/appeall-2e4b31e222.webp", "cata/appeal.pdf"],
        ["Embark", "assets/web/catalog3-e4fb9022f0.webp", "cata/embark.pdf"]
    ] },
    { container: ".catalogss-container", card: "catalogss-card", items: [
        ["Tranquil", "assets/web/tranquil-pic-71b721266c.webp", "cata/TRANQUIL.pdf"],
        ["Radiance", "assets/web/radiance-08c83beec4.webp", "cata/RADIANCE.pdf"],
        ["Graffiti", "assets/web/graffiti-3a02d8f426.webp", "cata/Graffiti.pdf"]
    ] },
    { container: ".catalog1-container", card: "catalog1-card", items: [
        ["Vintage", "images/Vintage pic.jpg", "cata/VINTAGE.pdf"],
        ["Motif", "assets/web/motif-pic-8fe5582a6e.webp", "cata/MOTIF.pdf"],
        ["Velvet Sapphire", "assets/web/velvet-sapphire-pic-efedd34a67.webp", "cata/VELVET SAPPHIRE.pdf"]
    ] },
    { container: ".catalog11-container", card: "catalog11-card", items: [
        ["Cloud Step", "assets/web/cloud-step-pic-16319be2c1.webp", "cata/CLOUDSTEP.pdf"],
        ["Silky Breeze", "assets/web/silky-breeze-pic-652f0f3fbf.webp", "cata/SILKY BREEZE.pdf"]
    ] },
    { container: ".catalog111-container", card: "catalog111-card", items: [
        ["1.5mm", "assets/web/ikonic-1-5mm-catalog.webp", "cata/IKONIC 1.5mm.pdf"],
        ["2mm", "assets/web/2mm-e8a0142c27.webp", "cata/IKONIC 2MM.pdf"]
    ] },
    { container: ".catalog2-container", card: "catalog2-card", items: [
        ["RAVEFLEX", "assets/web/raveflex-c7050deb02.webp", "cata/RAVEFLEX.pdf"],
        ["TOPFLEX", "assets/web/topflex-0bf9522c4c.webp", "cata/Topflex Prime.pdf"],
        ["MERLYN TURF", "images/Turf pic.jpg", "cata/MERLYN TURF.pdf"]
    ] },
    { container: ".catalog12-container", card: "catalog12-card", items: [
        ["SPORTEK", "assets/web/sportek-ab5fd71588.webp", "cata/SPORTEK SPORTS FLOORING.pdf"],
        ["ENDURA", "assets/web/endura-pic-a1777039cd.webp", "cata/ENDURA.pdf"]
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
    const links = siteNavigation.slice(1).map(([label, href]) => `
        <li><a href="${href}"${page === href ? ' aria-current="page"' : ""}>${label}</a></li>
    `).join("");
    const [homeLabel, homeHref] = siteNavigation[0];
    const productsAreCurrent = productNavigation.some(([, href]) => href === page);
    const products = productNavigation.map(([label, href]) => `
        <li><a href="${href}">${label}</a></li>
    `).join("");

    navbar.innerHTML = `
        <div class="logo"><a href="index.html" aria-label="Ravishing Floors home">
            <img src="logo.PNG" alt="Ravishing Floors logo" width="246" height="90" decoding="async">
        </a></div>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
        <ul class="nav-links">
            <li><a href="${homeHref}"${page === homeHref ? ' aria-current="page"' : ""}>${homeLabel}</a></li>
            <li class="dropdown">
                <button class="products-toggle" type="button" aria-expanded="false"${productsAreCurrent ? ' aria-current="page"' : ""}>Our Products <span aria-hidden="true">▼</span></button>
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
                <img data-src="${image}" alt="${label} catalogue" loading="lazy" decoding="async">
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

let deferredImageObserver;

function loadDeferredImage(image) {
    const source = image.dataset.src;
    if (!source) return;

    image.classList.add("deferred-image");
    const revealImage = function () {
        image.classList.add("is-loaded");
    };
    image.addEventListener("load", revealImage, { once: true });
    image.addEventListener("error", revealImage, { once: true });
    image.src = source;
    image.removeAttribute("data-src");
    if (image.complete) revealImage();
    if (deferredImageObserver) deferredImageObserver.unobserve(image);
}

function initializeDeferredImages(root = document) {
    const images = root.querySelectorAll("img[data-src]");
    if (!images.length) return;

    if (!("IntersectionObserver" in window)) {
        images.forEach(loadDeferredImage);
        return;
    }

    if (!deferredImageObserver) {
        deferredImageObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) loadDeferredImage(entry.target);
            });
        }, { rootMargin: "500px 0px", threshold: 0.01 });
    }

    images.forEach(function (image) {
        image.classList.add("deferred-image");
        deferredImageObserver.observe(image);
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

    const priorityImages = document.querySelectorAll(
        ".slider img, .carpet-right img, .grass-right img, .gym-right img, " +
        ".lvt-right img, .pvc-right img, .sports-right img, .wall-right img, " +
        ".tab-content.active-content .main-image"
    );
    priorityImages.forEach(function (image, index) {
        loadDeferredImage(image);
        image.loading = "eager";
        if (index === 0) image.fetchPriority = "high";
    });

    initializeDeferredImages();

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
