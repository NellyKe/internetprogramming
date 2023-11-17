document.addEventListener('DOMContentLoaded', function () {
    const connectText = document.querySelector('.footer-connect');
    const childhoodSection = document.getElementById('childhood-section');
    const toggleChildhoodButton = document.querySelector('.toggle-childhood');

    connectText.addEventListener('click', function () {
        alert('Feel free to connect with me!'); // You can replace this with your desired functionality
    });

    // Toggle childhood section visibility
    window.toggleChildhood = function () {
        childhoodSection.classList.toggle('hidden');
    };

    // Update button text based on section visibility
    childhoodSection.addEventListener('transitionend', function () {
        if (childhoodSection.classList.contains('hidden')) {
            toggleChildhoodButton.textContent = 'Show Childhood Section';
        } else {
            toggleChildhoodButton.textContent = 'Hide Childhood Section';
        }
    });

    // Additional interactivity for Skills and Talents section (you can modify this based on your needs)
    const skillsTalentsSection = document.querySelector('.skills-talents');
    skillsTalentsSection.addEventListener('mouseover', function () {
        skillsTalentsSection.style.backgroundColor = '#eee'; // Change background color on hover
    });

    skillsTalentsSection.addEventListener('mouseout', function () {
        skillsTalentsSection.style.backgroundColor = '#fff'; // Revert background color on mouseout
    });

    // Additional functionality for Future Aspirations section
    const aspirationsSection = document.querySelector('.future-aspirations');
    aspirationsSection.addEventListener('click', function () {
        alert('Dream big! Your aspirations will lead you to great things.'); // You can replace this with your desired functionality
    });

    // Add image toggling functionality
    const sectionsWithImages = document.querySelectorAll('.about-me, .childhood, .education, .advice, .skills-talents, .future-aspirations');
    
    sectionsWithImages.forEach(section => {
        const image = section.querySelector('img');
        if (image) {
            section.addEventListener('click', function () {
                // Toggle image visibility on section click
                image.classList.toggle('hidden');
            });
        }
    });
});
