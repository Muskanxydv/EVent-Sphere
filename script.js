document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', () => {
        const eventId = button.getAttribute('data-event-id');
        window.location.href = `details.html?event=${eventId}`;
    });
}); 

document.addEventListener("DOMContentLoaded", () => {
    const bookNowButton = document.getElementById("book-now-button");
    const bookingModal = document.getElementById("booking-modal");
    const closeModal = document.getElementById("close-modal");
    const bookingForm = document.getElementById("bookingForm");
    const responseMessage = document.getElementById("responseMessage");

    bookNowButton.addEventListener("click", () => {
        bookingModal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
        bookingModal.classList.add("hidden");
    });

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const quantity = formData.get("quantity");

        setTimeout(() => {
            if (name && email && quantity > 0) {
                responseMessage.textContent = `Booking confirmed for ${quantity} ticket(s). Thank you, ${name}!`;
                responseMessage.className = "success";
            } else {
                responseMessage.textContent = "Please fill in all the details correctly.";
                responseMessage.className = "error";
            }
            responseMessage.classList.remove("hidden");
        }, 500);

        setTimeout(() => {
            bookingModal.classList.add("hidden");
        }, 2000);
    });
});
