// Mobile Nav Open Close
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');

    // Open sidebar and overlay
    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    // Close sidebar and overlay
    const closeSidebar = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar); // Close when clicking outside the sidebar
});

// ScrollReveal Animation---------
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 800,
    delay: 400,
    // reset: true
})

sr.reveal('.Class-name', {
    distance: '20px',
    origin: 'top',
})


// Navigation Active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation__link");

function setActiveLink() {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);


// Mobile menu active / inactive
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("mobileMenuBtn");
    const navBar = document.getElementById("mainNav");

    const navLinks = navBar.querySelectorAll(".navigation__link");

    const closeMenu = () => {
        navBar.classList.remove("open");

        const menuIcon = menuButton.querySelector(".fas");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    };

    menuButton.addEventListener("click", function () {
        navBar.classList.toggle("open");

        const menuIcon = menuButton.querySelector(".fas");
        if (navBar.classList.contains("open")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        } else {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
});


// mixitup
var mixer = mixitup(".portfolio-grid", {
    animation: {
        duration: 600,
        easing: "ease-in-out",
        effects: "fade blur(10px)",
        staggerSequence: function (i) {
            return i * 20;
        },
    },
});

// Active button effect
const buttons = document.querySelectorAll(".portfolio-item button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
    });
});


// Initialize Portfolio Image Swiper
var swiper = new Swiper(".portfolio-image-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
        el: ".portfolio-slider-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".portfolio-slider-button-next",
        prevEl: ".portfolio-slider-button-prev",
    },
});


//    Progress bar animation starts when scrolling

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll(".bar-fill");
                bars.forEach((bar) => {
                    bar.style.width = bar.getAttribute("data-progress");
                });
            }
        });
    },
    { threshold: 0.1 }
);

document
    .querySelectorAll(".skill-card")
    .forEach((card) => observer.observe(card));


// Clicking on a link within the modal will take you out of the modal

document.querySelectorAll(".modal-link").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");

        // modal close (Bootstrap example)
        const modalEl = document.querySelector(".modal.show");
        if (modalEl) {
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            modalInstance.hide();
        }

        // scroll after modal closes
        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
            });
        }, 300);
    });
});
