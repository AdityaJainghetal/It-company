function changePassword() {
    let username = document.getElementById("email").value;
    let previousPassword = document.getElementById("pass").value;
    let newPassword = document.getElementById("Re-password").value; // Get the value of new password input

    let storedPassword = localStorage.getItem("password");
    let storedUserEmail = localStorage.getItem("email");

    if (previousPassword === storedPassword && username === storedUserEmail) {
        alert("Password changed successfully!");
        localStorage.setItem("password", newPassword);

        window.location.href = "index.html";
    } else {
        alert("Incorrect username or password.");
    }
}
