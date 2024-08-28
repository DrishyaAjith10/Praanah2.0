document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const content = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                const newContent = document.createElement('div');
                newContent.innerHTML = html;

                // Remove existing content
                content.classList.add('fade');
                setTimeout(() => {
                    content.innerHTML = newContent.querySelector('section').outerHTML;
                    content.classList.remove('fade');
                    content.classList.add('fade', 'in');
                }, 500);
            })
            .catch(err => console.error('Error loading page:', err));
    }

    // Load the initial page
    loadPage('index.html');
});
