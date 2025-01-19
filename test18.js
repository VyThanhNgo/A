 // Sample questions with one correct answer
 const questions = [
    { 
        id: 1, 
        question: "Which element of a story helps to establish the emotional atmosphere?", 
        options: ["Plot", "Setting", "Character", "Tone"], 
        correct: 3 // Tone
    },
    { 
        id: 2, 
        question: "In creative writing, what is the 'point of view'?", 
        options: ["The time in which the story takes place", "The character's motivation", "The perspective from which the story is told", "The main conflict in the story"], 
        correct: 2 // The perspective from which the story is told
    },
    { 
        id: 3, 
        question: "Which of the following is an example of a narrative hook?", 
        options: ["A flashback", "A surprising twist", "An opening question", "The conclusion"], 
        correct: 1 // A surprising twist
    },
    { 
        id: 4, 
        question: "Which literary device is used to give human qualities to non-human objects?", 
        options: ["Simile", "Metaphor", "Personification", "Alliteration"], 
        correct: 0 // Personification
    },
    { 
        id: 5, 
        question: "What is the term for the central conflict in a story that drives the plot?", 
        options: ["Theme", "Protagonist", "Antagonist", "Inciting incident"], 
        correct: 3 // Inciting incident
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
        window.location.href = "les18.html";
    }
}