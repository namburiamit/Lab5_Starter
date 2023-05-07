// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // funciton that populates the list.
  function populateVoiceList() {
    const voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  speechSynthesis.onvoiceschanged = populateVoiceList;

  const image = document.querySelector('img');

  const utterThis = document.querySelector("button");

  utterThis.addEventListener('click', () => {
    const text = document.querySelector('#text-to-speak');
    const utter = new SpeechSynthesisUtterance(text.value);

    const allVoices = document.querySelector('#voice-select');
    const ourVoice = allVoices.selectedOptions[0].getAttribute('data-name');

    utter.voice = speechSynthesis.getVoices().find((voice) => voice.name === ourVoice);

    window.speechSynthesis.speak(utter);

    // code to update the smiling photo.
    utter.addEventListener('start', () => {
      image.src = 'assets/images/smiling-open.png';
    });
    utter.addEventListener('end', () => {
      image.src = 'assets/images/smiling.png';
    });
  });

}