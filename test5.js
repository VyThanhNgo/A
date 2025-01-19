 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "How do you ask for directions to a place?", 
        options: ["Where is the nearest hospital?", "What time is it?", "Can you lend me a map?", "Do you like traveling?"], 
        correct: 0 // Correct answer: "Where is the nearest hospital?"
    },
    { 
        id: 2, 
        question: "If someone says 'Turn left,' what should you do?", 
        options: ["Walk straight.", "Turn right.", "Turn left.", "Go back."], 
        correct: 2 // Correct answer: "Turn left."
    },
    { 
        id: 3, 
        question: "What does 'Go straight ahead' mean?", 
        options: ["Turn left.", "Turn right.", "Walk backward.", "Continue in the same direction."], 
        correct: 3 // Correct answer: "Continue in the same direction."
    },
    { 
        id: 4, 
        question: "How do you ask where a specific place is?", 
        options: ["Can you tell me where the library is?", "How much is it?", "What time does it open?", "Can I use your phone?"], 
        correct: 0 // Correct answer: "Can you tell me where the library is?"
    },
    { 
        id: 5, 
        question: "What does it mean if someone says 'It's on your right'?", 
        options: ["The place is on your left.", "The place is behind you.", "The place is on your right.", "The place is straight ahead."], 
        correct: 2 // Correct answer: "The place is on your right."
    },
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
        window.location.href = "les5.html";
    }
}