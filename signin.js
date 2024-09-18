document.getElementById("signinBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    var username = document.getElementById("email").value;
    
    // Perform validation or any other necessary login logic here
    // Example validation: check if both fields are filled
    if (email === "") {
        alert("Please fill this fields.");
        return;
    }

    // If validation passes, you can proceed with login
    // Example: redirect to a dashboard page
    window.location.href = "signin.html";
});