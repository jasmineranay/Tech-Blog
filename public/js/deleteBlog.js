// Target
const delSection = document.querySelector('.delete-section');
const delBtn = document.querySelector('#delete-btn')

// DELETE Blog Post
const delHandler = async (id) => {
    try {
        const blog_id = id;
        const response = await fetch('/api/blogs', {
            method: 'DELETE',
            body: JSON.stringify({
                blog_id
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) return document.location.replace('/dashboard');
        // if (response.status === 401) return document.location.replace('/login');
    } catch (err) {
        console.log(err);
    }
}

// commentSection.addEventListener('submit', signupFormHandler);


if (delBtn) {
    const blog_id = delBtn.dataset.id;
    delBtn.addEventListener('click', () => {
        delHandler(blog_id);
        setTimeout(() => location.reload('/'), 2500);
    });
}