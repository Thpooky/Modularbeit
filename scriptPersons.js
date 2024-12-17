// JavaScript code to handle the flip card effect
document.querySelectorAll('.flip-card').forEach(card => { // Select all flip cards
    card.addEventListener('click', () => { // Add event listener to each card
        card.querySelector('.flip-card-inner').classList.toggle('flipped'); // Toggle the flipped class
    });
});
