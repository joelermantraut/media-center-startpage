document.addEventListener("keydown", function (event) {
  if (event.key >= "1" && event.key <= "9") {
    var links = document.querySelectorAll(".app a");
    var index = parseInt(event.key) - 1;
    if (links.length > index) {
      window.location.href = links[index].href;
    }
  }
});

document.getElementsByClassName("not-connected-alert")[0].addEventListener("click", verifyConnection);

function verifyConnection() {
  var not_connect_alert = document.getElementsByClassName("not-connected-alert")[0];
  if (!navigator.onLine) {
    not_connect_alert.className = "not-connected-alert show";
  } else {
    not_connect_alert.className = "not-connected-alert hide";
  }
}

window.addEventListener("load", function (event) {
  this.setInterval(verifyConnection, 1000);
});