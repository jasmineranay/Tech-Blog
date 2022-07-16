const signupForm = document.querySelector('#signup-form');

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const user_email = document.querySelector('#email-signup').value.trim();
  const user_password = document.querySelector('#password-signup').value.trim();

  // Check all form variables
  if (username && user_email && user_password) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          user_email,
          user_password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      const dbMessage = await response.json();

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
        textContent: dbMessage,
        appendTo: signupForm,
      };
      return appendContent(message);
    } catch (err) {
      console.log(err);
    }
  }
  // If one of the form variables is undefined continue here.
  const checkMessage = document.querySelector('.invalid-auth');

  if (checkMessage) {
    checkMessage.remove();
  }

  const message = {
    tag: 'p',
    setAttr: {
      class: 'invalid-auth',
    },
    textContent: 'You must fill out the entire form!',
    appendTo: signupForm,
  };
  appendContent(message);
};

signupForm.addEventListener('submit', signupFormHandler);