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
