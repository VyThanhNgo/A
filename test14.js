 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "In many Western cultures, how is personal space typically regarded?", 
        options: ["Close proximity is welcomed.", "Personal space is respected and maintained.", "There is no concept of personal space.", "Personal space is not important."], 
        correct: 2 // "There is no concept of personal space."
    },
    { 
        id: 2, 
        question: "What is the primary concern regarding global climate change?", 
        options: ["Overpopulation in cities.", "Rising temperatures and natural disasters.", "Technological advancement.", "Cultural preservation."], 
        correct: 1 // "Rising temperatures and natural disasters."
    },
    { 
        id: 3, 
        question: "Which of the following is a key aspect of individualism commonly seen in Western societies?", 
        options: ["Group cohesion is prioritized.", "Self-reliance and personal freedom are emphasized.", "Family obligations are most important.", "Collective decision-making is valued."], 
        correct: 3 // "Collective decision-making is valued."
    },
    { 
        id: 4, 
        question: "In some Eastern cultures, why is it important to avoid direct confrontation?", 
        options: ["To maintain personal dignity and group harmony.", "Because confrontation is seen as a sign of weakness.", "It is considered disrespectful.", "To avoid legal consequences."], 
        correct: 3 // "To avoid legal consequences."
    },
    { 
        id: 5, 
        question: "Which of the following is a global issue that affects countries across different continents?", 
        options: ["Technological advancements.", "Education access.", "Cultural diversity.", "Language differences."], 
        correct: 2 // "Cultural diversity."
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
        window.location.href = "les14.html";
    }
}