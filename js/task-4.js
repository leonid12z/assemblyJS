"use strict";
let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let input = prompt("Input the number of droids that you want to buy");

if (input === null) {
    alert("Cancelled by user");
} else {
    let num = Number(input);
    totalPrice = num * pricePerDroid;

    if (totalPrice > credits) {
        alert("Недостаточно средств на счету!");
    } else {
        let rest = credits - totalPrice;
        alert(`Вы купили ${num} дроидов, на счету осталось ${rest} кредитов.`);
    }
}
