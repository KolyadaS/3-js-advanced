"use strict";
const endOfYear = new Date("12-31-2024");

function timeToNewYear(endDate) {
  if (endDate < new Date()) {
    document.querySelector("h1").textContent = "Этот Новый Год уже прошел";
    return;
  }

  const interval = setInterval(function () {
    let now = new Date();

    let time = endDate.getTime() - now;
    let months = Math.floor(time / (1000 * 60 * 60 * 24 * 30));
    time = time - months * 1000 * 60 * 60 * 24 * 30;

    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    time = time - days * 1000 * 60 * 60 * 24;

    let hours = Math.floor(time / (1000 * 60 * 60));
    time = time - hours * 1000 * 60 * 60;

    let mins = Math.floor(time / (1000 * 60));
    time = time - mins * 1000 * 60;
    let secs = Math.floor(time / 1000);

    const rtf1 = new Intl.RelativeTimeFormat("ru", { style: "long" });
    let timeString =
      rtf1.format(months, "month").slice(6) +
      rtf1.format(days, "day").slice(5) +
      rtf1.format(hours, "hour").slice(5) +
      rtf1.format(mins, "minute").slice(5) +
      rtf1.format(secs, "second").slice(5);
    document.querySelector(".time-to-new-year").textContent = timeString;
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 25000);
}

timeToNewYear(endOfYear);
