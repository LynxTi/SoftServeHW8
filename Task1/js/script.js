'use strict'

let currentLength = 100;

let tiles = [];
for (let i = 0; i < currentLength; i++) {
  let tile = document.createElement('div');

  tile.className = 'tile';
  tiles.push(tile)
}

const container = document.querySelector('.container');
const counter = document.querySelector('.counter');

container.append(...tiles);

container.addEventListener('click', onClickContainer);

stainingTiles();


function stainingTiles () {
  let colorTime = setInterval(() => {
    const randomColor =`rgb(${~~(Math.random() * 256)},${~~(Math.random() * 256)},${~~(Math.random() * 256)}`
    const randomIndex = ~~(Math.random() * currentLength);
    const tile = tiles[randomIndex];

    tile.style.backgroundColor = randomColor;
    
    if (currentLength > 1) {
      tiles = tiles.filter(elem => elem !== tile);
      currentLength--;
      counter.textContent = `Counter = ${currentLength}`;
    } else {
      tiles = [];
      currentLength--;
      counter.textContent = `Counter = ${currentLength}`;
      document.querySelector('.endMenu').style.display = 'block';
      clearInterval(colorTime);
    }
  }, 500);
}

function onClickContainer (e) {
   
  if (e.target !== container && e.target.style.backgroundColor !== '' ) {
    if (currentLength > 1) {
      repaintingTileWhiteColor(e.target);
    } 
    // else {
    //   repaintingTileWhiteColor(e.target);
    //   setTimeout(stainingTiles, 500);
    // }
  }
 
}

const repaintingTileWhiteColor  = function (tile) {
    currentLength++;
    tile.style.backgroundColor = '';
    tiles.push(tile);
    counter.textContent = `Counter = ${currentLength}`;
}
