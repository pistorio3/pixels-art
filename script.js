let board = document.getElementById('pixel-board');
let linha1 = document.createElement('div');
let linha2 = document.createElement('div');
let linha3 = document.createElement('div');
let linha4 = document.createElement('div');
let linha5 = document.createElement('div');


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

for (let j = 0; j < 5; j++) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha1.appendChild(pixel);
}

for (let j = 0; j < 5; j++) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha2.appendChild(pixel);
}

for (let j = 0; j < 5; j++) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha3.appendChild(pixel);
}

for (let j = 0; j < 5; j++) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha4.appendChild(pixel);
}

for (let j = 0; j < 5; j++) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  linha5.appendChild(pixel);
}



