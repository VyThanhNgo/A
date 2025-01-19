function switchTab(tabName) {
    // Lấy tất cả các phần nội dung và tab
    const sections = document.querySelectorAll('.section');
    const tabs = document.querySelectorAll('.tab');

    // Ẩn tất cả các phần nội dung và bỏ lớp 'active-tab' khỏi tất cả các tab
    sections.forEach(section => section.style.display = 'none');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Hiển thị phần nội dung phù hợp và thêm lớp 'active-tab' cho tab được chọn
    const activeSection = document.getElementById(tabName);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    tabs.forEach(tab => {
        if (tab.getAttribute('onclick') === `switchTab('${tabName}')`) {
            tab.classList.add('active-tab');
        }
    });
}


    function continueLearning(course) {
        let url = '';

        switch(course) {
            case 'beginner':
                url = 'les1.html'; 
                break;
            case 'intermediate':
                url = 'less7.html'; 
                break;
            case 'advanced':
                url = 'les13.html'; 
                break;
            default:
                console.error('Invalid course selected');
                return;
        }
        

        window.location.href = url; 
    }

    function addTrack() {
        const input = document.getElementById('newTrack');
        const trackName = input.value.trim();
        
        if (trackName === '') {
            alert("Please enter a request name.");
            return;
        }
        
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';
        trackItem.innerHTML = `
            <span>${trackName}</span>
            <div class="buttons">
                <button onclick="editTrack(this)">Edit</button>
                <button onclick="deleteTrack(this)">Delete</button>
            </div>
        `;
        
        document.getElementById('trackList').appendChild(trackItem);
        input.value = ''; 
    }

    function editTrack(button) {
        const trackItem = button.closest('.track-item');
        const trackName = trackItem.querySelector('span');
        const newName = prompt("Edit request name:", trackName.innerText);
        if (newName) {
            trackName.innerText = newName;
        }
    }

    function deleteTrack(button) {
        const trackItem = button.closest('.track-item');
        trackItem.remove();
    }

    function resetTracks() {
        document.getElementById('trackList').innerHTML = '';
    }

    function detectEnter(event) {
        if (event.key === "Enter") {
            addTrack();
        }

        }
