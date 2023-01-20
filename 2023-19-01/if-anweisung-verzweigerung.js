const age = Number(prompt("Wie alt bist du?"));

if (age < 18) {
  alert("Du bist noch nicht volljährig! Wo sind deine Eltern!?");
  console.log("Zugang verwehrt");
} else if (age < 30) {
  alert("Du bist zwar volljährig, aber noch unter 30...");
  console.warn("Zugang teilweise gestattet");
} else if (age > 60) {
  alert("Du bist leider zu alt...");
  console.error("Zugang verweigert");
} else {
  alert("Herzlich willkommen auf unserer Seite...");
  console.log("Zugang gestattet");
}

let isAdult;
if (age < 18) {
  isAdult = false;
} else {
  isAdult = false;
}
console.log("Volljährig:", isAdult);

isAdult = a > 18 ? true : false;
isAdult = age < 18;

const message =
  age < 18
    ? "Du bist nicht volljährig"
    : age < 30
    ? "Volljährig aber unter 30"
    : age > 60
    ? "Zu alt"
    : "Willkommen";
alert(message);

console.log("Programmende");
