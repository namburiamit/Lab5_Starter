// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // This is for changing images and audios according to specific horn types.

  let hornSelect = document.getElementById("horn-select");
  let hornImage = document.querySelector("img[src = 'assets/images/no-image.png']");
  let hornAudio = document.querySelector("audio[src = '']");


  hornSelect.addEventListener('change', select);

  function select(event) {
    if (event.target.value == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornAudio.src = "assets/audio/air-horn.mp3";
    }
    else if (event.target.value == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornAudio.src = "assets/audio/car-horn.mp3";
    }
    else if (event.target.value == "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornAudio.src = "assets/audio/party-horn.mp3";
    }
  }

  // This is for updating the volume of specific horn sounds

  let hornVolume = document.getElementById("volume-controls");
  let volumeImage = document.querySelector("img[src = 'assets/icons/volume-level-2.svg']");

  hornVolume.addEventListener('input', changeVolume);

  function changeVolume(event) {

    let vol = event.target.value;
    if (vol == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    }
    else if (vol > 0 && event.target.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (vol >= 33 && event.target.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    }
    else if (vol >= 67 && event.target.value <= 100) {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
    hornAudio.volume = vol / 100;
  }

  //for button
  let playButton = document.querySelector("button");
  playButton.addEventListener('click', play);

  function play(event) {
    console.log("play function called");

    hornAudio.play();

    let horn = hornSelect.value;
    console.log("horn value:", horn);


    if (horn == "party-horn") {
      let confetti = new JSConfetti();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      console.log(centerY);
      confetti.addConfetti()({
        confettiRadius: 6,
        confettiNumber: 500,
        origin: { x: centerX, y: centerY },
      })
    }
  }


}