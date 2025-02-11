// Initialize EmailJS with your public key
emailjs.init('jvW4Hbn5wKUzxAWL-');

function initializeContact() {
  const form = document.getElementById('contact-form');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    clearMessages();

    if (!validateName(name)) {
      displayMessage('Name should only contain letters and spaces (2-50 characters).', 'text-red-600');
      return;
    }

    if (!validateEmail(email)) {
      displayMessage('Please enter a valid email address.', 'text-red-600');
      return;
    }

    if (subject.length > 100) {
      displayMessage('Subject must not exceed 100 characters.', 'text-red-600');
      return;
    }

    if (message.length < 10) {
      displayMessage('Message must contain at least 10 characters.', 'text-red-600');
      return;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = `Processing... <i class="loading-spinner"></i>`;

    const processingMessage = document.createElement('p');
    processingMessage.className = 'text-blue-600 text-center mt-4';
    processingMessage.textContent = 'We are trying!';
    form.appendChild(processingMessage);

    try {
      const response = await emailjs.sendForm('service_j2ajr9c', 'template_djbv64i', form);

      if (response.status === 200) {
        processingMessage.remove();
        displayMessage('Message sent successfully!', 'text-green-600');
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      processingMessage.remove();
      displayMessage('Failed to send message. Please try again.', 'text-red-600');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send Message';
    }
  });
}

// Function to display messages
function displayMessage(message, messageClass) {
  const messageBox = document.createElement('p');
  messageBox.className = `text-center mt-4 ${messageClass}`;
  messageBox.textContent = message;
  const form = document.getElementById('contact-form');
  form.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 3000);
}

// Function to clear existing messages
function clearMessages() {
  const existingMessages = document.querySelectorAll('.text-center');
  existingMessages.forEach(msg => msg.remove());
}

// Function to validate name: Only letters and spaces, 2-50 characters
function validateName(name) {
  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  return nameRegex.test(name);
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContact);