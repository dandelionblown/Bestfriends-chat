// Import Firebase SDK
document.write('<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"><\/script>');
document.write('<script src="firebase-config.js"><\/script>');

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert('Signup successful!');
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          alert('Signup error: ' + error.message);
        });
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert('Login successful!');
          window.location.href = 'dashboard.html';
        })
        .catch((error) => {
          alert('Login error: ' + error.message);
        });
    });
  }
});
