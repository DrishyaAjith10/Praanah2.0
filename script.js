// script.js

document.addEventListener('DOMContentLoaded', () => {
    const donateForm = document.getElementById('donate-form');
    const requestForm = document.getElementById('request-form');

    donateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your donation!');
        donateForm.reset();
    });

    requestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your blood request has been submitted!');
        requestForm.reset();
    });
});
