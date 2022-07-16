const logoutBtn = document.querySelector('#logout-btn');

const logoutBtnHandler = async () => {
  try {
    const res = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      return document.location.replace('/login');
    }
    alert('Failed to logout');
  } catch (err) {
    console.log(err);
  }
};

logoutBtn.addEventListener('click', logoutBtnHandler);