 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "What do you say when ordering food at a restaurant?", 
        options: ["Can I borrow a pen?", "I’d like a pizza, please.", "What time is it?", "Do you like pizza?"], 
        correct: 1 // Correct answer: "I’d like a pizza, please."
    },
    { 
        id: 2, 
        question: "How do you ask for the bill?", 
        options: ["Can I have the menu?", "What is this dish?", "Can I have the bill, please?", "Is it spicy?"], 
        correct: 2 // Correct answer: "Can I have the bill, please?"
    },
    { 
        id: 3, 
        question: "What do you say to ask for water at a restaurant?", 
        options: ["Can I have some water, please?", "Do you sell soft drinks?", "How much is it?", "Where is the restroom?"], 
        correct: 0 // Correct answer: "Can I have some water, please?"
    },
    { 
        id: 4, 
        question: "What does 'vegetarian' mean?", 
        options: ["A drink with no sugar.", "A dish with a lot of spices.", "A person who doesn’t eat meat.", "A type of dessert."], 
        correct: 2 // Correct answer: "A person who doesn’t eat meat."
    },
    { 
        id: 5, 
        question: "How do you ask what’s in a dish?", 
        options: ["Is it free?", "What ingredients are in this dish?", "Do you have ice cream?", "Can I have a glass of water?"], 
        correct: 1 // Correct answer: "What ingredients are in this dish?"
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
        window.location.href = "les6.html";
    }
}