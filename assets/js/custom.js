// Custom JavaScript for team member functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Custom.js loaded');

    // Wait for page to fully load then setup click handlers
    setTimeout(function() {
        setupTeamMemberClicks();
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
        'Nana Lin': '/people/nana-lin/'
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
