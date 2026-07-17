let extraQuestions = [   
   {
        q: "মেসি যদি বিশ্বসেরা হয় তাহলে তুমি gay.... মেসি কি তোমার কাছে বিশ্বসেরা?",
        options: ["মেসি বিশ্বসেরা", "আমি gay...", "আমি গে...", "আমি Homosexual..."],
        ans: "", // সঠিক উত্তর ধরলাম
        explain: "😂 জানতাম তুমি gay..."
    },

    {
        q: "তুমি একটা বাস চালাচ্ছো, বাসে একজন লোক টিকেট উঠাচ্ছে তাকে কী বলা হয়?",
        options: ["ড্রাইভার", "কন্ডাক্টর", "প্যাসেঞ্জার", "মামা"],
        ans: "কন্ডাক্টর",
        explain: "বাসে টিকেট সংগ্রহকারীকে কন্ডাক্টর বলা হয়।"
    },
    {
        q: "বাসে শুরুতে ১৫ জন যাত্রী ছিল। টঙ্গীতে উঠল ৭ জন, নামল ২ জন। এখন বাসে মোট কতজন লোক আছে?",
        options: ["২০ জন", "২২ জন", "১৮ জন","১৯ জন"],
        ans: "২২ জন",
        explain: "১৫+৭-২=২০, সাথে ড্রাইভার+কন্ডাক্টর = ২২ জন।"
    },
    {
        q: "বাসে ড্রাইভার কোথায় বসে থাকে?",
        options: ["সামনে", "পেছনে", "মাঝে", "রিমোট দিয়ে ঘরে বসে"],
        ans: "সামনে",
        explain: "ড্রাইভার সবসময় সামনের সিটে বসে।"
    }, {
  "q":"পরে বাসটি সাভার এসে থামলো সেইখানে 5 জন মহিলা এবং 7 পুরুষ বাসে উঠলো, বাসের মধ্যে তিনজন গর্ভবতী মহিলা থাকলে বাসের যাত্রী সংখ্যা কত ?", 
  "options": ["32", "37", "36", "35"],
  "ans": "32",
  "explain": "সঠিক উত্তর 32। আগে ছিল 20 জন, নতুন উঠলো 12 জন = 32 জন।" },{
  "q": "একটি ঘরে 3টি বাতি আছে। বাইরে 3টি সুইচ। তুমি একবারই ঘরে ঢুকতে পারবে। কিভাবে বুঝবে কোন সুইচ কোন বাতির?",
  "options": ["বাতি গরম দেখে", "বাতি রঙ দেখে", "বাতি সংখ্যা দেখে", "বাতি উল্টে দেখে"],
  "ans": "বাতি গরম দেখে",
  "explain": "একটা সুইচ চালু করে কিছুক্ষণ রেখে বন্ধ করো এবং ২য় সুইচ দিয়ে রুমে প্রবেশ কর যদি দেখ বাতি জ্বলে না কিন্তু গরম তাহলে ১ম টি ঐ বাতির সুইচ আন্যথায় ৩য় সেটা সুইচ ।"
},
{
  "q": "আজ বুধবার। 50 দিন পর কোন বার হবে?",
  "options": ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার"],
  "ans": "মঙ্গলবার",
  "explain": "50 ÷ 7 = 7 সপ্তাহ + 1 দিন। বুধবার থেকে 1 দিন পর মঙ্গলবার।"
}


     
];

function playErrorSound() {
  const sound = document.getElementById("errorSound");
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(err => console.log("Audio blocked:", err));
  }
}

function startQuiz() {
  const qEl = document.getElementById("questionBox");
  const optEl = document.getElementById("optionsBox");
  const resEl = document.getElementById("resultBox");

  let currentQ = 0;
  showQuestion(currentQ);

  function showQuestion(i) {
    qEl.innerHTML = questions[i].q;
    optEl.innerHTML = "";
    questions[i].options.forEach(opt => {
      let btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(opt, questions[i].ans);
      optEl.appendChild(btn);
    });
  }

  function checkAnswer(selected, correct) {
    if (selected === correct) {
      resEl.innerHTML = "✅ সঠিক উত্তর!";
    } else {
      resEl.innerHTML = "❌ ভুল উত্তর!";
      playErrorSound(); // ভুল হলে সাউন্ড বাজবে
    }
  }
}

document.addEventListener("DOMContentLoaded", startQuiz);