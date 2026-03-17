// Basic JavaScript for NASA website
console.log("Welcome to NASA's website!");

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            alert('You clicked on ' + this.id);
        });
    });
});