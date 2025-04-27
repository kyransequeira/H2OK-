document.getElementById("guestForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const location = document.getElementById("location").value;
    const waterQuality = document.getElementById("waterQuality").value;
    const image = document.getElementById("image").value;

    const formData = {
        location: location,
        waterQuality: waterQuality,
        image: image
    };

    // Send the form data to the server via a POST request
    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Data submitted successfully!");
        document.getElementById("guestForm").reset(); // Reset the form
    })
    .catch(error => {
        alert("There was an error submitting your data.");
    });
});
