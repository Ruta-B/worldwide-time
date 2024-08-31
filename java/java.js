function getTime() {
  let currentTimeZone = moment().tz("Europe/Paris");
  let timeZoneRiga = moment().tz("Europe/Riga");
  let date = currentTimeZone.format("dddd, MMMM Do, yyyy");
  let time = currentTimeZone.format(" H:mm:ss [<small>]A[</small]");
  let timeRiga = timeZoneRiga.format(" H:mm:ss [<small>]A[</small]");
  let dateParis = document.querySelector("#date-paris");
  let dateRiga = document.querySelector("#date-riga");
  let timeParis = document.querySelector("#time-paris");
  let timeInRiga = document.querySelector("#time-riga");
  timeParis.innerHTML = time;
  timeInRiga.innerHTML = timeRiga;
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
          <div class="date" >${cityTime.format("dddd, MMMM Do, yyyy")}</div>
        </div>
        <div class="time" >${cityTime.format(
          " HH:mm:ss [<small>]A[</small]"
        )}</div> 
      
      </div>
     
       <a href="index.html"
        ><span class="material-symbols-outlined"> home </span></a
      > 
  
`;
}

getTime();
setInterval(getTime, 1);
let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", updateTime);
