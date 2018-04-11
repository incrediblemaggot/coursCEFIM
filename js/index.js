const poopProducers = [
  {
    name: "Unicorn",
    basePrice: 15,
    productivity: 0.1,
    buyed: 0,
  },
  {
    name: "Squatty Potty",
    basePrice: 200,
    productivity: 0.5,
    buyed: 0,
  }
];

const $poopCounter = document.querySelector('.poop-quantity');
const $poopClicker = document.querySelector('.poop-clicker');
const $items = document.querySelector('.items');
let poopCount = 0;
let poopProductivity = 1;


$poopClicker.addEventListener('click', () => {
  poopCount += poopProductivity;
  render();
})

$items.addEventListener('click', (event) => {
  console.log(event)
  const $item = getItem(event.target);
  console.log($item);
  if ($item.dataset.index == null) {
    return;
  }
  const item = poopProducers[$item.dataset.index];
  if (item.basePrice > poopCount) {
    return;
  }
  poopCount -= item.basePrice;
  item.buyed++;
  
  $item.querySelector('.item--count').innerHTML = `Count : ${item.buyed}`;
  render();
})

function getItem($elm) {
  return $elm.classList.contains('item') ? $elm : $elm.parentNode;
}
let time = performance.now();

function refresh(now) {
  const productivity = poopProducers
    .reduce((acc, item) => acc + (item.productivity * item.buyed) , 0);
  const delta = now - time;
  time = now;
  const bonus = delta * productivity / 1000;
  poopCount += bonus;
  
  render();
  setTimeout(() => requestAnimationFrame(refresh), 150)
}

requestAnimationFrame(refresh);

function render() {
  $poopCounter.innerHTML = Math.floor(poopCount);
}

$items.innerHTML = poopProducers.map((item,i) => `
    <article class="item" data-index="${i}">
      <h1>${item.name}</h1>
      <p>Cost : ${item.basePrice} poop</p>
      <p class="item--count">Count : ${item.buyed}</p>
    </article>
  `).join('');

render();