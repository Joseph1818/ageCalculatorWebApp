function age() {
  var day1 = document.getElementById("date").value;
  var month1 = document.getElementById("month").value;
  var year1 = document.getElementById("year").value;

  var date = new Date();
  var day2 = date.getDate();
  var month2 = 1 + date.getMonth();
  var year2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day1 > day2) {
    day2 = day2 + month[month2 - 1];
    month2 = month2 - 1;
  }
  if (month1 > month2) {
    month2 = month2 + 12;
    year2 = year2 - 1;
  }
  var day = day2 - day1;
  var month = month2 - month1;
  var year = year2 - year1;

  if (day1 == null || day1 == "") {
    document.getElementById("message").innerHTML = "field required";
    return false;
  } else {
    document.getElementById("ageYresult").innerHTML = year;
  }
  if (month1 == null || month1 == "") {
    document.getElementById("message").innerHTML = "field required";
    return false;
  } else {
    document.getElementById("ageMresult").innerHTML = month;
  }

  if (year1 == null || year1 == "") {
    document.getElementById("message").innerHTML = "field required";
    return false;
  } else {
    document.getElementById("ageDresult").innerHTML = day;
  }
}
