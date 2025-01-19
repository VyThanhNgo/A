    const posts = [
        {
        title: "How to improve my English vocabulary?",
        description: "Looking for resources or tips to boost vocabulary.",
        author: "Alice",
        tags: ["Vocabulary", "Learning"],
        time: "10 minutes ago",
        answers: 0,
        answersArray: []
        },
        {
        title: "What is the difference between 'affect' and 'effect'?",
        description: "Need clarification on these two words.",
        author: "Bob",
        tags: ["Grammar", "Language"],
        time: "1 hour ago",
        answers: 2,
        answersArray: [
            { author: "Charlie", content: "Affect is a verb, while effect is a noun." },
            { author: "David", content: "Affect relates to emotions, and effect relates to outcomes." }
        ]
        },
        {
        title: "How can I practice speaking English fluently?",
        description: "I'm looking for conversation tips and resources.",
        author: "Charlie",
        tags: ["Speaking", "Fluency"],
        time: "2 hours ago",
        answers: 1,
        answersArray: [{ author: "Alice", content: "Join English-speaking clubs and practice every day." }]
        }
    ];

    const forumPostsContainer = document.getElementById("forumPosts");
    const askQuestionBtn = document.getElementById("askQuestionBtn");
    const askQuestionModal = document.getElementById("askQuestionModal");
    const overlay = document.getElementById("overlay");
    const submitQuestionBtn = document.getElementById("submitQuestionBtn");
    const questionInput = document.getElementById("questionInput");
    const searchInput = document.getElementById("searchInput");

    function renderPosts() {
        forumPostsContainer.innerHTML = "";
        posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
            <div>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <div class="meta">
                <span>Asked by ${post.author} - ${post.time}</span>
                <span>${post.answers} Answers</span>
            </div>
            <div class="tags">
                ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <div class="answer-section">
                ${post.answersArray.map(answer => `
                <div>
                    <strong>${answer.author}</strong>: <p>${answer.content}</p>
                </div>
                `).join('')}
                <textarea placeholder="Write your answer..."></textarea>
                <button onclick="submitAnswer(${posts.indexOf(post)})">Submit Answer</button>
            </div>
            </div>
        `;
        forumPostsContainer.appendChild(postCard);
        });
    }

    function submitAnswer(postIndex) {
        const answerText = forumPostsContainer.children[postIndex].querySelector("textarea").value;
        if (answerText) {
        posts[postIndex].answersArray.push({ author: "Anonymous", content: answerText });
        posts[postIndex].answers++;
        renderPosts();
        }
    }

    function toggleModal() {
        askQuestionModal.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    askQuestionBtn.addEventListener("click", toggleModal);
    overlay.addEventListener("click", toggleModal);

    submitQuestionBtn.addEventListener("click", () => {
        const newQuestion = questionInput.value.trim();
        if (newQuestion) {
        posts.push({
            title: newQuestion,
            description: "Description not provided.",
            author: "Anonymous",
            tags: ["General"],
            time: "Just now",
            answers: 0,
            answersArray: []
        });
        questionInput.value = "";
        toggleModal();
        renderPosts();
        }
    });

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        forumPostsContainer.innerHTML = "";
        filteredPosts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <div class="meta">
            <span>Asked by ${post.author} - ${post.time}</span>
            <span>${post.answers} Answers</span>
            </div>
            <div class="tags">
            ${post.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        `;
        forumPostsContainer.appendChild(postCard);
        });
    });

    renderPosts();