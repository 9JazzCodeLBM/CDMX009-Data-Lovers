import {getCharacterbyType} from './data.js';
import data from './data/pokemon/pokemon.js';

// let list= data.pokemon;
//Nodo
const types = document.querySelectorAll(".type");
const poke = document.querySelector('#pokes');

//Listener
types.forEach(b=>b.addEventListener("click", e=>{createCard(getCharacterbyType(e.target.id))
}
))


 function createCard(array) {
   poke.innerHTML = '';
  for (let pokemon of array) {

  poke.innerHTML += `
<div id="uno" class="card">
  <img class="imag" src=${pokemon.img} />
    <p>${pokemon.name}</p>

  <p>Numero: ${pokemon.num}</p>
  <p> ${pokemon.candy}</p>
  <p> ${pokemon.candy_count}</p>
  </div>
  `
 }
};
