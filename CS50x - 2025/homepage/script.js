document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Simulating a fake email send with a delay
    setTimeout(() => {
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("contactForm").reset();
    }, 1000); // Fake delay to simulate email sending
});
