let close =document.getElementById("close");
let navbar =document.getElementById("navbar");
let bar =document.getElementById("bar");
bar.addEventListener("click",()=>{
    navbar.classList.add("active");
})
close.addEventListener("click",()=>{
    navbar.classList.remove("active");
    
})
document.addEventListener("click", (e) => {
    if (navbar.classList.contains("active")) {
        if (!navbar.contains(e.target) && !bar.contains(e.target) && !close.contains(e.target)) {
            navbar.classList.remove("active");
        }
    }
});