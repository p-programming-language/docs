const installingLink = document.querySelector('ul li a[href*="#installing"]');
const pintFirstLink = document.querySelector('ul li a[href*="#pint-first-time"]');

if (installingLink) {
    const currentURL = window.location.href;
    if (currentURL.includes('getting-started.html#installing')) {
        installingLink.classList.add('currentSub');
    } else if (currentURL.includes('getting-started.html#pint-first-time')) {
        installingLink.classList.add('currentSub');
    }
}