const spin = document.querySelector('.spin');
const wheel = document.getElementsByTagName('img')[0];

let count = 0;
function countIncrease(e) {
  count++;
  console.log(count);
  switch (count) {
    case 1:
      wheel.classList.add('rotate1');
      break;
    case 2:
      wheel.classList.add('rotate2');
      break;
    case 3:
      wheel.classList.add('rotate3');
      break;
  }

  if (count > 3) {
    alert(`Игра окончена`);
    wheel.classList.remove('rotate1', 'rotate2', 'rotate3');
    count = 0;
  }
}

spin.addEventListener('click', countIncrease);
