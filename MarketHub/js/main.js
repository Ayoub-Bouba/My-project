let close =document.getElementById("close");
let navbar =document.getElementById("navbar");
let bar =document.getElementById("bar");
bar.addEventListener("click",()=>{
    navbar.classList.add("active");
})
close.addEventListener("click",()=>{
    navbar.classList.remove("active");
    
})