 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "What does the term 'synergy' mean in a business context?", 
        options: ["The combined effect of working together is greater than the sum of individual efforts.", "A company acquiring a smaller competitor.", "A financial strategy used to reduce taxes.", "A method of cutting operational costs."], 
        correct: 0 // "The combined effect of working together is greater than the sum of individual efforts."
    },
    { 
        id: 2, 
        question: "Which of the following is a key component of effective business communication?", 
        options: ["Using technical jargon to demonstrate expertise.", "Being clear, concise, and direct in your message.", "Sending lengthy emails to provide detailed explanations.", "Focusing only on the positive aspects of a situation."], 
        correct: 1 // "Being clear, concise, and direct in your message."
    },
    { 
        id: 3, 
        question: "What is the purpose of a SWOT analysis?", 
        options: ["To identify strengths, weaknesses, opportunities, and threats related to a business or project.", "To evaluate financial performance and assess market risks.", "To plan the company's budget for the next quarter.", "To analyze the competitive landscape and set pricing strategies."], 
        correct: 2 // "To identify strengths, weaknesses, opportunities, and threats related to a business or project."
    },
    { 
        id: 4, 
        question: "What does 'ROI' stand for in a business context?", 
        options: ["Return on Investment", "Rate of Investment", "Reimbursement of Income", "Retention of Information"], 
        correct: 3 // "Return on Investment"
    },
    { 
        id: 5, 
        question: "What is a 'cold call' in business?", 
        options: ["A direct sales call to someone who has shown interest in your product.", "A scheduled follow-up call with an existing client.", "An unsolicited call made to a potential customer with the intention of selling.", "A call made to inquire about job openings."], 
        correct: 1 // "An unsolicited call made to a potential customer with the intention of selling."
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
        window.location.href = "les15.html";
    }
}