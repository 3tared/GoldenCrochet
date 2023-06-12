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

window.onscroll = () => {
  /* Icon-Up */
  let icon = document.getElementById("icon-up");
  let BlogSection = document.getElementById("blog");
  if (window.scrollY >= BlogSection.offsetTop) {
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
  /* Nav Bar */
  let header = document.getElementById("header");
  if (window.scrollY >= BlogSection.offsetTop) {
    header.classList.add("back");
  } else {
    header.classList.remove("back");
  }
};
