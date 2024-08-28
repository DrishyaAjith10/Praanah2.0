document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-page]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        });
    });

    const loadPage = (page) => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
                window.history.pushState(null, null, page);
            })
            .catch(error => console.error('Error loading page:', error));
    };
});
