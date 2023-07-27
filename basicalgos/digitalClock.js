function myDigitalClock() {
  function updateClock() {
    var date = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var zone = hours >= 12 ? "PM" : "AM";

    // convert to 12-hour format
    hours = hours % 12 || 12;

    // display the time in the console
    var time = hours + ":" + minutes + ":" + seconds + " " + zone;
    console.log(time);
  }

  // call the updateClock function every second
  setInterval(updateClock, 1000);
}

myDigitalClock();
