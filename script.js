const btn = document.getElementById('popBtn');
const cake = document.getElementById('cake');

// Pop the cake and release pixel cakes!
btn.addEventListener('click', () => {
  cake.classList.add('pop');
  btn.textContent = "🎉 Happy Birthday! 🎉";
  btn.disabled = true;

  // Floating pixel cakes
  for (let i = 0; i < 35; i++) {
    const miniCake = document.createElement('div');
    miniCake.classList.add('pixel-cake');
    miniCake.style.left = Math.random() * 100 + 'vw';
    miniCake.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(miniCake);
    setTimeout(() => miniCake.remove(), 5000);
  }
});
