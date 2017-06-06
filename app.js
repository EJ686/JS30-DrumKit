// Keypress events
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return; // Stops the function from running all together
    audio.currentTime = 0; // Rewinds to the start of audio file
    audio.play();
    key.classList.add('playing');
});


// Transition effects
function removeTransition (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
