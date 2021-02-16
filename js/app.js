const headerBtn = document.querySelector(".header__btn");
const headerNav = document.querySelector(".header__nav");
const icon = document.querySelector(".header__btn .img");

const toggleNav = (e) => {
  e.preventDefault();

  headerBtn.classList.toggle("active");
  headerNav.classList.toggle("active");

  if (headerBtn.className.includes("active")) {
    icon.src = icon.src.replace('hamburger', 'close')
  }else {
    icon.src = icon.src.replace('close', 'hamburger')
  }
};

headerBtn.addEventListener("click", toggleNav);
