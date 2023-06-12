/* Start NavBar*/
let nav = document.getElementById("navbar");
let close = document.getElementById("close");
let bar = document.getElementById("bar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
/* Start Hero Sec */
window.onload = () => {
  let hero = document.getElementById("hero");
  if (hero.classList.contains("right")) {
    hero.classList.remove("right");
  } else {
    hero.classList.add("right");
  }
};
window.onscroll = () => {
  /* Icon-Up */
  let icon = document.getElementById("icon-up");
  let FeutresSection = document.getElementById("feutres");
  if (window.scrollY >= FeutresSection.offsetTop) {
    icon.style.opacity = "1";
  } else {
    icon.style.opacity = "0";
  }
  icon.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: "0",
      behavior: "smooth",
    });
  });
  // Banner2,3 box
  let box1 = document.querySelectorAll("#banner2 .banner-box");
  let box2 = document.querySelectorAll("#banner3 .banner-box");
  let banner2Section = document.getElementById("banner2");
  if (window.scrollY >= banner2Section.offsetTop - 700) {
    box1[0].classList.add("left");
    box1[1].classList.add("left");
  }
  if (window.scrollY >= banner2Section.offsetTop - 200) {
    box2[0].classList.add("bottom");
    box2[1].classList.add("bottom");
    box2[2].classList.add("bottom");
  }
  /* Nav Bar */
  let header = document.getElementById("header");
  if (window.scrollY >= FeutresSection.offsetTop) {
    header.classList.add("back");
  } else {
    header.classList.remove("back");
  }
};
