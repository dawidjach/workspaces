// Aufgaben
function greetUser(vorname, nachname) {
  console.log(`Hallo ${vorname}, ${nachname}!`);
}
greetUser("Max", "Mustermann");

function multiply(a, b, c = 1) {
  console.log(a * b * c);
  // lieber return:
  return a * b * c;
}
multiply(3, 5, 2);
multiply(1, 2);
let product = multiply(2, 4);
//alert(`Produkt ist ${product}`);
//console.warn(`Produkt ist ${multiply(2, 4, 5)}`);

function addNumbers() {
  const a = Number(prompt("Erste Zahl eingeben: "));
  const b = Number(prompt("Zweite Zahl eingeben: "));
  const sum = a + b;
  console.log(`Sume von ${a} und ${b} ist ${sum}`);
}

addNumbers();
