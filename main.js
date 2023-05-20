const trans = document.getElementById("trans");
trans.addEventListener("click", closeMenu);

const menu = document.getElementById("menu");
menu.addEventListener("click", openMenu);

const ul = document.querySelector("ul");
[...ul.children].map(li => {
  li.addEventListener("click", scroll);
})

function openMenu(){
  trans.style.left = 0;
  ul.style.left = 0;
}

function closeMenu(){
  let display = window.getComputedStyle(trans).getPropertyValue("display");
  if (display === "flex"){
    trans.style.left = "-100vw";
    ul.style.left = "-100vw";
  }
}

function scroll(e){
  closeMenu();
  let text = e.target.textContent.toLowerCase();
  document.getElementById(text).scrollIntoView(true, {behavior: "smooth"});
}