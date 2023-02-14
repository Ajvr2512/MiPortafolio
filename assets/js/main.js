const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const home= document.querySelector(".home");
const main= document.querySelector(".about__nav");
const experience= document.querySelector(".experience__nav");
const kills= document.querySelector(".skill__nav");
const portfolio= document.querySelector(".portfolio");
const contact= document.querySelector(".contact__nav");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu__visible")
})

home.addEventListener("click",()=>{
    navMenu.classList.remove("nav__menu__visible")
})
main.addEventListener("click",()=>{
    navMenu.classList.remove("nav__menu__visible")
})
experience.addEventListener("click",()=>{
    navMenu.classList.remove("nav__menu__visible")
})
kills.addEventListener("click",()=>{
    navMenu.classList.remove("nav__menu__visible")
})
portfolio.addEventListener("click",()=>{
    navMenu.classList.remove("nav__menu__visible")
})
contact.addEventListener("click",()=>{
    navMenu.classList.remove("nav__menu__visible")
})