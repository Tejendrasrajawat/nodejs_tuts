const getCurrentTime = () => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var now = new Date();
  var month = months[now.getMonth()];
  var day = now.getDate();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let perios = "AM";
  if (hours > 11) perios = "PM";
  if (perios > 12) hours -= 12;
  if (minutes < 10) minutes = "0" + minutes;

};
getCurrentTime();
