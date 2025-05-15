function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

function validateForm() {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }
    return true;
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

document.getElementById('survey-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your feedback!');
    this.reset();
});

const viewButtons = document.querySelectorAll('.view-button');
viewButtons.forEach(button => {
    button.addEventListener('click', function () {
        const project = this.parentElement;
        const details = project.querySelector('.project-details');
        if (details) {
            details.remove();
        } else {
            const newDetails = document.createElement('div');
            newDetails.className = 'project-details';
            newDetails.innerHTML = '<p>More details about this project coming soon!</p>';
            project.appendChild(newDetails);
        }
    });
});