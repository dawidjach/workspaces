function calculateBonus(yearsOfEmployment, age, sales, averageSales) {
    let bonus = 0;
    const bonusPerYear = 50;

    // bonus = bonus + yearsOfEmployment * 50;
    bonus += yearsOfEmployment * bonusPerYear;
    //bonus += age < 25 ? 100 : age <= 60 ? 150 : 0;

    if (age < 25) {
        bonus += 100;
    } else if (age <= 60) {
        bonus += 150;
    }

    if (sales > 2 * averageSales) {
        bonus += 500;
    } else if (sales >= averageSales) {
        bonus += 250;
    } else {
        bonus -= bonusPerYear;
    }

    return bonus;
}

function main() {
    const employeeYears = document.getElementById("employee-years");
    const employeeAge = document.getElementById("employee-age");
    const employeeSales = document.getElementById("employee-sales");
    const employeeAverageSales = document.getElementById("employee-average-sales");
    const calculateBonusButton = document.getElementById("calculate-bonus");

    console.log(employeeYears, employeeAge, employeeSales, employeeAverageSales, calculateBonusButton);
    
    // wir registrieren eine anonyme Funktion (Arrow-Function), die beim Auftreten des clicks-Events des Buttons ausgeführt werden soll.
    calculateBonusButton.addEventListener("click", () => {
        let years = Number(employeeYears.value);
        let age = Number(employeeAge.value);
        let sales = Number(employeeSales.value);
        let averageSales = Number(employeeAverageSales.value);

        let bonus = calculateBonus(years, age, sales, averageSales);
        alert(`Der Mitarbeiter erhält einen Bonus von ${bonus} Euro`);
 });
}

main();
