---
title: News & Updates
type: landing

design:
  spacing: "6rem"

sections:
  - block: markdown
    content:
      title: "Latest News & Updates"
      subtitle: "Stay updated with our research activities, publications, and academic achievements"
      text: |
        <div class="news-intro">
          <p>Welcome to our news section where we share the latest updates about our research group, recent publications, conference presentations, and other academic activities.</p>
        </div>
    design:
      background:
        gradient_start: '#667eea'
        gradient_end: '#764ba2'
        text_color_light: true
      spacing:
        padding: ['6rem', '0', '4rem', '0']

  - block: collection
    content:
      title: Recent News
      subtitle: ''
      text: ''
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
      spacing:
        padding: ['2rem', '0', '2rem', '0']

  - block: markdown
    content:
      title: ""
      text: |
        <div class="news-archive">
          <div class="text-center">
            <h3>Looking for older news?</h3>
            <p>Browse our complete news archive to find previous announcements and updates.</p>
            <a href="/post/archive/" class="btn btn-primary">View Archive</a>
          </div>
        </div>

        <style>
        .news-intro {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .news-intro p {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .news-archive {
          background: #f8f9fa;
          padding: 3rem 2rem;
          border-radius: 15px;
          margin-top: 2rem;
        }

        .news-archive h3 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .news-archive p {
          color: #6c757d;
          margin-bottom: 2rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
          color: white;
          text-decoration: none;
        }
        </style>
    design:
      background:
        color: 'white'
      spacing:
        padding: ['2rem', '0', '2rem', '0']
---
