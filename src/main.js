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
    console.log(array)
  poke.innerHTML += `
<div id="uno">
  <img class="imag" src=${pokemon.img} />
    <p>${pokemon.name}</p>
    </div>
    <div id="dos">
  <p>Numero: ${pokemon.num}</p>
  <p>Tipo de dulce ${pokemon.candy}</p>
  <p>Dulces para evolucionar ${pokemon.candy_count}</p>


  </div>
  `
 }
};
