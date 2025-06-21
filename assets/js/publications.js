// Publications Search and Filter Functionality
console.log('🚀 Publications script loaded!');

// Simple immediate execution
(function() {
    console.log('🔄 Immediate execution...');
    addPublicationYearsSimple();
})();

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, starting publication enhancements...');

    // Try multiple times to ensure content is loaded
    setTimeout(function() {
        console.log('⏰ First attempt at 500ms...');
        addPublicationYearsSimple();
        initializePublicationsFilter();
    }, 500);

    setTimeout(function() {
        console.log('⏰ Second attempt at 1000ms...');
        addPublicationYearsSimple();
        initializePublicationsFilter();
    }, 1000);

    setTimeout(function() {
        console.log('⏰ Third attempt at 2000ms...');
        addPublicationYearsSimple();
        initializePublicationsFilter();
    }, 2000);

    setTimeout(function() {
        console.log('⏰ Final attempt at 3000ms...');
        addPublicationYearsSimple();
        initializePublicationsFilter();
    }, 3000);
});

// Also try when window loads
window.addEventListener('load', function() {
    console.log('🪟 Window loaded, trying again...');
    setTimeout(function() {
        addPublicationYearsSimple();
    }, 100);
});

function initializePublicationsFilter() {
    console.log('Initializing publications filter...');

    const searchInput = document.getElementById('publication-search');
    const typeFilter = document.getElementById('type-filter');
    const dateFilter = document.getElementById('date-filter');

    console.log('Search input found:', !!searchInput);
    console.log('Type filter found:', !!typeFilter);
    console.log('Date filter found:', !!dateFilter);

    // Find publication items - try multiple selectors
    let publicationItems = document.querySelectorAll('.stream-item, .media, .publication-item');

    // If no items found, try broader selectors
    if (publicationItems.length === 0) {
        publicationItems = document.querySelectorAll('#publications .media, #publications .stream-item, #publications .isotope-item');
    }

    // If still no items, try even broader
    if (publicationItems.length === 0) {
        publicationItems = document.querySelectorAll('[id*="publication"] .media, [class*="publication"] .media');
    }

    // Try to find any div that contains publication content
    if (publicationItems.length === 0) {
        publicationItems = document.querySelectorAll('div[class*="stream"], div[class*="media"], div[class*="article"]');
    }

    // Last resort - find any element that contains publication-like content
    if (publicationItems.length === 0) {
        const allDivs = document.querySelectorAll('div');
        publicationItems = Array.from(allDivs).filter(div => {
            const text = div.textContent || '';
            return text.includes('2021') || text.includes('2022') || text.includes('2023') ||
                   text.includes('2024') || text.includes('2025') || text.includes('Journal') ||
                   text.includes('Conference') || text.includes('Proceedings');
        });
    }

    console.log('Found', publicationItems.length, 'publication items');

    // Log the first few items for debugging
    if (publicationItems.length > 0) {
        console.log('First publication item:', publicationItems[0]);
        console.log('First item classes:', publicationItems[0].className);
        console.log('First item text preview:', (publicationItems[0].textContent || '').substring(0, 100));
    }

    let currentTypeFilter = '*';
    let currentDateFilter = '*';
    let currentSearchTerm = '';

    // Search functionality
    if (searchInput) {
        console.log('Adding search input listener');
        searchInput.addEventListener('input', function(e) {
            currentSearchTerm = e.target.value.toLowerCase();
            console.log('Search term changed to:', currentSearchTerm);
            filterPublications();
        });
    } else {
        console.log('Search input not found!');
    }

    // Type filter functionality
    if (typeFilter) {
        console.log('Adding type filter listener');
        typeFilter.addEventListener('change', function(e) {
            currentTypeFilter = e.target.value;
            console.log('Type filter changed to:', currentTypeFilter);
            filterPublications();
        });
    } else {
        console.log('Type filter not found!');
    }

    // Date filter functionality
    if (dateFilter) {
        console.log('Adding date filter listener');
        dateFilter.addEventListener('change', function(e) {
            currentDateFilter = e.target.value;
            console.log('Date filter changed to:', currentDateFilter);
            filterPublications();
        });
    } else {
        console.log('Date filter not found!');
    }
    
    function filterPublications() {
        console.log('Filtering publications...');
        console.log('Current filters - Search:', currentSearchTerm, 'Type:', currentTypeFilter, 'Date:', currentDateFilter);

        if (publicationItems.length === 0) {
            console.log('No publication items to filter!');
            return;
        }

        let visibleCount = 0;

        publicationItems.forEach((item, index) => {
            const matchesType = matchesTypeFilter(item);
            const matchesDate = matchesDateFilter(item);
            const matchesSearchTerm = matchesSearch(item);
            const shouldShow = matchesType && matchesDate && matchesSearchTerm;

            if (index < 3) { // Log first 3 items for debugging
                console.log(`Item ${index}:`, {
                    matchesType,
                    matchesDate,
                    matchesSearchTerm,
                    shouldShow,
                    text: (item.textContent || '').substring(0, 50)
                });
            }

            if (shouldShow) {
                item.style.display = '';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                visibleCount++;
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
                item.style.transform = 'translateY(-10px)';
            }
        });

        console.log(`Showing ${visibleCount} of ${publicationItems.length} publications`);
    }
    
    function matchesTypeFilter(item) {
        if (currentTypeFilter === '*') return true;

        // Check publication type in various possible locations
        const pubType = item.getAttribute('data-publication-type') ||
                       item.querySelector('[data-publication-type]')?.getAttribute('data-publication-type') ||
                       item.className;

        return pubType && pubType.includes(currentTypeFilter);
    }

    function matchesDateFilter(item) {
        if (currentDateFilter === '*') return true;

        // Extract year from publication date
        const dateText = item.textContent || '';
        const yearMatch = dateText.match(/\b(20\d{2})\b/);

        if (yearMatch) {
            const year = yearMatch[1];
            return year === currentDateFilter;
        }

        // Also check data attributes
        const itemDate = item.getAttribute('data-date') || item.querySelector('[data-date]')?.getAttribute('data-date');
        if (itemDate) {
            return itemDate.includes(currentDateFilter);
        }

        return false;
    }

    function matchesSearch(item) {
        if (!currentSearchTerm) return true;

        const title = item.querySelector('.article-title, .section-subheading, .publication-title, h3, h4')?.textContent?.toLowerCase() || '';
        const authors = item.querySelector('.article-metadata, .stream-meta, .publication-authors')?.textContent?.toLowerCase() || '';
        const abstract = item.querySelector('.article-style, .publication-abstract, .summary-link')?.textContent?.toLowerCase() || '';
        const venue = item.querySelector('.publication-venue')?.textContent?.toLowerCase() || '';

        const searchableText = `${title} ${authors} ${abstract} ${venue}`;
        return searchableText.includes(currentSearchTerm);
    }

    // Add publication type and date data attributes to items for filtering
    function addPublicationTypeAttributes() {
        publicationItems.forEach(item => {
            // Try to extract publication type from various sources
            const titleElement = item.querySelector('.article-title a, .section-subheading a, .publication-title a');
            if (titleElement) {
                const href = titleElement.getAttribute('href');
                if (href) {
                    // Extract publication type from URL or other indicators
                    if (href.includes('journal') || item.textContent.includes('Journal') || item.textContent.includes('Environment and Planning')) {
                        item.setAttribute('data-publication-type', 'article-journal');
                    } else if (href.includes('conference') || item.textContent.includes('Conference') || item.textContent.includes('Proceedings')) {
                        item.setAttribute('data-publication-type', 'paper-conference');
                    } else if (href.includes('preprint') || item.textContent.includes('Preprint') || item.textContent.includes('working paper')) {
                        item.setAttribute('data-publication-type', 'preprint');
                    } else {
                        // Default to journal article if no clear indicator
                        item.setAttribute('data-publication-type', 'article-journal');
                    }
                }
            }

            // Extract and set date attribute
            const itemText = item.textContent || '';
            const yearMatch = itemText.match(/\b(20\d{2})\b/);
            if (yearMatch) {
                item.setAttribute('data-date', yearMatch[1]);
            }
        });
    }

    // Initialize
    addPublicationTypeAttributes();

    // Add smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .stream-item, .media, .publication-item {
            transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        .stream-item:hover, .media:hover, .publication-item:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
        }

        .publications-controls {
            margin-bottom: 2rem !important;
        }

        .publication-year {
            display: inline-block;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white !important;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.9rem !important;
            font-weight: 600 !important;
            margin-right: 1rem !important;
            box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        }

        .article-metadata {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
        }

        .article-metadata .middot-divider {
            margin: 0 0.5rem;
        }

        .stream-item .article-title {
            margin-bottom: 0.75rem !important;
        }

        .stream-item .article-title a {
            color: #2c3e50 !important;
            text-decoration: none;
            font-weight: 600;
        }

        .stream-item .article-title a:hover {
            color: #667eea !important;
        }
    `;
    document.head.appendChild(style);
}

// Function to add publication years
function addPublicationYears() {
    console.log('=== Starting addPublicationYears function ===');

    // First, let's see what elements we can find
    const allDivs = document.querySelectorAll('div');
    console.log('Total divs found:', allDivs.length);

    const streamItems = document.querySelectorAll('.stream-item');
    console.log('Stream items found:', streamItems.length);

    const mediaItems = document.querySelectorAll('.media');
    console.log('Media items found:', mediaItems.length);

    const isotopeItems = document.querySelectorAll('.isotope-item');
    console.log('Isotope items found:', isotopeItems.length);

    // Publication year mapping based on folder names and dates
    const publicationYears = {
        // 2025 publications
        'geoaggregator': '2025',
        'land-use-conflict': '2025',
        'glasgow-traffic-data': '2025',
        'shrinking-cities-china': '2025',
        'construction-demolition-england': '2025',
        'solar-radiation-plants': '2025',
        'urban-pattern-language': '2025',
        'conference-paper': '2025',

        // 2024 publications
        'covid-traffic-glasgow': '2024',
        'singapore-polycentricity': '2024',
        'preprint': '2024',

        // 2023 publications
        'glasgow-urban-agriculture': '2023',
        'covid-mass-gatherings-2023': '2023',
        'ai-society-culture-cycle-2023': '2023',
        'shanghai-polycentric-sentinel-2023': '2023',
        'urban-traffic-big-data-gisruk-2023': '2023',
        'air-pollutant-industrial-regions-2023': '2023',

        // 2022 publications
        'ridesharing-accessibility': '2022',
        'land-use-regulations-transit-2022': '2022',
        'urban-expansion-income-gap-2022': '2022',
        'hierarchical-spatial-partitioning-2022': '2022',
        'horn-africa-connectivity-2022': '2022',
        'traffic-flows-deep-learning-isprs-2022': '2022',
        'taxi-ridership-spillover-2022': '2022',
        'heritage-vitality-morphology-2022': '2022',

        // 2021 publications
        'urban-morphology-traffic': '2021',
        'street-view-vitality': '2021',
        'journal-article': '2021',
        'urban-parks-access-gis-2021': '2021',
        'polycentric-urban-amenities-2021': '2021',
        'covid-built-environment': '2021',
        'polycentric-balance-centers': '2021',
        'urban-spatial-structure-simulation': '2021',

        // 2020 publications
        'covid-fighting-planning-2020': '2020',
        'urban-form-carbon-emissions-2020': '2020',
        'road-network-ridesharing': '2020',
        'urbanization-income-gap': '2020',

        // 2019 publications
        'polycentric-economic-productivity-2019': '2019',
        'bike-sharing-taxi-choice-2019': '2019',
        'rfid-noise-mitigation-2019': '2019',
        'hotel-travel-distance-satisfaction-2019': '2019',
        'hotel-reviews-satisfaction-2019': '2019',
        'remote-sensing-manual-2019': '2019',

        // 2018 publications
        'scale-integration-book-review-2018': '2018',
        'polycentric-china-multiscale-2018': '2018',
        'hotel-sleep-quality-2018': '2018',
        'gnss-rfid-collaboration-2018': '2018',
        'tourist-local-interactions-2018': '2018',
        'uber-accessibility-atlanta-2018': '2018',
        'iot-geospatial-guest-editor-2018': '2018',

        // 2017 publications
        'urban-forms-co2-emissions-2017': '2017',
        'co2-emission-data-comparison-2017': '2017',
        'travel-planning-crowdsourcing-2017': '2017',
        'mangrove-biomass-modeling-2017': '2017',
        'big-data-human-movement-2017': '2017',
        'bikesharing-congestion': '2017',

        // 2016 publications
        'location-book-review-2016': '2016',
        'cannabis-crowdsourcing-2016': '2016',
        'hotel-reviews-geography-2016': '2016',
        'cybergis-marketing-2016': '2016',
        'pesticide-visualization-2016': '2016',
        'university-transit-trips-2016': '2016',
        'polycentric-china-318cities': '2016',

        // 2015 publications
        'urban-monitoring-book-review-2015': '2015',
        'ecohealth-geography-2015': '2015',
        'sunda-banda-seascape-2015': '2015',

        // 2014 publications
        'wetlands-geomorphology-2014': '2014',

        // 2012 publications
        'development-zone-cloud-models-2012': '2012'
    };

    // Find all publication items using multiple strategies
    let publicationItems = [];

    // Strategy 1: Look for common publication containers
    let items1 = document.querySelectorAll('.stream-item, .media, .publication-item, .isotope-item');
    console.log('Strategy 1 - Common containers:', items1.length);

    // Strategy 2: Look for any div that contains publication links
    let items2 = document.querySelectorAll('div');
    items2 = Array.from(items2).filter(div => {
        const links = div.querySelectorAll('a[href*="/publication/"]');
        return links.length > 0;
    });
    console.log('Strategy 2 - Divs with publication links:', items2.length);

    // Strategy 3: Look for divs that contain typical publication text
    let items3 = document.querySelectorAll('div');
    items3 = Array.from(items3).filter(div => {
        const text = div.textContent || '';
        return text.includes('Dr. Mingshu Wang') || text.includes('Mingshu Wang') ||
               (text.includes('DOI') && text.length > 100 && text.length < 1000);
    });
    console.log('Strategy 3 - Divs with publication-like content:', items3.length);

    // Use the strategy that found the most items
    if (items1.length > 0) {
        publicationItems = items1;
        console.log('Using strategy 1 (common containers)');
    } else if (items2.length > 0) {
        publicationItems = items2;
        console.log('Using strategy 2 (publication links)');
    } else if (items3.length > 0) {
        publicationItems = items3;
        console.log('Using strategy 3 (publication content)');
    } else {
        console.log('No publication items found with any strategy!');
        return;
    }

    console.log('Final selection: Found', publicationItems.length, 'publication items for year display');

    publicationItems.forEach(function(item, index) {
        // Skip if year badge already exists
        if (item.querySelector('.publication-year-badge')) {
            return;
        }

        // Try to find the publication slug from the link
        let year = null;

        // Method 1: Extract from publication link
        const titleLink = item.querySelector('.article-title a, .section-subheading a, h3 a, h4 a, h5 a');
        if (titleLink) {
            const href = titleLink.getAttribute('href');
            console.log('Publication', index, 'href:', href);

            // Extract slug from URL
            if (href && href.includes('/publication/')) {
                const slugMatch = href.match(/\/publication\/([^\/]+)\//);
                if (slugMatch) {
                    const slug = slugMatch[1];
                    console.log('Publication slug:', slug);
                    year = publicationYears[slug];
                    console.log('Found year for slug', slug, ':', year);
                }
            }
        }

        // Method 2: Extract year from text content if not found in mapping
        if (!year) {
            const itemText = item.textContent || '';
            // Look for years in the format (2024), 2024, or other patterns
            const yearMatches = itemText.match(/\b(20\d{2})\b/g);
            if (yearMatches && yearMatches.length > 0) {
                // Take the most recent year found
                year = yearMatches.sort().reverse()[0];
                console.log('Extracted year from text:', year, 'from matches:', yearMatches);
            }
        }

        // Method 3: Extract from date metadata
        if (!year) {
            const dateElement = item.querySelector('[datetime], .article-date, .stream-meta, .article-metadata');
            if (dateElement) {
                const dateText = dateElement.textContent || dateElement.getAttribute('datetime') || '';
                const yearMatch = dateText.match(/\b(20\d{2})\b/);
                if (yearMatch) {
                    year = yearMatch[1];
                    console.log('Extracted year from date element:', year);
                }
            }
        }

        // Method 4: Default to current year if still not found
        if (!year) {
            year = '2024'; // Default fallback
            console.log('Using default year:', year);
        }

        if (year) {
            console.log('=== Adding year badge', year, 'to publication', index, '===');

            // Create year badge with very simple styling
            const yearBadge = document.createElement('div');
            yearBadge.className = 'publication-year-badge';
            yearBadge.textContent = year;
            yearBadge.style.cssText = `
                display: inline-block !important;
                background: #667eea !important;
                color: white !important;
                padding: 4px 12px !important;
                border-radius: 15px !important;
                font-size: 14px !important;
                font-weight: bold !important;
                margin: 0 10px 10px 0 !important;
                position: relative !important;
                z-index: 1000 !important;
            `;

            // Very simple insertion - just put it at the very beginning
            try {
                item.insertBefore(yearBadge, item.firstChild);
                console.log('✅ Successfully inserted year badge for publication', index);
            } catch (error) {
                console.error('❌ Error inserting year badge:', error);
                // Try alternative method
                try {
                    item.appendChild(yearBadge);
                    console.log('✅ Successfully appended year badge for publication', index);
                } catch (error2) {
                    console.error('❌ Error appending year badge:', error2);
                }
            }
        } else {
            console.log('❌ No year found for publication', index);
        }
    });
}

// Simplified function to add publication years
function addPublicationYearsSimple() {
    console.log('🎯 === Starting SIMPLE addPublicationYears function ===');

    // Find ALL divs and check each one
    const allElements = document.querySelectorAll('*');
    console.log('🔍 Total elements found:', allElements.length);

    let publicationCount = 0;

    // Look for elements that contain publication links
    allElements.forEach(function(element, index) {
        // Check if this element contains a publication link
        const pubLinks = element.querySelectorAll('a[href*="/publication/"]');

        if (pubLinks.length > 0 && !element.querySelector('.publication-year-badge')) {
            publicationCount++;
            console.log(`📝 Found publication ${publicationCount} at element ${index}`);

            // Extract year from the first publication link
            const firstLink = pubLinks[0];
            const href = firstLink.getAttribute('href');
            console.log('🔗 Publication link:', href);

            let year = '2024'; // Default

            // Try to extract year from URL
            if (href) {
                if (href.includes('2025')) year = '2025';
                else if (href.includes('2024')) year = '2024';
                else if (href.includes('2023')) year = '2023';
                else if (href.includes('2022')) year = '2022';
                else if (href.includes('2021')) year = '2021';
                else if (href.includes('2020')) year = '2020';
                else if (href.includes('2019')) year = '2019';
                else if (href.includes('2018')) year = '2018';
                else if (href.includes('2017')) year = '2017';
                else if (href.includes('2016')) year = '2016';
                else if (href.includes('2015')) year = '2015';
                else if (href.includes('2014')) year = '2014';
                else if (href.includes('2012')) year = '2012';

                // Also check specific publication slugs
                if (href.includes('geoaggregator') || href.includes('land-use-conflict') ||
                    href.includes('construction-demolition') || href.includes('solar-radiation') ||
                    href.includes('urban-pattern-language')) {
                    year = '2025';
                } else if (href.includes('covid-traffic-glasgow') || href.includes('singapore-polycentricity')) {
                    year = '2024';
                } else if (href.includes('glasgow-urban-agriculture') || href.includes('covid-mass-gatherings') ||
                          href.includes('ai-society-culture') || href.includes('shanghai-polycentric') ||
                          href.includes('air-pollutant-industrial')) {
                    year = '2023';
                }
            }

            console.log(`📅 Determined year: ${year} for publication ${publicationCount}`);

            // Create a very simple year badge
            const yearBadge = document.createElement('span');
            yearBadge.className = 'publication-year-badge';
            yearBadge.textContent = year;
            yearBadge.style.cssText = `
                background: #4285f4 !important;
                color: white !important;
                padding: 3px 8px !important;
                border-radius: 10px !important;
                font-size: 12px !important;
                font-weight: bold !important;
                margin-right: 8px !important;
                display: inline-block !important;
                position: relative !important;
                top: -1px !important;
            `;

            // Insert the badge at the very beginning of the element
            try {
                element.insertBefore(yearBadge, element.firstChild);
                console.log(`✅ Successfully added year badge ${year} to publication ${publicationCount}`);
            } catch (error) {
                console.log(`❌ Failed to add year badge: ${error.message}`);
            }
        }
    });

    console.log(`🎉 Finished processing. Found ${publicationCount} publications.`);
}
