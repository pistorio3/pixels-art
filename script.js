const board = document.getElementById('pixel-board');
const linha1 = document.createElement('div');
const linha2 = document.createElement('div');
const linha3 = document.createElement('div');
const linha4 = document.createElement('div');
const linha5 = document.createElement('div');

linha1.className = 'linha1';
linha2.className = 'linha2';
linha3.className = 'linha3';
linha4.className = 'linha4';
linha5.className = 'linha5';

board.appendChild(linha1);
board.appendChild(linha2);
board.appendChild(linha3);
board.appendChild(linha4);
board.appendChild(linha5);

for (let j = 0; j < 5; j += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha1.appendChild(pixel);
}

for (let j = 0; j < 5; j += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha2.appendChild(pixel);
}

for (let j = 0; j < 5; j += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha3.appendChild(pixel);
}

for (let j = 0; j < 5; j += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha4.appendChild(pixel);
}

for (let j = 0; j < 5; j += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha5.appendChild(pixel);
}

window.onload = () => {
  const init = document.getElementById('one');
  init.className += ' selected';
};

const color1 = document.getElementById('one');
const color2 = document.getElementById('two');
const color3 = document.getElementById('three');
const color4 = document.getElementById('four');
const selected = 'color selected';

color1.onclick = () => {
  color1.addEventListener('click', console.log('click one'));
  color1.className = selected;

  color2.className = 'color';
  color3.className = 'color';
  color4.className = 'color';
  // const styles = window.getComputedStyle(color1);
  // console.log(`Cor de fundo: ${styles.backgroundColor}`);
};

color2.onclick = () => {
  color2.addEventListener('click', console.log('click two'));

  color2.className = selected;

  color1.className = 'color';
  color3.className = 'color';
  color4.className = 'color';
  // const styles = window.getComputedStyle(color2);
  // console.log(`Cor de fundo: ${styles.backgroundColor}`);
};

color3.onclick = () => {
  color3.addEventListener('click', console.log('click three'));

  color3.className = selected;

  color1.className = 'color';
  color2.className = 'color';
  color4.className = 'color';
  // const styles = window.getComputedStyle(color2);
  // console.log(`Cor de fundo: ${styles.backgroundColor}`);
};

color4.onclick = () => {
  console.log('click four');

  color4.className = selected;

  color1.className = 'color';
  color2.className = 'color';
  color3.className = 'color';
  // const styles = window.getComputedStyle(color2);
  // console.log(`Cor de fundo: ${styles.backgroundColor}`);
};
