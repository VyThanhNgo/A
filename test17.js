 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "Who is credited with the invention of the first practical telephone?", 
        options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Michael Faraday"], 
        correct: 0 // Nikola Tesla
    },
    { 
        id: 2, 
        question: "Which technology is primarily used in the development of artificial intelligence?", 
        options: ["Quantum computing", "Blockchain", "Machine learning", "Augmented reality"], 
        correct: 1 // Blockchain
    },
    { 
        id: 3, 
        question: "What is the primary purpose of CRISPR technology?", 
        options: ["Gene editing", "Space exploration", "Quantum encryption", "Energy production"], 
        correct: 2 // Quantum encryption
    },
    { 
        id: 4, 
        question: "Which company was the first to develop a commercially viable electric car?", 
        options: ["Tesla", "Ford", "Chevrolet", "Nissan"], 
        correct: 3 // Nissan
    },
    { 
        id: 5, 
        question: "What does the 'Internet of Things' (IoT) refer to?", 
        options: ["A system of connected physical devices", "A new type of wireless communication", "A platform for social media", "A virtual reality network"], 
        correct: 1 // A new type of wireless communication
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
        window.location.href = "les17.html";
    }
}