 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "Which philosopher is known for the quote 'I think, therefore I am'?", 
        options: ["René Descartes", "Immanuel Kant", "Socrates", "Friedrich Nietzsche"], 
        correct: 0 // René Descartes
    },
    { 
        id: 2, 
        question: "What does the term 'Existentialism' primarily focus on?", 
        options: ["The nature of reality and the universe.", "The meaning of life and the individual's role in it.", "The existence of God and moral law.", "The study of logic and reasoning."], 
        correct: 1 // "The meaning of life and the individual's role in it."
    },
    { 
        id: 3, 
        question: "In philosophy, what is 'dualism'?", 
        options: ["The belief that mind and body are separate entities.", "The idea that everything in the universe is interconnected.", "The theory that all things have a purpose.", "The belief in the power of reason over emotion."], 
        correct: 0 // "The belief that mind and body are separate entities."
    },
    { 
        id: 4, 
        question: "What is the main question addressed by the philosophy of 'epistemology'?", 
        options: ["What is the nature of knowledge?", "How should people live?", "What is the nature of reality?", "What is the best form of government?"], 
        correct: 2 // "What is the nature of knowledge?"
    },
    { 
        id: 5, 
        question: "Which philosopher is associated with the concept of the 'Allegory of the Cave'?", 
        options: ["Socrates", "Plato", "Aristotle", "Nietzsche"], 
        correct: 1 // Plato
    }
];



        // Render questions
        const questionsContainer = document.getElementById('questions');
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
        window.location.href = "les16.html";
    }
}