// 🌌 Starfield Background
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const stars = Array(200).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  z: Math.random() * canvas.width
}));

function drawStars() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let s of stars) {
    s.z -= 2;
    if (s.z <= 0) s.z = canvas.width;
    const k = 128.0 / s.z;
    const px = s.x * k + canvas.width / 2;
    const py = s.y * k + canvas.height / 2;
    if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
      const size = (1 - s.z / canvas.width) * 2;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, 2 * Math.PI);
      ctx.fillStyle = `hsl(${(s.z / canvas.width) * 360}, 100%, 80%)`;
      ctx.fill();
    }
  }
  requestAnimationFrame(drawStars);
}
drawStars();

// ✨ Typing Effect
new Typed("#typed", {
  strings: [
    "💻 Python | JavaScript | React | NodeJS",
    "🤖 AI & Automation Engineer",
    "🌌 Dreaming in Code | Living in the Future"
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true
});
