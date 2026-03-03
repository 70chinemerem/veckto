
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

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(section => {
  observer.observe(section);
});


 document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "2347075825080"; // <-- Replace with your number (no + sign)

    const whatsappMessage =
      `Hello 👋%0A%0A` +
      `My Name: ${name}%0A` +
      `My Email: ${email}%0A%0A` +
      `Message:%0A${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  });

});

/* =========================
   CONFETTI FUNCTION
========================= */

function launchConfetti() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 }
  });
}



document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");
  const button = document.querySelector(".contact-btn");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      showPopup("Please fill all fields.");
      return;
    }

    button.classList.add("loading");
    button.disabled = true;

    const phoneNumber = "234XXXXXXXXXX"; // replace

    const text =
      `Hello 👋\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    const encodedText = encodeURIComponent(text);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const whatsappURL = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedText}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    // Fake loading delay for smooth UX
    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      button.classList.remove("loading");
      button.disabled = false;
      form.reset();
      showPopup("Redirecting to WhatsApp 🚀");
    }, 1200);

  });

});


/* =========================
   POPUP MESSAGE
========================= */

function showPopup(message) {

  const popup = document.createElement("div");
  popup.innerText = message;

  popup.style.position = "fixed";
  popup.style.bottom = "40px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.padding = "14px 25px";
  popup.style.background = "#25D366";
  popup.style.color = "white";
  popup.style.borderRadius = "30px";
  popup.style.fontWeight = "600";
  popup.style.zIndex = "9999";
  popup.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  popup.style.opacity = "0";
  popup.style.transition = "0.3s";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "1";
  }, 50);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 300);
  }, 3000);
}
const profile = document.querySelector('.artist-profile');
const scrollIndicator = document.getElementById('scrollIndicator');

profile.addEventListener('scroll', () => {
    if(profile.scrollTop > 20){ // if scrolled down a little
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});