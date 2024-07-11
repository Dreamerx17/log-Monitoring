function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "") {
        alert("Username must be filled out");
        return false;
    }
    if (password.trim() === "") {
        alert("Password must be filled out");
        return false;
    }

    // Additional validation checks can be added here

    return true;
}
