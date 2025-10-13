// Hiệu ứng sao bay
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width,
  });
}

function drawStars() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    s.z -= 2;
    if (s.z <= 0) s.z = canvas.width;
    const k = 128.0 / s.z;
    const px = s.x * k + canvas.width / 2;
    const py = s.y * k + canvas.height / 2;
    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = (1 - s.z / canvas.width) * 3;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  requestAnimationFrame(drawStars);
}
drawStars();

// Nhạc nền
const music = document.getElementById("bg-music");
const toggle = document.getElementById("toggle-music");
toggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggle.textContent = "🔇 Music Off";
  } else {
    music.pause();
    toggle.textContent = "🎵 Music On";
  }
});
