// RANDOM DATE GENERATOR FOR VACCINE APPOINTMENT
function randomDate() {
  var current_date = new Date();
  var day = current_date.getDay() + 2;
  var month = current_date.getMonth() + 1;

  var vac_month = 1 + Math.floor(month + Math.random() * (12 - month));

  if (vac_month == 2) {
    var vac_day = Math.floor(1 + Math.random() * (28 - 1));
  } else if (vac_month % 2 == 0) {
    var vac_day = Math.floor(1 + Math.random() * (30 - 1));
  } else {
    var vac_day = Math.floor(1 + Math.random() * (31 - 1));
  }

  var vac_hour = Math.floor(9 + Math.random() * (21 - 9));

  var vac_min = Math.floor(1 + Math.random() * (12 - 1)) * 5;
  if (vac_min == 5) {
    vac_min = "0" + vac_min;
  }
  document.getElementById("date").innerText =
    vac_day + "-" + vac_month + "-" + current_date.getFullYear();
  document.getElementById("time").innerText = vac_hour + ":" + vac_min;
}

// ANIMATION FUNCTIONS

function move(element, transform_x, transform_y) {
  element.style.transform =
    "translate(" + transform_x + "," + transform_y + ")";
}

function disable(element) {
  element.disable = true;
  element.style.pointerEvents = "none";
  element.style.filter = "contrast(70%)";
}

function change_opacity(element, opacity) {
  element.style.opacity = opacity;
}

function booking_alert(res) {
  if (res == 1) {
    $("#alert1").css({ display: "initial" });
    setTimeout(() => {
      $("#alert1").css({ opacity: "1" });
    }, 200);
  }
  if (res == 2) {
    $("#alert2").css({ display: "initial" });
    setTimeout(() => {
      $("#alert2").css({ opacity: "1" });
    }, 200);
  }
  if (res == 3) {
    $("#alert3").css({ display: "initial" });
    setTimeout(() => {
      $("#alert3").css({ opacity: "1" });
    }, 600);
  }
}

function scroll_question(answer, arrow) {
  if (!answer.classList.contains("open")) {
    answer.classList.add("open");
    answer.style.height = "150px";
    answer.style.padding = "5px";
    arrow.style.transform = "rotate(90deg)";
  } else if (answer.classList.contains("open")) {
    answer.classList.remove("open");
    answer.style.height = "0px";
    answer.style.padding = "0px";
    arrow.style.transform = "rotate(0deg)";
  }
}

