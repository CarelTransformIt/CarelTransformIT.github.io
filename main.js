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
  var fullscreenbuttonUnity = document.getElementById("unity-fullscreen-button");
  var fullscreenbutton = document.getElementById("FullscreenButton");
  fullscreenbutton.addEventListener('click',(event)=>{

    console.log("Button clicked")
    toggleElement(fullscreenbutton);

    //fullscreenbuttonUnity.click();

    unityInstance.SetFullscreen(1);
  });

  

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


function toggleElement(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
