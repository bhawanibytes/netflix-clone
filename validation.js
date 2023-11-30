function submitForm() {
    // Get values from the form
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    // Validate against predefined values
    if (
        (enteredUsername === "bhawanibytes@gmail.com" || enteredUsername === "akashrajbytes@gmail.com") &&
        enteredPassword === "wewillrock"
    ) {
        // Form will submit to "index.html" due to the form's action attribute
        return true;
    } else {
        // Display an error message
        alert("Invalid username or password. Please try again.");
        return false; // Prevents the form from submitting via traditional means
    }
}