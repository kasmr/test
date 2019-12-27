const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');
const balls = document.querySelectorAll('.ball');
const spin = document.querySelector('.spin');

let count = 1;
function countIncrease(e) {
  count++;
  console.log(count);
  if (count === 1) {
    ball1.style.display = 'block';
  }
  if (count === 2) {
    ball1.style.display = 'none';
    ball2.style.display = 'block';
  }
  if (count === 3) {
    ball2.style.display = 'none';
    ball3.style.display = 'block';
  }
  if (count > 3) {
    balls.forEach(balls => (balls.style.display = 'none'));
    count = 0;
  }
}

spin.addEventListener('click', countIncrease);
