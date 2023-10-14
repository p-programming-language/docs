const installingLink = document.querySelector('ul li a[href*="#installing"]');

if (installingLink) {
    const currentURL = window.location.href;
    if (currentURL.includes('getting-started.html#installing')) {
        installingLink.classList.add('currentSub');
    } else if (currentURL.includes('getting-started.html#pint-first-time')) {
        installingLink.classList.add('currentSub');
    }
}