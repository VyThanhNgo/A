 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "Which of the following is the most appropriate way to disagree politely in a debate?", 
        options: ["I completely disagree with you.", "I see your point, but I respectfully disagree.", "You're wrong.", "That's absolutely false."], 
        correct: 1 // "I see your point, but I respectfully disagree."
    },
    { 
        id: 2, 
        question: "What is the best way to present a counterargument in a debate?", 
        options: ["Let me finish.", "I have a different perspective on this.", "I disagree because you're wrong.", "I think you should consider my viewpoint."], 
        correct: 2 // "I disagree because you're wrong."
    },
    { 
        id: 3, 
        question: "When making a complex argument, it's important to:", 
        options: ["Stick to one main point.", "Avoid using examples.", "Use strong emotional appeals.", "Support your argument with facts and reasoning."], 
        correct: 3 // "Support your argument with facts and reasoning."
    },
    { 
        id: 4, 
        question: "How do you acknowledge a valid point made by the opposing side?", 
        options: ["I agree with you completely.", "That's an interesting point.", "You're absolutely right.", "I hadn't thought of that."], 
        correct: 3 // "I hadn't thought of that."
    },
    { 
        id: 5, 
        question: "In a debate, how do you express uncertainty about a claim?", 
        options: ["I am not sure, but I think...", "I'm positive that...", "There's no doubt about it.", "I'm certain this is correct."], 
        correct: 0 // "I am not sure, but I think..."
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
        window.location.href = "les13.html";
    }
}