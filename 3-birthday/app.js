"use strict";

const userBirthday1 = "2010-10-10";
const userBirthday2 = "2010-10-16";
const userBirthday3 = "2010-10-30";

function is14(stringDate) {
  const date = new Date(stringDate);
  const datePlus14 = date.setFullYear(date.getFullYear() + 14);
  const now = new Date();
  if (datePlus14 > now) {
    return false;
  } else {
    return true;
  }
}

console.log("Достиг ли пользователь полных 14 лет?");
console.log(`Если день рождения ${userBirthday1}: ${is14(userBirthday1)}`);
console.log(`Если день рождения ${userBirthday2}: ${is14(userBirthday2)}`);
console.log(`Если день рождения ${userBirthday3}: ${is14(userBirthday3)}`);
