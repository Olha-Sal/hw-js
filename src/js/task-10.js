const inputNumberRef = document.querySelector('#controls [type="number"]');
const btnRenderRef = document.querySelector('#controls [data-action="render"]');
const btnDestroyRef = document.querySelector('#controls [data-action="destroy"]');
const boxesRef = document.querySelector('#boxes')

const boxProperty = {
  size: 30,
  bgColor: () => Math.floor(Math.random() * 256),
};

function createBoxes(amount) {
  const divs = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${boxProperty.size + i * 10}px`;
    divEl.style.height = `${boxProperty.size + i * 10}px`;
    divEl.style.backgroundColor = `rgb(${boxProperty.bgColor()}, ${boxProperty.bgColor()}, ${boxProperty.bgColor()})`;
    divs.push(divEl);
  }
  boxesRef.append(...divs);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

btnRenderRef.addEventListener("click", () => createBoxes(Number(inputNumberRef.value)));
btnDestroyRef.addEventListener("click", destroyBoxes);