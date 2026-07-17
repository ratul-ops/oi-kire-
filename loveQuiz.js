function startLoveQuiz() {
  const quizBox = document.getElementById("loveQuiz");
  const questionEl = document.getElementById("lQuestion");
  const startBtn = document.getElementById("startLoveBtn");

  // Love Quiz দেখাও
  quizBox.classList.remove("hidden");
  questionEl.innerText = " 😊 নিচে স্ক্রল করো... অনেক দূর যাও!";

  // স্ক্রল ইভেন্ট চেক করো
  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
      startBtn.classList.remove("hidden");
    }
  });

  // বাটনে ক্লিক করলে ফানি মেসেজ + ছবি + মিউজিক
  startBtn.onclick = () => {
    questionEl.innerText = "😂 চরিত্র ভালো কর আর সোজা উপরে যা অন্যটা খেল!";
    const optionsEl = document.getElementById("lOptions");
    optionsEl.innerHTML = "";

    // Funny Meme ছবি
    let img = document.createElement("img");
    img.src = "funny-meme.jpg";   // ফাইলের নাম ঠিক রাখো
    img.style.maxWidth = "300px";
    optionsEl.appendChild(img);

    // Background Music
    let audio = document.createElement("audio");
    audio.src = "funny-bgm.mp3";  // ফাইলের নাম ঠিক রাখো
    audio.autoplay = true;
    audio.controls = true;
    optionsEl.appendChild(audio);

    // অটো উপরে ওঠা
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
