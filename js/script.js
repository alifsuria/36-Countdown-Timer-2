// const days = document.getElementById("day");
// const hours = document.getElementById("hour");
// const minutes = document.getElementById("minute");
// const seconds = document.getElementById("second");

// let countdown = new Date(Date.parse(new Date()) + 7 * 24 * 60 *60 *1000)
// console.log(countdown)
// let timer = setInterval(() => {
//   let now = new Date().getTime();
//   let range = countdown - now;

//   let day_count = Math.floor(range / (1000 * 60 * 60 * 24));
//   let hour_count = Math.floor(
//     (range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   let minute_count = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
//   let second_count = Math.floor((range % (1000 * 60)) / 1000);
// //   console.log(range, day_count, hour_count, minute_count, second_count);

//   days.innerHTML = day_count;
//   hours.innerHTML = hour_count;
//   minutes.innerHTML = minute_count;
//   seconds.innerHTML = second_count;
// }, 1000);

function remaining_time(deadline) {
  //find the range between deadline and time now
  let range = Date.parse(deadline) - Date.parse(new Date());
  //range divide (millisec * second * minute * hours) <<one full cycle(i think)
  let days = Math.floor(range / (1000 * 60 * 60 * 24));
  //range divide(millisec * second * minute) modulus hours
  let hours = Math.floor((range / (1000 * 60 * 60)) % 24);
  //range divide(millisec * second) modulus minute
  let minutes = Math.floor((range / (1000 * 60)) % 60);
  //range divide(millisec) modulus seconds
  let seconds = Math.floor((range / 1000) % 60);
  console.log(range, days, hours, minutes, seconds);
  return {
    "total-range": range,
    day: days,
    hour: hours,
    minute: minutes,
    second: seconds,
  };
}

function initialize_clock(id, deadline) {
  const clock = document.getElementById(id);
  let day = clock.querySelector("#day");
  let hour = clock.querySelector("#hour");
  let minute = clock.querySelector("#minute");
  let second = clock.querySelector("#second");

  function update_clock() {
    var total = remaining_time(deadline);
    day.innerHTML = total.day;
    hour.innerHTML = ("0"+total.hour).slice(-2);
    minute.innerHTML = ("0"+total.minute).slice(-2);
    second.innerHTML = ("0"+total.second).slice(-2);
  }

  update_clock();
  var time_travel = setInterval(update_clock,1000)
}

//set time with day,hour,minute,second and times 1000 for change the value into millisecond
const deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);
console.log(deadline)
// console.log(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);
initialize_clock("clock-div", deadline);
