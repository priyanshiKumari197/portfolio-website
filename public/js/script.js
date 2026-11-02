
(function () {
    emailjs.init("4UNzk3xTkVQQDhGww");
})();

const contactForm = document.getElementById('contact-form');

if (contactForm) {

    const btn = contactForm.querySelector('button');

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        if (!this.checkValidity()) {
            event.stopPropagation();
            this.classList.add('was-validated');
            return;
        }

        btn.disabled = true;
        btn.innerText = 'Sending...';

        const templateParams = {
            from_name: document.getElementById("from_name").value,
            reply_to: document.getElementById("reply_to").value,
            message: document.getElementById("message").value
        };

        emailjs.send(
            'service_0tgz12f',
            'template_2je81zz',
            templateParams
        )
        .then(() => {

            alert('Message Sent Successfully! ❤️');

            contactForm.reset();
            contactForm.classList.remove('was-validated');

        })
        .catch((err) => {

            console.error("EmailJS Error:", err);

            alert('Failed to send: ' + (err.text || JSON.stringify(err)));

        })
        .finally(() => {

            btn.disabled = false;
            btn.innerText = 'Send Message';

        });

    });
}
