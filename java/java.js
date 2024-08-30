function getTime() {
  let currentTimeZone = moment().tz("Europe/Paris");
  let date = currentTimeZone.format("dddd, MMMM Do, yyyy");
  let time = currentTimeZone.format(" H:mm:ss [<small>]A[</small]");
  let dateParis = document.querySelector("#date-paris");
  let dateRiga = document.querySelector("#date-riga");
  let timeParis = document.querySelector("#time-paris");
  let timeRiga = document.querySelector("#time-riga");
  timeParis.innerHTML = time;
  timeRiga.innerHTML = time;
  dateParis.innerHTML = date;
  dateRiga.innerHTML = date;
}

getTime();
setInterval(getTime, 1);
/*let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", getTime);*/
