function startLoveQuiz() {
  const quizBox = document.getElementById("loveQuiz");
  const questionEl = document.getElementById("lQuestion");
  const startBtn = document.getElementById("startLoveBtn");
  const optionsEl = document.getElementById("lOptions");

  // Love Quiz দেখাও
  quizBox.classList.remove("hidden");
  questionEl.innerText = "😊 ৫ সেকেন্ড অপেক্ষা করো...";

  // ৫ সেকেন্ড পর বাটন অটো শো হবে
  setTimeout(() => {
    startBtn.classList.remove("hidden");
  }, 5000);

  // বাটনে ক্লিক করলে ফানি মেসেজ + ছবি + মিউজিক
  startBtn.onclick = () => {
    questionEl.innerText = "😂 চরিত্র ভালো কর আর সোজা উপরে যা অন্যটা খেল!";
    optionsEl.innerHTML = "";

    // Funny Meme ছবি
    const img = document.createElement("img");
    img.src = "funny-meme.jpg";   // ফাইলের নাম ঠিক রাখো
    img.style.maxWidth = "300px";
    img.style.width = "100%";     // মোবাইলে ফিট হবে
    optionsEl.appendChild(img);

    // Background Music
    const audio = document.createElement("audio");
    audio.src = "funny-bgm.mp3";  // ফাইলের নাম ঠিক রাখো
    audio.autoplay = true;
    audio.controls = true;
    optionsEl.appendChild(audio);

    // অটো উপরে ওঠা
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
