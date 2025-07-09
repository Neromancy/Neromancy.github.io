document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Testing PWA berhasil');
});

const animal = document.getElementById('gerak');
let pos = 0;
let speed = 2;

function moveAnimal() {
  pos += speed;
  animal.style.left = pos + 'px';

  if (pos > window.innerWidth) {
    pos = -animal.width;
  }

  requestAnimationFrame(moveAnimal);
}

moveAnimal();
