/** Создать простую страничку которая выводит в выпадающий список
* всех персонажей (people) с name 'Cat' по запросу https://ghibliapi.herokuapp.com/species
* для начала, пусть в значении опции будет просто порядковый номер.
* после выбора опции, отсылается запрос на url https://ghibliapi.herokuapp.com/people/{id}
* внизу появляется информация о персонаже -
* // name, eye_color, gender, films
* а так же изображение (случайное с unsplash)
* https://ghibliapi.herokuapp.com/#
*

function renderCatPic(){
  fetch(`https://source.unsplash.com/200x200/?cat`)
    .then(response => response.json())
    
}
*/
$(document).ready(function() {
setInterval(window.onload = function(){
document.getElementById('allcats').addEventListener('click', renderCatPic)

function renderCatPic(){
  fetch('https://ghibliapi.herokuapp.com/species')
  .then(response => response.json())
  .then(people => {
    let output=''
    people.forEach(function(person) {
      if (person.name==="Cat") {
        output+= `
          <option>
              ${person}
          </option>
        `;
    }})
    output +='</ul>';
    document.getElementById("cats").innerHTML=output;
  })
}
});
});

document.getElementById('name').addEventListener('click', Catfeature ('name'))
document.getElementById('eye_color').addEventListener("click", Catfeature('eye_color'))
document.getElementById('gender').addEventListener('click',Catfeature( gender))
document.getElementById('films').addEventListener("click", Catfeature(films))

function Catfeature(fet){
fetch('https://ghibliapi.herokuapp.com/species')
.then(response => response.json())
  .then(piece => {
    let output='';
    piece.forEach(function(want) {
      if (want.name==="Cat") {
          output+= `
          <option>
          ${want.fet}
          </option>
          `;}})
    document.getElementById("information").innerHTML=output;
        })
fetch(`https://source.unsplash.com/200x200/?cat`)
    .then((response) => {   
  // что-то
  }) 
}