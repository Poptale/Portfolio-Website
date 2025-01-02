let music = new Audio("Music.mp3");
let dot = document.querySelector(".trail");
let elem = document.querySelectorAll(".elem");
let profile = document.querySelector(".profile");
let container = document.querySelector(".container");
let profilePage = document.querySelector(".profile-page");
let loading = document.querySelector(".loading");
let button = document.querySelector("#music");
let isPlaying = false;
music.loop = true;

button.addEventListener("click", ()=>{
    if(!isPlaying){
        button.innerHTML = "Music on";
        music.play();
        isPlaying = true;
    } else{
        button.innerHTML = "Music off";
        music.pause();
        isPlaying = false;
    };
});

window.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY;
    dot.animate({
        top: `${posY}px`,
        left: `${posX}px`,
    }, {
        duration: 1000,
        fill: "forwards",
    });
});

elem.forEach((val)=>{
    val.addEventListener("mouseenter", ()=>{
        console.log(val.childNodes[3]);
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", ()=>{
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove", (dets)=>{
        val.childNodes[3].style.left = dets.x+"px";
        val.childNodes[3].style.top = dets.y+"px";
    });
});