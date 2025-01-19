 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "What would you say if you disagree with someone's opinion?", 
        options: ["I agree with you.", "I don't think so.", "That's a great idea.", "You're right."], 
        correct: 1 // "I don't think so."
    },
    { 
        id: 2, 
        question: "Which phrase is used to make a suggestion?", 
        options: ["I think we should go to the cinema.", "You are wrong.", "I agree with you.", "That's not a good idea."], 
        correct: 0 // "I think we should go to the cinema."
    },
    { 
        id: 3, 
        question: "How do you politely ask someone for their opinion?", 
        options: ["What do you think?", "I don't care.", "Do it this way.", "It's your choice."], 
        correct: 0 // "What do you think?"
    },
    { 
        id: 4, 
        question: "Which of these is a way to express agreement?", 
        options: ["I disagree.", "I don't think so.", "That's true.", "I'm not sure."], 
        correct: 2 // "That's true."
    },
    { 
        id: 5, 
        question: "If someone suggests going out for lunch, what is a polite way to respond?", 
        options: ["That sounds great.", "I don't like it.", "I'm too busy.", "No, thanks."], 
        correct: 0 // "That sounds great."
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
        window.location.href = "less9.html";
    }
}