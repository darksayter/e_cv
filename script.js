// Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for sticky navbar
                behavior: 'smooth'
            });
        }
    });
});

// Add Scroll Effects to Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Contact Form Submission Alert and Email Sending
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        emailjs.send("service_exnwjdf", "template_hhdohs6", {
            from_name: name,
            from_email: email,
            message: message
        }).then(function(response) {
            alert(`Merci, ${name}! Votre message a été envoyé.`);
            document.getElementById('contact-form').reset(); // Clear form fields
        }, function(error) {
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
        });
    } else {
        alert('S\'il vous plaît remplissez tous les champs avant d\'envoyer.');
    }
});


