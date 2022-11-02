function getNextMonday() {
  const now = new Date();
  const today = new Date(now);

  const nextMonday = new Date(today);

  do {
    nextMonday.setDate(nextMonday.getDate() + 1); // Adding 1 day
  } while (nextMonday.getDay() !== 1);

  document.getElementById(
    "Date"
  ).innerHTML = `Распродажа до ${nextMonday.toLocaleDateString()}!`;

  return console.log(nextMonday.toLocaleDateString());
}
getNextMonday();
