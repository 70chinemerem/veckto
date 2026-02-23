

window.addEventListener("load", function () {

    console.log("JS is working");

    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    if (loader && content) {
        setTimeout(() => {
            loader.classList.add("hidden");
            content.classList.add("show");
        }, 1200);
    }

});

/* SAFE NAV TOGGLE */

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// const playBtn = document.getElementById("playIntro");
// const sound = document.getElementById("introSound");

// playBtn.addEventListener("click", () => {
//     sound.play();
//     playBtn.style.display = "none";
// });
document.addEventListener("DOMContentLoaded", function () {

    const enterBtn = document.getElementById("enterBtn");
    const introSound = document.getElementById("introSound");
    const bgVideo = document.getElementById("bgVideo");

    enterBtn.addEventListener("click", function () {

        // Play music
        introSound.play();

        // Show background video
        bgVideo.classList.add("show");
        bgVideo.play();

        // Optional: hide button after click
        enterBtn.style.display = "none";

        // Optional: Add dramatic zoom effect
        document.querySelector(".hero").classList.add("cinematic");

    });

});
