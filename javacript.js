const style = document.querySelector("body");
style.innerHTML = "<div></div>";

const div = document.querySelector("div");
div.classList.add("kvadratas");

setTimeout(() => {
  div.style.backgroundColor = "red";
}, 3000);
