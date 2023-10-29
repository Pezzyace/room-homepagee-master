const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');
const navigation = document.getElementById('navigation');
const body = document.getElementById("body");

hamburger.addEventListener("click", () => {
  navigation.style.display = "flex";
  console.log(400);
})

closeBtn.addEventListener("click", () => {
  navigation.style.display = "none";
  body.classList.remove("noscroll");
})