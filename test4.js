
 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "What do you do first in the morning?", 
        options: ["I go to bed.", "I have dinner.", "I brush my teeth.", "I go shopping."], 
        correct: 2 // Correct answer: "I brush my teeth."
    },
    { 
        id: 2, 
        question: "What do you usually eat for breakfast?", 
        options: ["Coffee at night.", "Nothing at all.", "Soup for dinner.", "Cereal and milk."], 
        correct: 3 // Correct answer: "Cereal and milk."
    },
    { 
        id: 3, 
        question: "How do you go to work or school?", 
        options: ["By car.", "By bicycle.", "I walk.", "By airplane."], 
        correct: 0 // Correct answer: "By car."
    },
    { 
        id: 4, 
        question: "What time do you usually go to bed?", 
        options: ["At 10 PM.", "In the morning.", "At lunch time.", "I never sleep."], 
        correct: 0 // Correct answer: "At 10 PM."
    },
    { 
        id: 5, 
        question: "What do you do after dinner?", 
        options: ["I read a book.", "I eat breakfast.", "I go to work.", "I go jogging."], 
        correct: 0 // Correct answer: "I read a book."
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
        window.location.href = "les4.html";
    }
}