document.addEventListener('DOMContentLoaded', function() {
    const facts = {
        cat: "Cats have five toes on their front paws, but only four toes on their back paws.",
        dog: "Dogs' sense of smell is about 100,000 times stronger than humans'.",
        elephant: "Elephants are the largest land animals on Earth.",
        // Add more facts as needed
    };

    const animalCards = document.querySelectorAll('.animal-card');
    const factText = document.getElementById('factText');

    animalCards.forEach(card => {
        card.addEventListener('click', function() {
            const animal = this.getAttribute('data-animal');
            factText.textContent = facts[animal] || "No fact available for this animal.";
        });
    });
});
