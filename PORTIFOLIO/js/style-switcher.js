/* toggler style switcher*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListenner("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})