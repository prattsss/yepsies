const SLIDER_IMG_PATH = "assets/imgs/LandingPage/";
const SLIDES = [
    {
        headline1: "Pure",
        headline2: "Buffalo",
        slideScript: "Milk",
        tagline: "Freshness in every drop",
        img: SLIDER_IMG_PATH + "buffaloMilk.png",
        imgAlt: "Buffalo Milk",
        description: "Directly from our farm to your doorstep. Thick, creamy, and<br> 100% pure buffalo milk.",
        productName: "Fresh Buffalo Milk",
        productPrice: "₹65/Litre",
        bulkOrderLink: "bulk-orders.html"
    },
    {
        headline1: "Fresh",
        headline2: "Malai",
        slideScript: "Paneer",
        tagline: "The heart of your kitchen",
        img: SLIDER_IMG_PATH + "paneer.png",
        imgAlt: "Paneer",
        description: "Soft, spongy, and rich in protein. Our paneer is<br> made fresh every morning.",
        productName: "Fresh Malai Paneer",
        productPrice: "₹65/kg",
        bulkOrderLink: "bulk-orders.html"
    },
    {
        headline1: "Authentic",
        headline2: "Kaju",
        slideScript: "Katli",
        tagline: "Sweetness of tradition",
        img: SLIDER_IMG_PATH + "kajuKatli.png",
        imgAlt: "Kaju Katli",
        description: "Premium cashews and pure sugar. The perfect treat for<br> every celebration.",
        productName: "Authentic Kaju Katli",
        productPrice: "₹800/kg",
        bulkOrderLink: "bulk-orders.html"
    }
];

class HeroSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = Array.from(document.querySelectorAll(".slider"));
        this.indicators = Array.from(document.querySelectorAll(".indicator"));
        this.autoPlayInterval = null;
    }

    init() {
        if (!this.slides.length || !this.indicators.length) return;
        this.showSlide(0);
        this.setupIndicators();
        this.startAutoPlay();
    }

    showSlide(index) {
        this.slides.forEach((slide) => slide.classList.remove("active"));
        this.indicators.forEach((indicator) => indicator.classList.remove("active"));

        this.currentSlide = index;
        this.slides[index].classList.add("active");
        this.indicators[index].classList.add("active");
    }

    nextSlide() {
        this.showSlide((this.currentSlide + 1) % this.slides.length);
    }

    setupIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                this.showSlide(index);
                this.resetAutoPlay();
            });
        });
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 3000);
    }

    resetAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
    }
}

function createSlideComponent(slide, index) {
    const slideElement = document.createElement("div");
    slideElement.className = `slider slider-${index + 1}${index === 0 ? " active" : ""}`;
    slideElement.innerHTML = `
        <div class="slider-headline">${slide.headline1}<br>${slide.headline2}</div>
        <div class="slider-tagline">${slide.tagline}</div>
        <div class="slider-line slider-line-left"></div>
        <div class="slider-line slider-line-right"></div>
        <div class="slider-description">${slide.description}</div>
        <div class="slider-script">${slide.slideScript}</div>
        <img src="${slide.img}" alt="${slide.imgAlt}" class="slider-product-image">
        <div class="cta-buttons">
            <a href="${slide.bulkOrderLink}" class="btn btn-secondary">Bulk Order</a>
            <a href="#" onclick="orderOnWhatsApp('${slide.productName}', '${slide.productPrice}'); return false;" class="btn btn-primary">Order Now</a>
        </div>
    `;
    return slideElement;
}

function setActiveNavLink() {
    const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const homeAliases = new Set(["", "index.html", "test.html"]);
    document.querySelectorAll(".nav-links a").forEach((link) => {
        const href = (link.getAttribute("href") || "").toLowerCase();
        const isActive = href === currentFile || (homeAliases.has(currentFile) && href === "index.html");
        link.classList.toggle("active", isActive);
    });
}

function initNavbarScrollState() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const applyScrollState = () => {
        navbar.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    applyScrollState();
    window.addEventListener("scroll", applyScrollState, { passive: true });
}

function bindSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;
            const target = document.querySelector(href);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

function initLandingSlider() {
    const heroSlider = document.getElementById("hero-slider");
    if (!heroSlider) return;

    if (!heroSlider.querySelector(".slider")) {
        SLIDES.forEach((slide, index) => {
            heroSlider.appendChild(createSlideComponent(slide, index));
        });
    }

    const slider = new HeroSlider();
    slider.init();
}

document.addEventListener("DOMContentLoaded", () => {
    setActiveNavLink();
    initNavbarScrollState();
    bindSmoothScrolling();
    initLandingSlider();
});

// Form submission handler (for bulk orders and contact forms)
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const whatsappNumber = "919876543210";

    let message = "Hello Naveen Dairy,\n\n";
    for (const [key, value] of formData.entries()) {
        message += `${key}: ${value}\n`;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    return false;
}

// WhatsApp order button handler
function orderOnWhatsApp(productName, price) {
    const whatsappNumber = "919876543210";
    const message = `Hi! I'm interested in ordering ${productName} (${price})`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
}
