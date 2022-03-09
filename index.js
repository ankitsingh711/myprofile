const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",{} => {
  if (window.pageYoffset > 100){
    toTop.classList.add("active");
  }else {
    toTop.classList.remove("active");
  }
})

window.onscroll=toTop()

