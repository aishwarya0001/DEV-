const menu_btn = document.getElementById("menu-icon")
const menu = document.getElementById("menu")

var a = window.matchMedia("(max-width: 481px)")
var b = window.matchMedia("(min-width: 481px) and (max-width: 768px)")

menu_btn.addEventListener("click", () => {
    if(a.matches | b.matches)
    {
        menu.style.display = "block"
        menu.style.position = "fixed"
    }
})

const close_btn = document.getElementById("close")
close_btn.addEventListener("click", () => {
    menu.style.display = "none"
})
