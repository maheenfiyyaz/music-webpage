const menubtn = document.getElementById('menu-btn');
const navlinks = document.getElementById('nav-links');
const menubtnicon = menubtn.querySelector("i");

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

menubtn.addEventListener("click", () => {
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menubtnicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", (e) => {
    navlinks.classList.remove("open");
    menubtnicon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 2000,
});
