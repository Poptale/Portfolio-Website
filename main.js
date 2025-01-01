let elem = document.querySelectorAll(".elem");
let dot = document.querySelector(".trail");
let profile = document.querySelector(".profile");
let container = document.querySelector(".container");
let profilePage = document.querySelector(".profile-page");
let loading = document.querySelector(".loading");


window.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY;
    dot.animate({
        top: `${posY}px`,
        left: `${posX}px`,
    }, {
        duration: 1000,
        fill: "forwards",
    })
});


elem.forEach((val)=>{
    val.addEventListener("mouseenter", ()=>{
        console.log(val.childNodes[3]);
        
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", ()=>{
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove", (dets)=>{
        val.childNodes[3].style.left = dets.x+"px";
        val.childNodes[3].style.top = dets.y+"px";
    })
})