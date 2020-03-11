<<<<<<< HEAD
import data from './data/pokemon/pokemon.js';
let list = data.pokemon

list.map(p => console.log(p.name));
list.map(p => console.log(p.type));
=======

import data from './data/pokemon/pokemon.js';
let list = data.pokemon
>>>>>>> 23fbad835359c27daecd1ff26a0d0220186682a1

list.map(p => console.log(p.name));
list.map(p => console.log(p.type));

<<<<<<< HEAD
let electric= list.filter(p => p.type.includes("Electric"));
console.log(electric);
let grass = list.filter(p => p.type.includes("Grass"));
console.log(grass);
let poison = list.filter(p => p.type.includes("Poison"));
console.log(poison);
let fire = list.filter(p => p.type.includes("Fire"));
console.log(fire);
let flying = list.filter(p => p.type.includes("Flying"));
console.log(flying);
let water = list.filter(p => p.type.includes("Water"));
console.log(water);
let bug = list.filter(p => p.type.includes("Bug"));
console.log(bug);
let normal = list.filter(p => p.type.includes("Normal"));
console.log(normal);
let ground = list.filter(p => p.type.includes("Ground"));
console.log(ground);
let psychic = list.filter(p => p.type.includes("Psychic"));
console.log(psychic);
let rock = list.filter(p => p.type.includes("Rock"));
console.log(rock);
let ice = list.filter(p => p.type.includes("Ice"));
console.log(ice);
let ghost = list.filter(p => p.type.includes("Ghost"));
console.log(ghost);
let fighting = list.filter(p => p.type.includes("Fighting"));
console.log(fighting);
let dragon = list.filter(p => p.type.includes("Dragon"));
console.log(dragon);

=======

let electric= list.filter(p => p.type.includes("Electric"));
console.log(electric);
let grass = list.filter(p => p.type.includes("Grass"));
console.log(grass);
let poison = list.filter(p => p.type.includes("Poison"));
console.log(poison);
let fire = list.filter(p => p.type.includes("Fire"));
console.log(fire);
let flying = list.filter(p => p.type.includes("Flying"));
console.log(flying);
let water = list.filter(p => p.type.includes("Water"));
console.log(water);
let bug = list.filter(p => p.type.includes("Bug"));
console.log(bug);
let normal = list.filter(p => p.type.includes("Normal"));
console.log(normal);
let ground = list.filter(p => p.type.includes("Ground"));
console.log(ground);
let psychic = list.filter(p => p.type.includes("Psychic"));
console.log(psychic);
let rock = list.filter(p => p.type.includes("Rock"));
console.log(rock);
let ice = list.filter(p => p.type.includes("Ice"));
console.log(ice);
let ghost = list.filter(p => p.type.includes("Ghost"));
console.log(ghost);
let fighting = list.filter(p => p.type.includes("Fighting"));
console.log(fighting);
let dragon = list.filter(p => p.type.includes("Dragon"));
console.log(dragon);

>>>>>>> 23fbad835359c27daecd1ff26a0d0220186682a1

// Filtra los pokemons por weaknesses: Fire y muestralos en consola
let weAk = list.filter(p=>p.weaknesses.includes("Fairy"));
console.log(weAk);
let pokes = document.querySelector('#pokes');

water.map(pok=>{
  let p = document.createElement('p');
  p.classList.add("card");
  p.innerHTML = `
<img class="imag" src=${pok.img} />
<p>${pok.name}</p>
`;
  pokes.appendChild(p);
});
