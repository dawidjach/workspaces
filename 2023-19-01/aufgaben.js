// Aufgaben den 19.01.2023

function printTypeInformation(x) {
  console.log(`${x} hat den Datentyp ${typeof x}`);
}
printTypeInformation(1.23);

function printDaysHoursMinutesAndSeconds(totalSeconds) {
  const secondsPerHour = 60 * 60;
  const secondsPerDay = secondsPerHour * 24;
  const days = Math.trunc(totalSeconds / secondsPerDay);
  let remainingSeconds = totalSeconds % secondsPerDay;
  const hours = Math.trunc(remainingSeconds / secondsPerHour);
  remainingSeconds = remainingSeconds % secondsPerHour;
  const minutes = Math.trunc(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  console.log(
    `${totalSeconds} Sekunden sind ${days} Tage ${hours} Stunden ${minutes} Minuten und ${seconds} Sekunden`
  );
}
printDaysHoursMinutesAndSeconds(70);
printDaysHoursMinutesAndSeconds(86400);

// Aufgabe 2
let bonus = 0;
let mitarbeiterAnzahl;
let mitarbeiterJahresUmsatz = bonus;

function calculateBonus(jahrenImUnternehmen, mitarbeiterAlter, mitarbeiterJahresUmsatz, firmaDurchschnittlicherJahresumsatz) {
  bonus += jahrenImUnternehmen * 50;
  if (mitarbeiterAlter < 25) {
    bonus += 100;
  } else if (mitarbeiterAlter <= 60) {
    bonus += 150;
  } 

  if (mitarbeiterJahresUmsatz > firmaDurchschnittlicherJahresumsatz * 2) {
    bonus = bonus + 500;
  } else if (mitarbeiterJahresUmsatz > firmaDurchschnittlicherJahresumsatz) {
    bonus = bonus + 250;
  } else {
    bonus = bonus - 50;
  }
    return (bonus);
}  

