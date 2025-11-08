document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            document.querySelectorAll('input, textarea, select').forEach(el => el.classList.remove('error'));

            // Name check
            if (name.value.trim().length < 3) {
                showError(name, 'nameError', 'Full Name must be at least 3 characters');
                isValid = false;
            }

            // Email check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                showError(email, 'emailError', 'Please enter a valid email address');
                isValid = false;
            }

            // Subject check
            if (subject.value === '') {
                showError(subject, 'subjectError', 'Please choose a subject');
                isValid = false;
            }

            // Message check
            if (message.value.trim().length < 10) {
                showError(message, 'messageError', 'Message must be at least 10 characters');
                isValid = false;
            }

            // KVKK check
            const kvkk = document.getElementById('kvkk');
            if (!kvkk.checked) {
                showError(kvkk, 'kvkkError', 'You must agree to the Privacy Policy');
                isValid = false;
            }

            if (isValid) {
                // Form success
                showSuccessNotification('Your message has been sent! We will get back to you soon.');
                form.reset();
            }
        });

    function showError(input, errorId, message) {
        input.classList.add('error');
        document.getElementById(errorId).textContent = message;
    }

    function showSuccessNotification(message) {
        // Remove existing notifications
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = 'toast-notification';
        notification.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">✅</span>
                <span class="toast-message">${message}</span>
            </div>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--success, #10b981);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 1000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Realtime validation
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.value.trim().length >= 3) {
                this.classList.remove('error');
                document.getElementById('nameError').textContent = '';
            }
        });
    }

    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(this.value)) {
                this.classList.remove('error');
                document.getElementById('emailError').textContent = '';
            }
        });
    }

    const subjectInput = document.getElementById('subject');
    if (subjectInput) {
        subjectInput.addEventListener('change', function() {
            if (this.value !== '') {
                this.classList.remove('error');
                document.getElementById('subjectError').textContent = '';
            }
        });
    }

    const messageInput = document.getElementById('message');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            if (this.value.trim().length >= 10) {
                this.classList.remove('error');
                document.getElementById('messageError').textContent = '';
            }
        });
    }

    // Animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
});