const btn = document.getElementById("h1-color-change-btn");
const h1s = document.querySelectorAll("h1");

btn.addEventListener("click", function() {
  h1s.forEach(h1 => {
    h1.style.color = getRandomColor();
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
