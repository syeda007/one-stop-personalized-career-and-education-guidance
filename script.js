// -------------------- COLLEGES DATA --------------------
const colleges = [
  { name: "IIT Bombay", speciality: "Engineering, Technology, and Research" },
  { name: "NIT Trichy", speciality: "Mechanical Engineering & Applied Sciences" },
  { name: "AIIMS Delhi", speciality: "Medical Sciences and Research" },
  { name: "IIM Ahmedabad", speciality: "Business, Management, and Leadership" },
  { name: "Osmania University", speciality: "Commerce, Arts, and Social Sciences" }
];

// -------------------- COURSES DATA --------------------
const courses = [
  { name: "Computer Science", speciality: "Programming, AI, ML, Software Development" },
  { name: "Mechanical Engineering", speciality: "Design, Robotics, Manufacturing" },
  { name: "Medicine", speciality: "MBBS, Surgery, and Medical Research" },
  { name: "Business Management", speciality: "Finance, Marketing, Strategy" },
  { name: "Commerce", speciality: "Accounting, Finance, Business Law" }
];

// -------------------- APTITUDE QUESTIONS --------------------
const questions = [
  { q: "What is 15 + 25?", options: ["30", "40", "50"], answer: "40" },
  { q: "Which is the capital of India?", options: ["Delhi", "Mumbai", "Hyderabad"], answer: "Delhi" },
  { q: "Water freezes at what °C?", options: ["0", "100", "50"], answer: "0" },
  { q: "Which gas do humans need to survive?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen"], answer: "Oxygen" },
  { q: "If a car travels 60 km in 1 hour, what is its speed?", options: ["30 km/h", "60 km/h", "120 km/h"], answer: "60 km/h" },
  { q: "Who is known as the Father of Computers?", options: ["Charles Babbage", "Newton", "Einstein"], answer: "Charles Babbage" },
  { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus"], answer: "Mars" },
  { q: "What is 9 × 8?", options: ["72", "64", "81"], answer: "72" },
  { q: "Which organ pumps blood in the human body?", options: ["Heart", "Lungs", "Brain"], answer: "Heart" },
  { q: "Who invented the light bulb?", options: ["Thomas Edison", "Tesla", "Newton"], answer: "Thomas Edison" }
];

let currentQuestion = 0;
let score = 0;

// -------------------- TEST FUNCTIONS --------------------
function loadQuestion() {
  const container = document.getElementById("testContainer");
  if (!container) return;

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    container.innerHTML = `
      <h3>${q.q}</h3>
      ${q.options.map(opt =>
        `<button onclick="checkAnswer('${opt}')">${opt}</button>`
      ).join("")}
    `;
  } else {
    showResult();
  }
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  loadQuestion();
}

function showResult() {
  const container = document.getElementById("testContainer");

  let recommendation = "";
  if (score >= 8) {
    recommendation = `
      <h3>Recommended Course: Computer Science</h3>
      <p>College Suggestion: IIT Bombay (Top Govt. Engineering Institute)</p>
    `;
  } else if (score >= 6) {
    recommendation = `
      <h3>Recommended Course: Mechanical Engineering</h3>
      <p>College Suggestion: NIT Trichy (Prestigious Govt. Engineering Institute)</p>
    `;
  } else if (score >= 4) {
    recommendation = `
      <h3>Recommended Course: Business Management</h3>
      <p>College Suggestion: IIM Ahmedabad (Top Govt. Management Institute)</p>
    `;
  } else {
    recommendation = `
      <h3>Recommended Course: Commerce</h3>
      <p>College Suggestion: Osmania University (Leading Govt. Commerce College)</p>
    `;
  }

  container.innerHTML = `
    <h2>Your Score: ${score} / ${questions.length}</h2>
    <div class="recommendation">${recommendation}</div>
    <button onclick="restartTest()">Retake Test</button>
  `;
}

function restartTest() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// -------------------- RENDER COLLEGES --------------------
function renderColleges() {
  const container = document.getElementById("collegeContainer");
  if (!container) return;

  container.innerHTML = colleges.map(c =>
    `<div class="card"><h3>${c.name}</h3><p>${c.speciality}</p></div>`
  ).join("");
}

// -------------------- RENDER COURSES --------------------
function renderCourses() {
  const container = document.getElementById("courseContainer");
  if (!container) return;

  container.innerHTML = courses.map(c =>
    `<div class="card"><h3>${c.name}</h3><p>${c.speciality}</p></div>`
  ).join("");
}

// -------------------- AUTO-RUN --------------------
document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
  renderColleges();
  renderCourses();
});
