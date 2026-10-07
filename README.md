# Merlyn Floors

Official website for **Merlyn Floors**, showcasing flooring solutions, product collections, catalogues, completed projects, and company information.

🌐 **Live Website:** [www.merlynfloors.com](https://www.merlynfloors.com)

## About the Website

The Merlyn Floors website is designed to provide customers, architects, designers, builders, and distributors with an easy way to explore the company's flooring solutions and product collections.

The website focuses on a clean and responsive user experience across **desktop, laptop, tablet, and mobile devices**.

## Features

* Responsive design for desktop, tablet, and mobile
* Product collection showcase
* Individual product/category pages
* Product colour and design variants
* Digital catalogues
* Company information and journey
* Project showcase
* Contact and location information
* Responsive image galleries
* Optimized image loading
* Mobile-friendly navigation
* Custom domain deployment
* Cross-device compatible layout

## Website Sections

The website includes:

* **Home**
* **Our Products**
* **Our Catalogues**
* **About Us**
* **Our Projects**
* **Contact Us**

## Technologies Used

* **HTML5** — Website structure
* **CSS3** — Styling and responsive design
* **JavaScript** — Interactive elements and functionality
* **Git & GitHub** — Version control and source code management
* **Vercel** — Website hosting and deployment
* **GoDaddy** — Domain and DNS management

## Responsive Design

The website has been optimized for multiple screen sizes, including:

* Mobile phones
* Tablets and iPads
* Laptops
* Desktop monitors

CSS media queries, Flexbox, Grid, responsive images, and adaptive layouts are used to provide a consistent experience across devices.

## Performance Optimization

The website includes several optimizations to improve loading speed and usability:

* Lazy loading for non-critical images
* Responsive image sizing
* Optimized product images
* Reduced layout shifts
* Lightweight JavaScript
* Efficient CSS layouts

## Deployment

The website is deployed using **Vercel** and connected to the custom domain:

**https://www.merlynfloors.com**

The project follows a GitHub-based deployment workflow:

```text
Local Development (VS Code)
        ↓
Git Commit
        ↓
GitHub
        ↓
Vercel Deployment
        ↓
www.merlynfloors.com
```

Updates pushed to the production branch are automatically deployed through Vercel.

## Running the Project Locally

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd <repository-folder>
```

Since the website uses HTML, CSS, and JavaScript, it can be opened directly using `index.html` or served using a local development server such as the **VS Code Live Server** extension.

## Project Structure

```text
merlyn-floors-website/
│
├── index.html            # Home
├── about.html            # About Us
├── projects.html         # Our Projects
├── catalogues.html       # Our Catalogues
├── contact.html          # Contact Us
├── carpet.html           # Carpet Tiles
├── wall.html             # Wall to Wall Carpet
├── lvt.html              # LVT Flooring
├── sports.html           # Sports Flooring
├── gym.html              # Gym Flooring
├── grass.html            # Artificial Grass
├── pvc.html              # PVC Mat
│
├── style*.css            # Page-specific stylesheets (e.g. stylecarpet.css, stylelvt.css)
├── responsive.css        # Shared header and mobile/tablet/desktop rules (loaded last)
├── script.js             # Menu, dropdown, tabs and image handling
│
├── assets/web/           # Optimised WebP images
├── images/               # Product, application and project images
├── cata/                 # Catalogue PDFs and previews
│
├── sitemap.xml           # Pages listed for search engines
├── robots.txt            # Crawler rules and sitemap location
├── favicon.png
└── README.md
```

> Stylesheets and scripts sit in the repository root; images are grouped in `assets/web`, `images` and `cata`.

## Future Improvements

Potential future enhancements include:

* Further image and performance optimization
* Improved accessibility
* SEO enhancements
* Expanded product collections
* Additional project showcases
* Improved animations and transitions

## Website

Visit the official Merlyn Floors website:

**[www.merlynfloors.com](https://www.merlynfloors.com)**

---

© Merlyn Floors. All rights reserved.

