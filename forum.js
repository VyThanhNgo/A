
function addPost() {
    const postContent = document.getElementById('post-content').value;
    const postFile = document.getElementById('post-file').files[0];

    if (!postContent.trim()) {
      alert('Post content cannot be empty!');
      return;
    }

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    // Check file type and display appropriately
    let filePreview = '';
    if (postFile) {
      const fileURL = URL.createObjectURL(postFile);
      if (postFile.type.startsWith('image/')) {
        filePreview = `<img src="${fileURL}" alt="Post Attachment">`;
      } else {
        filePreview = `<p>File uploaded: <a href="${fileURL}" target="_blank">${postFile.name}</a></p>`;
      }
    }
postDiv.innerHTML = `
<div class="avatar">
<img src="${localStorage.getItem('avatar') || 'https://www.example.com/default-avatar.png'}" alt="User Avatar" class="avatar-img">
  <strong>${localStorage.getItem('nickname') || 'Guest'}</strong>
</div>
<p>${postContent}</p>
${filePreview}
<button onclick="showCommentInput(this)">Add Comment</button>
<div class="comment-section"></div>
<button class="edit-btn" onclick="editPost(this)">Edit Post</button>
<button class="delete-btn" onclick="deletePost(this)">Delete Post</button>
`;
document.getElementById('posts-list').prepend(postDiv);

document.getElementById('post-content').value = '';
document.getElementById('post-file').value = '';
}

function editPost(button) {
const postDiv = button.closest('.post');
const postContent = postDiv.querySelector('p');
const newContent = prompt('Edit your post:', postContent.textContent);
if (newContent && newContent.trim()) {
postContent.textContent = newContent;
}
}

function deletePost(button) {
const postDiv = button.closest('.post');
postDiv.remove();
}

function showCommentInput(button) {
const commentSection = button.nextElementSibling;

const commentInputDiv = document.createElement('div');
commentInputDiv.className = 'comment-input';
commentInputDiv.innerHTML = `
<textarea placeholder="Write your comment..."></textarea>
<input type="file" accept="image/*, .pdf, .docx, .txt">
<button onclick="addComment(this)">Submit Comment</button>
`;

commentSection.prepend(commentInputDiv);
}

function addComment(button) {
const commentInputDiv = button.parentElement;
const commentText = commentInputDiv.querySelector('textarea').value;
const commentFile = commentInputDiv.querySelector('input').files[0];

if (!commentText.trim()) {
alert('Comment content cannot be empty!');
return;
}

const commentDiv = document.createElement('div');
commentDiv.className = 'comment';

// Check file type and display appropriately
let filePreview = '';
if (commentFile) {
const fileURL = URL.createObjectURL(commentFile);
if (commentFile.type.startsWith('image/')) {
  filePreview = `<img src="${fileURL}" alt="Comment Attachment">`;
} else {
  filePreview = `<p>File uploaded: <a href="${fileURL}" target="_blank">${commentFile.name}</a></p>`;
}
}

commentDiv.innerHTML = `
  <div class="avatar">
<img src="${localStorage.getItem('avatar') || 'https://www.example.com/default-avatar.png'}" alt="User Avatar" class="avatar-img">
    <strong class="nickname">${localStorage.getItem('nickname') || 'Guest'}</strong>
  </div>
  <p>${commentText}</p>
  ${filePreview}
  <button onclick="showReplyInput(this)">Reply</button>
  <div class="reply-section"></div>
  <button class="edit-comment-btn" onclick="editComment(this)">Edit</button>
  <button class="delete-comment-btn" onclick="deleteComment(this)">Delete</button>
`;



const commentSection = commentInputDiv.parentElement;
commentSection.prepend(commentDiv);

commentInputDiv.remove();
}

function editComment(button) {
const commentDiv = button.closest('.comment');
const commentText = commentDiv.querySelector('p');
const newContent = prompt('Edit your comment:', commentText.textContent);
if (newContent && newContent.trim()) {
commentText.textContent = newContent;
}
}

function deleteComment(button) {
const commentDiv = button.closest('.comment');
commentDiv.remove();
}
function goBack() {
window.history.back();
}
function showReplyInput(button) {
const replySection = button.nextElementSibling;

const replyInputDiv = document.createElement('div');
replyInputDiv.className = 'comment-input';
replyInputDiv.innerHTML = `
<textarea placeholder="Write your reply..."></textarea>
<input type="file" accept="image/*, .pdf, .docx, .txt">
<button onclick="addReply(this)">Submit Reply</button>
`;

replySection.prepend(replyInputDiv);
}

function addReply(button) {
const replyInputDiv = button.parentElement;
const replyText = replyInputDiv.querySelector('textarea').value;
const replyFile = replyInputDiv.querySelector('input').files[0];

if (!replyText.trim() && !replyFile) {
alert('Reply content or file cannot be empty!');
return;
}

const replyDiv = document.createElement('div');
replyDiv.className = 'reply';

let filePreview = '';
if (replyFile) {
const fileURL = URL.createObjectURL(replyFile);
if (replyFile.type.startsWith('image/')) {
// Scale down image size based on nesting level
const nestingLevel = getNestingLevel(replyInputDiv);
const imageSize = 100 - nestingLevel * 10; // Decrease image size by 10% per nesting level
filePreview = `<img src="${fileURL}" alt="Reply Attachment" style="width:${imageSize}%; height:auto;">`;
} else {
filePreview = `<p>File uploaded: <a href="${fileURL}" target="_blank">${replyFile.name}</a></p>`;
}
}

replyDiv.innerHTML = `
<p>${replyText}</p>
${filePreview}
<button onclick="showReplyInput(this)">Reply</button>
<div class="reply-section"></div>
`;

const replySection = replyInputDiv.parentElement;
replySection.appendChild(replyDiv);

replyInputDiv.remove();
}

function getNestingLevel(element) {
let level = 0;
while (element.parentElement && element.classList.contains('reply-section')) {
level++;
element = element.parentElement;
}
return level;
}
