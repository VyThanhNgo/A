 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "What do you say when talking about your future plans?", 
        options: ["I will go to the gym.", "I am going to the movies.", "I have gone to the store.", "I went to the park."], 
        correct: 1 // "I am going to the movies."
    },
    { 
        id: 2, 
        question: "Which phrase indicates you have a specific goal?", 
        options: ["I will probably travel.", "I hope to visit Paris.", "I am planning to learn French.", "I think I'll start tomorrow."], 
        correct: 3 // "I think I'll start tomorrow."
    },
    { 
        id: 3, 
        question: "What is a common way to talk about long-term goals?", 
        options: ["I want to become a doctor.", "I am thinking about being an artist.", "I am trying to be healthier.", "I will be traveling next year."], 
        correct: 2 // "I am trying to be healthier."
    },
    { 
        id: 4, 
        question: "How do you express that something will happen soon?", 
        options: ["I will be traveling next week.", "I am traveling next week.", "I was traveling next week.", "I travel next week."], 
        correct: 0 // "I will be traveling next week."
    },
    { 
        id: 5, 
        question: "What is an example of setting a goal?", 
        options: ["I will start reading more books.", "I should read more books.", "I have read more books.", "I read books often."], 
        correct: 3 // "I read books often."
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
        window.location.href = "less12.html";
    }
}