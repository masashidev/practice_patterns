//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note

const app = document.getElementById('app');
const button = document.createElement('button');
button.innerHTML = 'Play';
app.appendChild(button);

button.addEventListener('click', () => {
  synth.triggerAttackRelease("C5", "8n");
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'a') {
    synth.triggerAttackRelease("C4", "8n");
  } else if (e.key === 's') {
    synth.triggerAttackRelease("D4", "8n");
  } else if (e.key === 'd') {
    synth.triggerAttackRelease("E4", "8n");
  } else if (e.key === 'f') {
    synth.triggerAttackRelease("F4", "8n");
  } else if (e.key === 'g') {
    synth.triggerAttackRelease("G4", "8n");
  } else if (e.key === 'h') {
    synth.triggerAttackRelease("A4", "8n");
  } else if (e.key === 'j') {
    synth.triggerAttackRelease("B4", "8n");
  } else if (e.key === 'k') {
    synth.triggerAttackRelease("C5", "8n");
  }
})

// const intervalID = setInterval(() => {
//   synth.triggerAttackRelease(getRandomSound(), getRandomDuration());
// }, 100);

function getRandomSound() {
  const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
  return notes[Math.floor(Math.random() * notes.length)];
}
function getRandomDuration() {
  const durations = ['8n', '4n', '2n', '1n'];
  return durations[Math.floor(Math.random() * durations.length)];
}
