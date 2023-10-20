const sidebarItems = [
    { text: 'Introduction', href: 'index.html' },
    { text: 'Getting Started', href: 'getting-started.html', subitems: [
        { text: 'Installing', href: 'getting-started.html#installing' },
        { text: 'Running pint for the first time', href: 'getting-started.html#pint-first-time' },
        { text: 'Your very first P program!', href: 'getting-started.html#first-program' }
    ] },
    { text: 'Variables', href: 'variables.html', subitems: [
        { text: 'Defining Variables', href: 'variables.html#defining-variables' },
        { text: 'Using Variables', href: 'variables.html#using-variables' }
    ] },
    { text: 'Function', href: 'functions.html', subitems: [
        { text: 'Defining Functions', href: 'functions.html#defining-functions' },
        { text: 'Using Functions', href: 'functions.html#using-functions' }
    ] },
    { text: 'Examples', href: 'examples.html', subitems: [
        { text: 'Fizz Buzz', href: 'examples.html#fizz-buzz' },
        { text: 'Simple HTTP Server', href: 'examples.html#http-server' },
        { text: 'Simple HTTP Request', href: 'examples.html#http-request' }
    ] },
    { text: 'Intrinsics Libraries', href: 'intrinsics-libs.html', subitems: [
        { text: "Getting Started", href: 'intrinsics-libs.html#getting-started' }
    ] }
];

function generateSidebar() {
    const sidebar = document.querySelector('.side-bar ul');
    
    sidebarItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        
        if (item.subitems) {
            const subul = document.createElement('ul');
            item.subitems.forEach(subitem => {
                const subli = document.createElement('li');
                const suba = document.createElement('a');
                suba.textContent = subitem.text;
                suba.href = subitem.href;
                subli.appendChild(suba);
                subul.appendChild(subli);
            });
            li.appendChild(subul);
        }
        
        sidebar.appendChild(li);
    });
}

// Call the function to generate the sidebar
generateSidebar();
