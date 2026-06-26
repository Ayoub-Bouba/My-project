//navbar
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

//open sproduct html
let mainImg = document.getElementById("mainImg");

let pro1 = document.getElementsByClassName("pro");
for(let elm of pro1){
    elm.addEventListener("click", () => {
        let img = elm.querySelector("img");
        if(img) {
            localStorage.setItem("selectedProductImg", img.src);
        }
        window.location.href = "sproduct.html";
    });
}

let pro = document.querySelectorAll("#home .pro");
for(let elm of pro){
    elm.addEventListener("click", () => {
        let img = elm.querySelector("img");
        if(img) {
            localStorage.setItem("selectedProductImg", img.src);
        }
        window.location.href = "subpages/sproduct.html";
    });
}

// delete product in table cart
let delet=document.querySelectorAll(".delete");
for(let elm of delet){
    elm.addEventListener("click",()=>{
      elm.closest("tr").remove();
    });
}
//save img in local storage
document.addEventListener("DOMContentLoaded", () => {
    let mainImg = document.getElementById("mainImg");
    let savedImgSrc = localStorage.getItem("selectedProductImg");
    
    if (mainImg && savedImgSrc) {
        mainImg.src = savedImgSrc;
    }
});

function afficher(imgSrc) {
    let mainImg = document.getElementById("mainImg");
    if(mainImg) {
        mainImg.src = imgSrc;
    }
}
// add product in cart 
let addCartBtn = document.getElementById("add-cart");

if (addCartBtn) {
    addCartBtn.addEventListener("click", () => {
        let h6 = document.querySelector(".single-pro-details h6");
        let h4 = document.querySelector(".single-pro-details h4");
        let h2 = document.querySelector(".single-pro-details h2");
        let input = document.querySelector(".single-pro-details input");
        
        let product = {
            name: h6 ? h6.textContent : "Product",
            price: h2 ? h2.textContent : "0",
            quantity: input ? input.value : "1",
            img: mainImg.src
        };

        let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
        cart.push(product);
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
        alert("Product added to cart!");
    });
}

window.addEventListener("DOMContentLoaded", () => {
    let tableBody = document.querySelector("#cart table tbody");
    
    if (tableBody) {
        let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
        let cartRowsHtml = "";
        
        cart.forEach((product, index) => {
            cartRowsHtml += `
                <tr>
                    <td><button class="normal delete" onclick="removeItem(${index})">delete</button></td>
                    <td><img src="${product.img}" alt=""></td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td><input type="number" value="${product.quantity}"></td>
                    <td>${product.price}</td>
                </tr>
            `;
        });
        
        tableBody.innerHTML = cartRowsHtml;
    }
});

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    location.reload();
}
//valide form
function valide(){
    let input=document.querySelectorAll("#form-details form input");
    if(input[0].value==""){
        alert("entrez votre nom");
        return false ;
    }
    if(input[2].value==""){
        alert("entrez votre subject");
        return false ;
    }
    return true ;
}
let form =document.querySelector("#form-details form .normal");
if(form){
    form.addEventListener("click",(e)=>{
       if(valide()==false){
           e.preventDefault();
       }
    })
}
//bnt shop now 
function go(){
    window.location.href = "subpages/shop.html";
}


