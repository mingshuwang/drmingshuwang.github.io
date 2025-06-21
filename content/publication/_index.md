---
title: Publications
cms_exclude: true
date: 2022-10-24
type: landing

design:
  spacing: "6rem 0"

sections:
  - block: markdown
    content:
      title: "Publications"
      text: ""


    design:
      columns: 1
      spacing:
        padding: ['2rem', '0', '1rem', '0']

  - block: markdown
    content:
      text: |
        <style>
        .publications-search-controls {
          max-width: 800px;
          margin: 0 auto -2rem auto;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .search-filters-row {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .search-input-container {
          flex: 2;
          min-width: 250px;
        }

        .filter-select-container {
          flex: 1;
          min-width: 120px;
        }

        .search-input, .filter-select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 0.95rem;
          background: white;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .search-input:focus, .filter-select:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
        }

        .search-input::placeholder {
          color: #6c757d;
        }

        .filter-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.75rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }

        @media (max-width: 768px) {
          .search-filters-row {
            flex-direction: column;
          }

          .search-input-container,
          .filter-select-container {
            width: 100%;
            min-width: unset;
          }
        }
        </style>

        <div class="publications-search-controls">
          <div class="search-filters-row">
            <div class="search-input-container">
              <input type="text" id="publication-search" class="search-input" placeholder="Search publications...">
            </div>
            <div class="filter-select-container">
              <select id="type-filter" class="filter-select">
                <option value="*">All Types</option>
                <option value="article-journal">Journal Articles</option>
                <option value="paper-conference">Conference Papers</option>
                <option value="preprint">Preprints</option>
              </select>
            </div>
            <div class="filter-select-container">
              <select id="date-filter" class="filter-select">
                <option value="*">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
              </select>
            </div>
          </div>
        </div>

        <script>
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Publications search script loaded');

            setTimeout(function() {
                initPublicationSearch();
                removeYearBadges();
            }, 1000);

            // Also run periodically to catch dynamically added elements
            setInterval(removeYearBadges, 2000);
        });

        function initPublicationSearch() {
            const searchInput = document.getElementById('publication-search');
            const typeFilter = document.getElementById('type-filter');
            const dateFilter = document.getElementById('date-filter');

            console.log('Search elements:', {
                searchInput: !!searchInput,
                typeFilter: !!typeFilter,
                dateFilter: !!dateFilter
            });

            // Find publication items - try multiple strategies
            let items = [];

            // Strategy 1: Look for common publication container classes
            items = document.querySelectorAll('.stream-item, .media, .publication-item, .article-item');

            // Strategy 2: Look for elements with publication-like content
            if (items.length === 0) {
                items = document.querySelectorAll('[class*="stream"], [class*="media"], [class*="article"]');
            }

            // Strategy 3: Look for divs that contain DOI links or publication years
            if (items.length === 0) {
                const allDivs = document.querySelectorAll('div');
                items = Array.from(allDivs).filter(div => {
                    const text = div.textContent || '';
                    const hasYear = /\b(201\d|202\d)\b/.test(text);
                    const hasDOI = text.includes('DOI') || text.includes('doi.org');
                    const hasPublication = text.includes('Journal') || text.includes('Conference') || text.includes('Proceedings');
                    const hasAuthor = text.includes('Dr.') || text.includes('Mingshu Wang');

                    return (hasYear && (hasDOI || hasPublication || hasAuthor)) && text.length > 100;
                });
            }

            // Strategy 4: Look for any element that contains publication titles
            if (items.length === 0) {
                const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .title, [class*="title"]');
                items = Array.from(titleElements).map(title => {
                    // Find the parent container that likely contains the full publication info
                    let parent = title.parentElement;
                    while (parent && parent.textContent.length < 200) {
                        parent = parent.parentElement;
                    }
                    return parent || title;
                }).filter(item => item && item.textContent.length > 100);

                // Remove duplicates
                items = [...new Set(items)];
            }

            console.log('Found', items.length, 'publication items');

            let currentSearch = '';
            let currentType = '*';
            let currentDate = '*';

            function filterItems() {
                console.log('Filtering with:', { currentSearch, currentType, currentDate });

                let visibleCount = 0;
                items.forEach((item, index) => {
                    const text = (item.textContent || '').toLowerCase();

                    const matchesSearch = !currentSearch || text.includes(currentSearch);

                    const matchesType = currentType === '*' ||
                        (currentType === 'article-journal' && (text.includes('journal') || text.includes('environment') || text.includes('habitat') || text.includes('cities') || text.includes('planning'))) ||
                        (currentType === 'paper-conference' && (text.includes('conference') || text.includes('proceedings'))) ||
                        (currentType === 'preprint' && (text.includes('preprint') || text.includes('working paper')));

                    // Improved date matching - look for year patterns
                    let matchesDate = currentDate === '*';
                    if (!matchesDate && currentDate !== '*') {
                        // Look for the year in various formats
                        const yearPatterns = [
                            new RegExp('\\b' + currentDate + '\\b'),  // Exact year match
                            new RegExp(currentDate + '-'),            // Year with dash (2021-01-01)
                            new RegExp('/' + currentDate + '/'),      // Year with slashes
                            new RegExp(',' + currentDate),            // Year after comma
                            new RegExp(currentDate + ','),            // Year before comma
                        ];

                        matchesDate = yearPatterns.some(pattern => pattern.test(text));

                        // Also check if the item's href contains the year
                        const links = item.querySelectorAll('a[href*="' + currentDate + '"]');
                        if (links.length > 0) {
                            matchesDate = true;
                        }
                    }

                    const shouldShow = matchesSearch && matchesType && matchesDate;

                    // Debug first few items
                    if (index < 3) {
                        console.log(`Item ${index}:`, {
                            text: text.substring(0, 100),
                            matchesSearch,
                            matchesType,
                            matchesDate,
                            shouldShow,
                            currentFilters: { currentSearch, currentType, currentDate }
                        });
                    }

                    if (shouldShow) {
                        item.style.display = '';
                        item.style.opacity = '1';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                        item.style.opacity = '0';
                    }
                });

                console.log(`Showing ${visibleCount} of ${items.length} items`);
            }

            if (searchInput) {
                searchInput.addEventListener('input', function(e) {
                    currentSearch = e.target.value.toLowerCase();
                    filterItems();
                });
            }

            if (typeFilter) {
                typeFilter.addEventListener('change', function(e) {
                    currentType = e.target.value;
                    filterItems();
                });
            }

            if (dateFilter) {
                dateFilter.addEventListener('change', function(e) {
                    currentDate = e.target.value;
                    filterItems();
                });
            }
        }

        function removeYearBadges() {
            // Remove all year badges by class name
            const yearBadges = document.querySelectorAll('.publication-year-badge, .year-badge, .date-badge, [class*="year-badge"], [class*="date-badge"]');
            yearBadges.forEach(badge => {
                badge.remove();
            });

            // Remove spans containing year numbers
            const allSpans = document.querySelectorAll('span');
            allSpans.forEach(span => {
                const text = span.textContent.trim();
                if (/^(202[0-9]|201[0-9])$/.test(text)) {
                    span.remove();
                }
            });

            // Remove any elements with year-related content in publication areas
            const publicationAreas = document.querySelectorAll('.stream-item, .media, .publication-item');
            publicationAreas.forEach(area => {
                const yearElements = area.querySelectorAll('*');
                yearElements.forEach(element => {
                    const text = element.textContent.trim();
                    if (/^(202[0-9]|201[0-9])$/.test(text) && element.tagName === 'SPAN') {
                        element.remove();
                    }
                });
            });

            console.log('Year badges removal completed');
        }


        </script>
    design:
      columns: 1
      spacing:
        padding: ['0', '0', '1rem', '0']

  - block: collection
    id: publications
    content:
      title: ""
      filters:
        folders:
          - publication
        exclude_featured: false
        publication_type: ""
      sort_by: 'Date'
      sort_ascending: false
      count: 0
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: compact
      show_date: false
---
