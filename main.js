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
  var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

  if (orientation === "landscape-primary") {
    console.log("That looks good.");
  } else if (orientation === "landscape-secondary") {
    console.log("Mmmh... the screen is upside down!");
  } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
    console.log("Mmmh... you should rotate your device to landscape");
  } else if (orientation === undefined) {
    console.log("The orientation API isn't supported in this browser :(");
  }

  start();

});


function ready() {
  const { type } = screen.orientation;
  console.log(`Fullscreen and locked to ${type}. Ready!`);
}

async function start() {
  console.log("Start");
  await document.body.requestFullscreen();
  await screen.orientation.lock("landscape");
  ready();
}
