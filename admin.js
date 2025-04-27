document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the login credentials are correct
    if (username === "admin" && password === "password") {
        // Hide the login form and show the admin panel
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";

        // Fetch the guest data from the server
        fetch("/admin/data")
            .then(response => response.json())
            .then(data => {
                const guestData = data.map(item => {
                    return `Location: ${item.location}\nWater Quality: ${item.waterQuality}\nImage: ${item.image}\n\n`;
                }).join('');
                document.getElementById("guestData").textContent = guestData;
            })
            .catch(error => {
                alert("There was an error fetching the data.");
            });
    } else {
        alert("Invalid username or password.");
    }
});
