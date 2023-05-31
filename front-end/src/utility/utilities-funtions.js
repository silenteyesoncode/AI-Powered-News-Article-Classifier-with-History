const handleSubmit = (event) => {
  event.preventDefault();
  console.log(email, password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log('User signed in:', user);
    })
    .catch((error) => {
      console.log('Error signing in:', error);
      // Handle sign in error if needed
    });
};

export {
  handleSubmit
}