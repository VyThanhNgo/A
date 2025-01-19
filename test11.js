 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "What do you ask when you want to know the price of something?", 
        options: ["How much is it?", "Where can I buy this?", "Is this on sale?", "How old is this item?"], 
        correct: 0 // "How much is it?"
    },
    { 
        id: 2, 
        question: "What is a 'receipt'?", 
        options: ["A shopping list.", "A proof of purchase.", "A coupon for discount.", "A store policy."], 
        correct: 1 // "A proof of purchase."
    },
    { 
        id: 3, 
        question: "When you buy something and want to pay later, you are likely using:", 
        options: ["Cash.", "Credit card.", "Debit card.", "Layaway."], 
        correct: 3 // "Layaway."
    },
    { 
        id: 4, 
        question: "What is the best way to ask for a discount?", 
        options: ["Can you give me a better price?", "Is it cheaper?", "I need a discount.", "Is this the final price?"], 
        correct: 0 // "Can you give me a better price?"
    },
    { 
        id: 5, 
        question: "When shopping online, what do you do before purchasing?", 
        options: ["Add items to cart.", "Ask for a discount.", "Read product reviews.", "Check the expiration date."], 
        correct: 2 // "Read product reviews."
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
        window.location.href = "less11.html";
    }
}