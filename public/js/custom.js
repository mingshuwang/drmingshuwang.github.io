// Custom JavaScript for team member functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Custom.js loaded');

    // Wait for page to fully load then setup click handlers
    setTimeout(function() {
        setupTeamMemberClicks();
        removeCopyButtons();
    }, 1000);
});

function setupTeamMemberClicks() {
    console.log('Setting up team member click handlers...');

    // Define URL mappings for team members
    const urlMappings = {
        'Dr. Mingshu Wang': '/people/dr-mingshu-wang/',
        'Yue Li': '/people/yue-li/',
        'Xinyi Yuan': '/people/xinyi-yuan/',
        'Zhiya Xu': '/people/zhiya-xu/',
        'Rui Deng': '/people/rui-deng/',
        'Xinyan Xian': '/people/xinyan-xian/',
        'Cai Wu': '/people/cai-wu/',
        'Heyi Wei': '/people/heyi-wei/',
        'Nana Lin': '/people/nana-lin/',
        'Yue':'/people/Yue/'
    };

    // Find all people-person elements
    const peoplePersons = document.querySelectorAll('.people-person');
    console.log('Found', peoplePersons.length, 'people-person elements');

    peoplePersons.forEach(function(person, index) {
        // Find the name element
        const nameElement = person.querySelector('h2');
        if (nameElement) {
            const name = nameElement.textContent.trim();
            const url = urlMappings[name];
            console.log('Person', index, ':', name, '-> URL:', url);

            if (url) {
                // Make the entire person element clickable
                person.style.cursor = 'pointer';
                person.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

                // Add click handler to the entire person element
                person.addEventListener('click', function(e) {
                    // Don't interfere with social links
                    if (e.target.closest('.social-links')) {
                        return;
                    }

                    console.log('Clicked on', name, 'redirecting to', url);
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = url;
                });

                // Add hover effects
                person.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    if (nameElement) {
                        nameElement.style.color = '#3498db';
                    }
                });

                person.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                    if (nameElement) {
                        nameElement.style.color = '';
                    }
                });

                console.log('Added click handler for', name);
            } else {
                console.log('No URL mapping found for', name);
            }
        } else {
            console.log('No name element found for person', index);
        }
    });

    // Also add click handlers specifically to avatar images
    const avatarImages = document.querySelectorAll('.people-person img.avatar');
    console.log('Found', avatarImages.length, 'avatar images');

    avatarImages.forEach(function(img, index) {
        // Find the person container and name
        const person = img.closest('.people-person');
        if (person) {
            const nameElement = person.querySelector('h2');
            if (nameElement) {
                const name = nameElement.textContent.trim();
                const url = urlMappings[name];

                if (url) {
                    img.style.cursor = 'pointer';
                    img.addEventListener('click', function(e) {
                        console.log('Avatar clicked for', name, 'redirecting to', url);
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = url;
                    });
                    console.log('Added avatar click handler for', name);
                }
            }
        }
    });
}

// Function to remove copy buttons
function removeCopyButtons() {
    console.log('Removing copy buttons...');

    // Remove all copy buttons with various selectors
    const copyButtonSelectors = [
        '.btn-copy-code',
        '.js-copy-cite',
        'button.btn.btn-primary.btn-copy-code',
        '.btn.btn-primary.btn-copy-code'
    ];

    copyButtonSelectors.forEach(function(selector) {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(function(button) {
            button.remove();
        });
        console.log('Removed', buttons.length, 'buttons with selector:', selector);
    });

    // Also observe for dynamically added copy buttons
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // Element node
                    // Check if the added node is a copy button
                    if (node.classList && (node.classList.contains('btn-copy-code') || node.classList.contains('js-copy-cite'))) {
                        node.remove();
                        console.log('Removed dynamically added copy button');
                    }

                    // Check for copy buttons within the added node
                    const copyButtons = node.querySelectorAll && node.querySelectorAll('.btn-copy-code, .js-copy-cite');
                    if (copyButtons) {
                        copyButtons.forEach(function(button) {
                            button.remove();
                            console.log('Removed copy button from dynamically added content');
                        });
                    }
                }
            });
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    console.log('Copy button removal setup complete');
}
