const btn = document.getElementById("topBtn");
const menu = document.getElementById("menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

menu.addEventListener("click", () => {
    menu.classList.toggle("opened");
    menu.setAttribute("aria-expanded", menu.classList.contains("opened"));
    if (menu.classList.contains("opened")) {
      dropList.style.maxHeight = "300px";
      dropList.style.opacity = "1"; 
      dropList.style.display = "flex";
    } else {
      dropList.style.maxHeight = "0px";
      dropList.style.opacity = "0";
      
      setTimeout(() => {
        dropList.style.display = "none";
      }, 500);
    }
  });
