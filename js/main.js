const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

function updateActiveNav() {
    let currentSection = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

const header = document.querySelector(".header");

navLinks.forEach(link => {
    link.addEventListener("click", event => {

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        nav.classList.remove("open");

        if (!target) return;

       const headerHeight = header.offsetHeight;

const scrollTarget =
    target.querySelector(".section-title") || target;

const targetPosition =
    scrollTarget.getBoundingClientRect().top
    + window.scrollY
    - headerHeight
    - 8;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        history.replaceState(null, "", targetId);
    });
});