// Function to generate a random password
function generatePassword() {
  // (Existing code for generating password...)
}

// Event listener for the "Generate Password" button
document.getElementById('generate').addEventListener('click', function() {
  // Prompt for password length, character types, and generate password
  generatePassword();
});

// Event listener for the "Enter Password" button
document.getElementById('enter').addEventListener('click', function() {
  // Prompt the user to enter a password manually
  const enteredPassword = prompt("Enter your password:");
  
  // Display the entered password in the textarea
  document.getElementById('password').value = enteredPassword;
});
