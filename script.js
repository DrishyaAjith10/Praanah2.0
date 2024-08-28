document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a[data-page]');
    const content = document.getElementById('content');

    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                content.innerHTML = html;
                window.history.pushState({}, '', url);
            })
            .catch(err => console.warn('Error loading page:', err));
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        });
    });

    window.addEventListener('popstate', () => {
        loadPage(window.location.pathname);
    });

    // Load the home page initially
    loadPage('index.html');
});
