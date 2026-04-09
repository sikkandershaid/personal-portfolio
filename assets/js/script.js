document.addEventListener("DOMContentLoaded", function () {

    /* =============================
       Mobile Sidebar Toggle
    ============================= */
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");

    if (menuBtn && sidebar && overlay) {
        menuBtn.addEventListener("click", () => {
            sidebar.classList.add("active");
            overlay.classList.add("active");
        });
    }

    const closeSidebar = () => {
        sidebar?.classList.remove("active");
        overlay?.classList.remove("active");
    };

    closeBtn?.addEventListener("click", closeSidebar);
    overlay?.addEventListener("click", closeSidebar);


    /* =============================
       Mobile Menu Toggle
    ============================= */
    const menuButton = document.getElementById("mobileMenuBtn");
    const navBar = document.getElementById("mainNav");

    menuButton?.addEventListener("click", () => {
        navBar?.classList.toggle("open");
    });


    /* =============================
       Navigation Active on Scroll
    ============================= */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navigation__link");

    function setActiveLink() {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
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


    /* =============================
       ScrollReveal Animation
    ============================= */
    if (typeof ScrollReveal !== "undefined") {
        const sr = ScrollReveal({
            origin: "bottom",
            distance: "40px",
            duration: 800,
            delay: 400,
        });

        sr.reveal(".Class-name", {
            distance: "20px",
            origin: "top",
        });
    }


    /* =============================
       Magnific Popup (Video)
    ============================= */
    if (typeof $ !== "undefined" && $.fn.magnificPopup) {
        $(".video-popup").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 300,
            preloader: false,
            fixedContentPos: false,
        });
        $('.video-popup').on('click', function () {
            $('.modal').modal('hide');
        });
    }


    /* =============================
       MixItUp (Portfolio Filter)
    ============================= */
    if (typeof mixitup !== "undefined") {
        mixitup(".portfolio-grid", {
            animation: {
                duration: 600,
                easing: "ease-in-out",
                effects: "fade blur(10px)",
                staggerSequence: (i) => i * 20,
            },
        });
    }

    // Active button
    const buttons = document.querySelectorAll(".portfolio-item button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });


    /* =============================
       Swiper Slider
    ============================= */
    if (typeof Swiper !== "undefined") {
        new Swiper(".portfolio-image-slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,

            pagination: {
                el: ".portfolio-slider-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".portfolio-slider-button-next",
                prevEl: ".portfolio-slider-button-prev",
            },
        });
    }


    /* =============================
       Progress Bar Animation
    ============================= */
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

    document.querySelectorAll(".skill-card").forEach((card) => {
        observer.observe(card);
    });


    /* =============================
       Modal Link Scroll Fix
    ============================= */
    document.querySelectorAll(".modal-link").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");

            const modalEl = document.querySelector(".modal.show");
            if (modalEl && typeof bootstrap !== "undefined") {
                const modalInstance = bootstrap.Modal.getInstance(modalEl);
                modalInstance?.hide();
            }

            setTimeout(() => {
                document.querySelector(targetId)?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 300);
        });
    });

});