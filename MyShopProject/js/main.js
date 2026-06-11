let main =document.querySelector("#open");
let nav=document.querySelector("ul.nav-links");
let closs=document.querySelector("#closs");
main.addEventListener("click",()=>{
    nav.classList.add("active");
    main.style.display="none";
    document.body.style.overflow="hidden"
})

closs.addEventListener("click",()=>{
    nav.classList.remove("active");
    main.style.display="block";
    document.body.style.overflow="auto";
})
let home=document.getElementById("home");
home.addEventListener("click",()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
})
let cartCount = 0;
const cartCounter = document.getElementById("cartCounter");
const cartCounterDesktop = document.getElementById("cartCounterDesktop");

document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount;
        cartCounterDesktop.textContent = cartCount;

        btn.textContent = "Added ✓";
        btn.style.backgroundColor = "#111";
        btn.style.color = "#fff";
        setTimeout(() => {
            btn.textContent = "Add to Cart";
            btn.style.backgroundColor = "";
            btn.style.color = "";
        }, 1500);
    });
});
document.addEventListener("click", (e) => {
    if (nav.classList.contains("active")) {
        if (!nav.contains(e.target) && !main.contains(e.target) && !closs.contains(e.target)) {
            nav.classList.remove("active");
            main.style.display = "block";
            document.body.style.overflow = "auto";
        }
    }
});