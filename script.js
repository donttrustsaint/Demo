// script.js
// This file will contain JavaScript for interactive elements if needed.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            // For example, using Fetch API to send data to a server
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            // Replace with actual submission logic
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // You can add more JavaScript functionalities here as the website develops.
    // For example, handling popups, sliders, or dynamic content loading.

    // Header Dropdown Functionality
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropbtn && dropdownContent) {
        dropbtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            // Toggle a class to show/hide, or directly manipulate display
            // Using a class is often cleaner for CSS animations/transitions
            dropdownContent.classList.toggle('show');
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (!event.target.matches('.dropbtn')) {
                if (dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                }
            }
        });
    }

    // FAQ Accordion Functionality (Optional, but good for UX)
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parentItem = item.parentElement;
            parentItem.classList.toggle('active');
            const answer = parentItem.querySelector('p');
            if (parentItem.classList.contains('active')) {
                answer.style.display = 'block'; // Or use max-height for animation
            } else {
                answer.style.display = 'none'; // Or use max-height for animation
            }
        });
        // Initially hide answers if not active
        if (!item.parentElement.classList.contains('active')) {
            item.parentElement.querySelector('p').style.display = 'none';
        }
    });
});
