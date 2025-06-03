
const stars = document.querySelectorAll('.star');
const ratingDisplay = document.getElementById('rating');
const reviewInput = document.getElementById('review');
const submitButton = document.getElementById('submit');
const reviewsContainer = document.getElementById('reviews');

let currentRating = 0;

// Add interactivity to stars
stars.forEach((star) => {
    star.addEventListener('click', () => {
        currentRating = star.getAttribute('data-value');
        ratingDisplay.textContent = currentRating;

        // Update star appearance
        stars.forEach((s, index) => {
            if (index < currentRating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

// Handle review submission
submitButton.addEventListener('click', () => {
    const reviewText = reviewInput.value.trim();
    if (currentRating > 0 && reviewText) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p><strong>Anonymous</strong> - <span class="stars-display">${'★'.repeat(currentRating)}${'☆'.repeat(5 - currentRating)}</span></p>
            <p>${reviewText}</p>
        `;
        reviewsContainer.prepend(reviewElement); // Add the review to the top
        reviewInput.value = ''; // Clear the input
        currentRating = 0; // Reset rating
        stars.forEach((s) => s.classList.remove('active'));
        ratingDisplay.textContent = '0';
    } else {
        alert('Please provide a rating and a review!');
    }
});
/* ================================================ */