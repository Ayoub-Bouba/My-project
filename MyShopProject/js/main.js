let main =document.querySelector("#open");
let nav=document.querySelector("ul.nav-links");
let closs=document.querySelector("#closs");
main.addEventListener("click",()=>{
    nav.classList.add("active");
    main.style.display="none";
})

closs.addEventListener("click",()=>{
    nav.classList.remove("active");
    main.style.display="block";
})
let home=document.getElementById("home");
let watches=document.getElementById("watches");
let accessories=document.getElementById("accessories");
home.addEventListener("click",()=>{
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
})