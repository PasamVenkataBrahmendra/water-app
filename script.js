document.addEventListener("DOMContentLoaded", () => {
    let humidity = 65;
    let temperature = 28;
    let waterLevel = 75;

    // Function to update the dashboard
    function updateDashboard() {
        document.getElementById("humidity").textContent = `${humidity}%`;
        document.getElementById("temperature").textContent = `${temperature}°C`;
        document.getElementById("water-level").textContent = `${waterLevel}%`;

        document.getElementById("humidity-graph").style.width = `${humidity}%`;
        document.getElementById("temperature-graph").style.width = `${temperature}%`;
        document.getElementById("water-level-graph").style.width = `${waterLevel}%`;
    }

    // Simulate sensor updates every 5 seconds
    function simulateSensorUpdates() {
        setInterval(() => {
            humidity = Math.floor(Math.random() * (80 - 60 + 1) + 60);
            temperature = Math.floor(Math.random() * (35 - 25 + 1) + 25);
            waterLevel = Math.floor(Math.random() * (90 - 70 + 1) + 70);
            updateDashboard();
        }, 5000);
    }

    // Toggle the device ON or OFF
    function toggleDevice(isOn) {
        let status = isOn ? "ON" : "OFF";
        alert(`AWH Device turned ${status}`);
    }

    // Handle login form submission
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();  // Prevent form from submitting the default way

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Perform login action (you can add validation here)
        if (email && password) {
            alert(`Login successful for: ${email}`);
            // You can perform additional actions like storing tokens, redirecting, etc.
        } else {
            alert("Please enter both email and password.");
        }
    });

    // Handle signup form submission
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();  // Prevent form from submitting the default way

        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        // Perform signup action (you can add validation here)
        if (username && email && password) {
            alert(`Sign up successful for: ${username}`);
            // You can perform additional actions like saving user data, redirecting, etc.
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Update the dashboard and simulate sensor data
    updateDashboard();
    simulateSensorUpdates();
});
