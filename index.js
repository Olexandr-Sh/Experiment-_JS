const para = document.querySelector('p');
para.addEventListener('click', updateName);
function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
});

let name = 'Джон';
let admin = name;
console.log('admin', typeof admin);
alert(admin);

let earthName = 'Земля';
let currentUserName = "Ім'я користувача";
console.log('earthName', typeof earthName);
console.log('currentUserName', typeof currentUserName);

var Sales = "Toyota"; function CarTypes(name) { if (name == "Honda") { return name; } else { return "Извините, мы не продаём " + name + "."; } } var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);