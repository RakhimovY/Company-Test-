function getNextMonday() {
  const now = new Date();
  const today = new Date(now);

  const nextMonday = new Date(today);

  do {
    nextMonday.setDate(nextMonday.getDate() + 1); // Adding 1 day
  } while (nextMonday.getDay() !== 1);

  document.getElementById("Date").innerHTML = nextMonday.toDateString();
  document.getElementById("Date1").innerHTML = nextMonday.toDateString();
  document.getElementById("Date2").innerHTML = nextMonday.toDateString();
  document.getElementById("Date3").innerHTML = nextMonday.toDateString();
  document.getElementById("Date4").innerHTML = nextMonday.toDateString();
  
  return console.log(nextMonday.toDateString());
}
getNextMonday();
