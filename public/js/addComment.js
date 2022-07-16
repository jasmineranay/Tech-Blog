// Target
const commentSection = document.querySelector('.comment-section');
const commentBtn = document.querySelector('#comment-btn')

// Target
const commentModal = document.getElementById("commentModal");
const addCommentBtn = document.getElementById("addComment-btn");
const commentSpan = document.getElementsByClassName("commentClose")[0];
const cancelBtns = document.getElementById("cancel-btn2")

// When the user clicks on the button, open the modal
addCommentBtn.onclick = function () {
  commentModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
commentSpan.onclick = function () {
  commentModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == commentModal) {
    commentModal.style.display = "none";
  }
}

// When the user clicks on cancel, close the modal
cancelBtns.onclick = function () {
  commentModal.style.display = "none";
}


// Send Comment to Blog Post
const commentHandler = async (id) => {
  // event.preventDefault();

  const comment_content = document.querySelector('#commentContent').value.trim();
  // const comment_post_date = '2022-03-30'
  const blog_id = id;

  // Check all form variables
  if (comment_content) {
    try {
      const response = await fetch('/comment', {
        method: 'POST',
        body: JSON.stringify({
          comment_content,
          // comment_post_date,
          // user_id,
          blog_id
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      const waiting = response.json();

      if (response.ok) {
        document.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }
}

if (commentBtn) {
  const blog_id = commentBtn.dataset.id;
  commentBtn.addEventListener('click', () => {
    commentHandler(blog_id);
    // setTimeout(() => location.reload(), 2500);
  });
}