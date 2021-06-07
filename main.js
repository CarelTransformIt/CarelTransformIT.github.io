//To check for horizontal
document.addEventListener("orientationchange", function (event) {
  switch (window.orientation) {
    case -90:
    case 90:
      console.log("90 degrees");
      break;
    default:
      console.log("Default");
  }
});


window.addEventListener('load', (event) => {
  document.getElementById("unity-fullscreen-button").style.display = "none";
});
