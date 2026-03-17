(function () {
    emailjs.init("4UNzk3xTkVQQDhGww");
})();

const contactForm = document.getElementById('contact-form');
const btn = contactForm.querySelector('button');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add('was-validated');
        return;
    }

    btn.innerText = 'Sending...';

    const serviceID = 'service_0tgz12f'; //
    const templateID = 'template_2je81zz'; //

    const templateParams = {
        name: document.getElementById("from_name").value,
        email: document.getElementById("reply_to").value,
        message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            btn.innerText = 'Send Message';
            alert('Message Sent Successfully! ✅');
            this.reset(); 
            this.classList.remove('was-validated');
        }, (err) => {
            btn.innerText = 'Send Message';
            alert('Failed to send: ' + JSON.stringify(err));
        });
});