function playErrorSound() {
  const sound = document.getElementById("errorSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(err => console.log("Audio blocked:", err));
  }
}
