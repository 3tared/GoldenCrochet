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
  let ProductsSection = document.getElementById("product1");
  if (window.scrollY >= ProductsSection.offsetTop - 500) {
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
  if (window.scrollY >= ProductsSection.offsetTop) {
    header.classList.add("back");
  } else {
    header.classList.remove("back");
  }
};
// Images Slider
let MainImg = document.getElementById("MainImg");
let SmallImgs = document.getElementsByClassName("small-img");

SmallImgs[0].onclick = () => {
  MainImg.src = SmallImgs[0].src;
};
SmallImgs[1].onclick = () => {
  MainImg.src = SmallImgs[1].src;
};
SmallImgs[2].onclick = () => {
  MainImg.src = SmallImgs[2].src;
};
SmallImgs[3].onclick = () => {
  MainImg.src = SmallImgs[3].src;
};
