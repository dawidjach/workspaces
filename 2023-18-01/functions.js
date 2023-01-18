// Funktionen Parameter a,b,c
// Ruft man eine Funktion mit weniger Argumenten auf, als die Funktion Parameter besitzt,
// so werden die restlichen Parameter mit undefind instaliert.
// falls der Aufrufer kein Wert für einen Parameter bereitstellt, wird dann der Default-Wert verwendet.

function sum(a, b, c) {
  // die Variable arguments enthält sämtliche an die Funktion übergebene Argumente.
  // Sie wird automatisch von der JS-Runtime bereitgestellt.
  // console.log(arguments):
  let s = a + b + c;
  print(s);
  // die 'return'-Anweisung gibt einen Wert an der Aufrufer der Funktion zurück,
  // erreicht die JS-Runtime die return-Anweisung,
  // wird die aktuelle Funktion sofort beenden und die Ausführung geht beim Aufrufer weiter.
  return s;
}

// gibt eine Funktion keinen expliziten Wert per return-Anweisung zurück,
// ist der Rückgabewert automatisch undefined.
function print(x) {
  console.log("Value: ${x}");
}

console.log("Vor Aufruf von sum");
console.log(sum(1, 2, 10));
console.log("Nach Aufruf von sum");
