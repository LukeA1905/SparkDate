document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the selected date of birth
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);

    // Calculate the age
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    // Check if the user is under 18
    if (age < 18) {
        const ageError = document.getElementById('age-error');
        ageError.textContent = "You must be 18 or older to sign up for SparkDate.";
        dobInput.focus(); // Set focus to the date of birth field
        return false; // Prevent form submission
    }

    // If the user is 18 or older, the form will submit
    this.submit();
});
