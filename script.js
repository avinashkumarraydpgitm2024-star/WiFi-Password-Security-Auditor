function checkPassword() {

    let password = document.getElementById("password").value;

    let score = 0;

    if (password.length >= 8) score += 20;
    if (/[A-Z]/.test(password)) score += 20;
    if (/[a-z]/.test(password)) score += 20;
    if (/[0-9]/.test(password)) score += 20;
    if (/[^A-Za-z0-9]/.test(password)) score += 20;

    let strength = "";
    let recommendation = "";

    const commonPasswords = [
        "password",
        "12345678",
        "qwerty",
        "admin",
        "password123"
    ];

    if (commonPasswords.includes(password.toLowerCase())) {
        strength = "🔴 Very Weak";
        score = 0;
        recommendation = "Avoid common passwords. Use a unique Wi-Fi password.";
    }
    else if (score <= 40) {
        strength = "🔴 Weak";
        recommendation = "Add uppercase letters, numbers and symbols.";
    }
    else if (score <= 80) {
        strength = "🟡 Medium";
        recommendation = "Improve password complexity for better security.";
    }
    else {
        strength = "🟢 Strong";
        recommendation = "Excellent! Your Wi-Fi password is secure.";
    }

    document.getElementById("result").innerHTML =
        "Password Strength: " + strength;

    document.getElementById("score").innerHTML =
        "Security Score: " + score + "/100";

    document.getElementById("recommendation").innerHTML =
        recommendation;

    let bar = document.getElementById("progress-bar");

    bar.style.width = score + "%";

    if(score <= 40){
        bar.style.background = "red";
    }
    else if(score <= 80){
        bar.style.background = "orange";
    }
    else{
        bar.style.background = "green";
    }
}
