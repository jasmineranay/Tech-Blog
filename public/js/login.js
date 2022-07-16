const loginForm = document.querySelector('#login-form');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#email-login').value.trim();
  const user_password = document.querySelector('#password-login').value.trim();

  // Check all form variables
  if (username && user_password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, user_password }),
        headers: { 'Content-Type': 'application/json' },
      });
      const { message: dbMessage } = await response.json();

      if (response.ok) {
        return document.location.replace('/');
      }
      const checkMessage = document.querySelector('.invalid-auth');

      if (checkMessage) {
        checkMessage.remove();
      }
      const message = {
        tag: 'p',
        setAttr: {
          class: 'invalid-auth',
        },
        // set this to backend message
        textContent: dbMessage,
        appendTo: loginForm,
      };
      return appendContent(message);
    } catch (err) {
      console.log(err);
    }
  }
  // If one of the form variables is undefined check here.
  const checkMessage = document.querySelector('.invalid-auth');

  if (checkMessage) {
    checkMessage.remove();
  }

  const message = {
    tag: 'p',
    setAttr: {
      class: 'invalid-auth',
    },
    textContent: 'Please enter a valid username or password!',
    appendTo: loginForm,
  };
  appendContent(message);
};

loginForm.addEventListener('submit', loginFormHandler);