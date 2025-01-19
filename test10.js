 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "What does 'turn left' mean?", 
        options: ["Go straight ahead.", "Turn right.", "Turn to your left side.", "Turn around."], 
        correct: 2 // "Turn to your left side."
    },
    { 
        id: 2, 
        question: "Which of these is a way to ask for directions?", 
        options: ["Where is the nearest bank?", "How are you?", "What is your name?", "What time is it?"], 
        correct: 0 // "Where is the nearest bank?"
    },
    { 
        id: 3, 
        question: "If you're lost, what should you do?", 
        options: ["Ask someone for help.", "Keep walking aimlessly.", "Sit down and wait.", "Ignore the situation."], 
        correct: 0 // "Ask someone for help."
    },
    { 
        id: 4, 
        question: "What does 'straight ahead' mean?", 
        options: ["Turn left.", "Go straight.", "Go to the right.", "Turn around."], 
        correct: 1 // "Go straight."
    },
    { 
        id: 5, 
        question: "If you need a map, where should you go?", 
        options: ["A bookstore.", "A hotel reception.", "A restaurant.", "A gym."], 
        correct: 1 // "A hotel reception."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const questionsContainer = document.getElementById('questions');
    if (!questionsContainer) {
        console.error("Element with id 'questions' not found.");
        return;
    }

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `    
            <h2>${index + 1}. ${q.question}</h2>
            <ul class="options">
                ${q.options
                    .map(
                        (option, i) => ` 
                        <li>
                            <label>
                                <input type="radio" name="q${q.id}" value="${i}">
                                ${option}
                            </label>
                            <span class="tick" id="tick${q.id}${i}">&#10004;</span>
                            <span class="cross" id="cross${q.id}${i}">&#10008;</span>
                        </li>`
                    )
                    .join('')}
            </ul>
            <div id="correctAnswer${q.id}" class="correct-answer"></div>
        `;
        questionsContainer.appendChild(questionDiv);
    });
});


        // Submit quiz
        function submitQuiz() {
            const form = document.getElementById('quizForm');
            const resultDiv = document.getElementById('result');
            let score = 0;

            questions.forEach((q) => {
                const selected = form[`q${q.id}`]?.value;

                // Reset ticks and crosses
                q.options.forEach((_, i) => {
                    const tick = document.getElementById(`tick${q.id}${i}`);
                    const cross = document.getElementById(`cross${q.id}${i}`);
                    tick.style.display = 'none';
                    cross.style.display = 'none';
                });

                const correctAnswerDiv = document.getElementById(`correctAnswer${q.id}`);
                correctAnswerDiv.innerHTML = ''; // Clear previous correct answer message

                if (selected != null) {
                    // Check if the selected answer is correct or not
                    if (parseInt(selected) === q.correct) {
                        score++;
                        document.getElementById(`tick${q.id}${q.correct}`).style.display = 'inline';  // Show tick for correct answer
                    } else {
                        document.getElementById(`cross${q.id}${selected}`).style.display = 'inline';  // Show cross for wrong answer
                        // Display the correct answer below
                        correctAnswerDiv.innerHTML = `The correct answer is: ${q.options[q.correct]}`;
                    }
                }
            });

            resultDiv.innerHTML = `You got ${score}/${questions.length} correct.`;
        }
          // Confirm before exiting the page
function confirmExit(event) {
    // Hủy hành động mặc định của liên kết
    event.preventDefault();
    const isConfirmed = confirm("Are you sure you want to leave this page?");
    if (isConfirmed) {
        // Chuyển hướng người dùng đến trang khác
        window.location.href = "less10.html";
    }
}