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

let pro1=document.getElementsByClassName("pro");
for(let i=0; i<pro1.length;i++){
    pro1[i].addEventListener("click",()=>{
    window.location.href="sproduct.html";
    
})
}
let pro=document.querySelectorAll("#home .pro");
for(let i=0; i<pro.length;i++){
    pro[i].addEventListener("click",()=>{
    window.location.href="subpages/sproduct.html";
})
}
let delet=document.querySelectorAll(".delete");
for(let elm of delet){
    elm.addEventListener("click",()=>{
      elm.closest("tr").remove();
    });
}

