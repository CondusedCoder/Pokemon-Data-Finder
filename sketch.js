let findbtn = document.getElementById("findbtn");
let txt = document.getElementById("txt");
let nametxt = document.getElementById("nametxt");
let pkmdatatxt = document.getElementById("pkmdatatxt");
let pokemon = document.getElementById("pokemonimg");


let data;

function preload() {
  data = loadJSON("pokedex.json");


}
function setup() {
  noCanvas();



}
function draw() {

}
findbtn.onclick = function() {
  let pokemon;
  for (let i = 0; i < 809; i++) {
    if (data[i].name.english == txt.value) {
      pokemon = data[i];

    }
  }
  nametxt.innerHTML = pokemon.name.english;
  pkmdatatxt.innerHTML = "Names: " + "English: " + pokemon.name.english
  + ", " + "Japanese: " + pokemon.name.japanese
  + ", " + "Chinese: " + pokemon.name.chinese
  + ", " + "French: " + pokemon.name.french + " </br> " +
  "Types: " + pokemon.type[0] + ", " + pokemon.type[pokemon.type.length-1] + " </br> "
  + "Id: " + pokemon.id + " </br> "
  + "Base: " +
  "HP: " + pokemon.base.HP +
  ", Attack: " + pokemon.base.Attack +
  ", Defense: " + pokemon.base.Defense +
  ", Sp. Attack: " + pokemon.base.SpAttack +
  ", Sp. Defense: " + pokemon.base.SpDefense +
  ", Speed: " + pokemon.base.Speed;
  if (pokemon.id > 0 && pokemon.id < 10) {
    pokemonimg.src = String("thumbnails/00" + pokemon.id + ".png");
  }
  if (pokemon.id > 9 && pokemon.id < 100) {
    pokemonimg.src = String("thumbnails/0" + pokemon.id + ".png");
  }
  if (pokemon.id >= 100) {
    pokemonimg.src = String("thumbnails/" + pokemon.id + ".png");
  }









}
