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

function updateTime(event) {
  let chosenCity = event.target.value;
  if (chosenCity === "current") {
    chosenCity = moment.tz.guess();
  }
  let getCity = chosenCity.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(chosenCity);
  let currentCity = document.querySelector("#chosen-city");
  currentCity.innerHTML = `
  <div class="city">
        <div>
          <h2>${getCity}</h2>
          <div class="date" id="date-paris">${cityTime.format(
            "dddd, MMMM Do, yyyy"
          )}</div>
        </div>
        <div class="time" id="time-paris">${cityTime.format(
          " H:mm:ss [<small>]A[</small]"
        )}</div>
      </div>
`;
}

getTime();
setInterval(getTime, 1);
let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", updateTime);
