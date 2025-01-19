 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "When meeting someone for the first time, you say:", 
        options: ["How old are you?", "What's up?", "Nice to meet you.", "Where are you going?"], 
        correct: 2 // Assuming the third option ("Nice to meet you.") is the correct answer (zero-indexed)
    },
    { 
        id: 2, 
        question: "How do you introduce yourself?", 
        options: ["I live in New York.", "I am fine.", "My name is Anna.", "Good morning."], 
        correct: 2 
    },
    { 
        id: 3, 
        question: "What does 'Good afternoon' mean?", 
        options: ["A greeting in the morning.", "A greeting in the afternoon.", "A greeting at night.", "A greeting when you leave."], 
        correct: 1 
    },
    { 
        id: 4, 
        question: "When someone says 'Thank you,' you respond:", 
        options: ["You are welcome.", "I am sorry.", "Please", "Yes, I do."], 
        correct: 0 
    },
    { 
        id: 5, 
        question: "How do you ask someone where they are from?", 
        options: ["Where are you from?", "How old are you?", "What is your address?", "Where do you live?"], 
        correct: 0 
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
        window.location.href = "les1.html";
    }
}