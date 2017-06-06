// Event listener
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if (!audio) return; // Stops the function from running all together
    audio.currentTime = 0; // Rewinds to the start of audio file
    audio.play();
});
