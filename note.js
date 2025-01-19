
function switchTab(tabName) {
    // Lấy tất cả các tab và nội dung tương ứng
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.tab-content');

    // Ẩn tất cả các nội dung và loại bỏ trạng thái active của tab
    contentSections.forEach((section) => section.classList.add('hidden'));
    tabs.forEach((tab) => tab.classList.remove('active-tab'));

    // Hiển thị nội dung phù hợp và thêm trạng thái active cho tab được chọn
    const activeSection = document.getElementById(tabName);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }

    // Tìm tab được chọn và thêm lớp active-tab
    tabs.forEach((tab) => {
        if (tab.getAttribute('onclick') === `switchTab('${tabName}')`) {
            tab.classList.add('active-tab');
        }
    });
}

function saveNotes() {
    const notes = {
        vocabulary: document.getElementById('vocabulary').value,
        structures: document.getElementById('structures').value,
        grammar: document.getElementById('grammar').value,
        important: document.getElementById('important').value
    };
    localStorage.setItem('studyNotes', JSON.stringify(notes));
    alert('Study notes saved!');
}

function toggleHistory() {
    const history = document.getElementById('history');
    history.classList.toggle('hidden');
    const notes = JSON.parse(localStorage.getItem('studyNotes'));
    if (notes) {
        history.innerHTML = `
            <h3>Saved Notes</h3>
            <p><strong>Vocabulary:</strong> ${notes.vocabulary}</p>
            <p><strong>Structure:</strong> ${notes.structures}</p>
            <p><strong>Grammar:</strong> ${notes.grammar}</p>
            <p><strong>Important:</strong> ${notes.important}</p>
        `;
    } else {
        history.innerHTML = '<p>No notes saved yet.</p>';
    }
}

function saveFlashcard() {
    const flashcard = {
        english: document.getElementById('english').value.trim(),
        vietnamese: document.getElementById('vietnamese').value.trim(),
        type: document.getElementById('type').value.trim(),
        topic: document.getElementById('topic').value.trim(),
        note: document.getElementById('note').value.trim()
    };
    
    if (!flashcard.english) {
        alert('Flashcards saved!');
        return;
    }

    console.log('Saving flashcard:', flashcard); // Log kiểm tra dữ liệu
    localStorage.setItem('flashcard', JSON.stringify(flashcard));
    alert('Flashcard saved!');
}
function toggleFlashcardHistory() {
    const flashcardHistory = document.getElementById('historyflashcard');
    flashcardHistory.classList.toggle('hidden'); // Tắt/mở hiển thị lịch sử flashcard

    const flashcard = JSON.parse(localStorage.getItem('flashcard'));
    if (flashcard) {
        flashcardHistory.innerHTML = `
            <h3>Saved Flashcard</h3>
            <p><strong>English:</strong> ${flashcard.english || 'No data'}</p>
            <p><strong>Vietnamese:</strong> ${flashcard.vietnamese || 'No data'}</p>
            <p><strong>Part of speech:</strong> ${flashcard.type || 'No data'}</p>
            <p><strong>Topic:</strong> ${flashcard.topic || 'No data'}</p>
            <p><strong>Notes:</strong> ${flashcard.note || 'No data'}</p>
        `;
    } else {
        flashcardHistory.innerHTML = '<p>No flashcards saved yet.</p>';
    }
}
