const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
function createCalendar() {
    const calendar = document.getElementById('calendar');
    const daysInMonth = 30; // Example for a month with 30 days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = day;
        dayDiv.addEventListener('click', function() {
            this.classList.toggle('selected'); // Toggle the selected class
        });
        calendar.appendChild(dayDiv);
    }
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', createCalendar);