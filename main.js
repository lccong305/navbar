const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
    if( nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }else{
        nav.removeAttribute("style");
    }
});
