---
title: "Yue"
date: 2022-10-24
type: landing

design:
  spacing: "0"

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <div class="profile-page">
          <div class="container-fluid">
            <div class="row min-vh-100">
              <div class="col-md-4 profile-sidebar">
                <div class="profile-card">
                  <div class="profile-image-container">
                    <img src="avatar-team.jpg" alt="Yue" class="profile-image">
                  </div>
                  <div class="profile-info">
                    <h1 class="profile-name">Yue</h1>
                    <h2 class="profile-title">PhD Student</h2>
                    <h3 class="profile-institution">University of Glasgow</h3>
                  </div>
                  <div class="social-links">
                    <a href="mailto:yue@glasgow.ac.uk" class="social-link" title="Email">
                      <i class="fas fa-envelope"></i>
                    </a>
                    <a href="https://linkedin.com/in/yue-geo" class="social-link" title="LinkedIn">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/yue-geo" class="social-link" title="GitHub">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-8 content-area">
                <div class="about-content">
                  <h2 class="about-title">About Me</h2>
                  <div class="about-text">
                    <p>I am a PhD student in the School of Geographical and Earth Sciences at the University of Glasgow, working under the supervision of Dr. Mingshu Wang. My research focuses on urban informatics and the application of geospatial data science to understand smart city development and urban sustainability.</p>
                    <p>With a strong foundation in geography and urban planning, I bring interdisciplinary perspectives to urban research. My previous studies have equipped me with skills in GIS, spatial analysis, and urban theory, which I now apply to cutting-edge research in urban informatics.</p>
                    <p>My current research involves developing new methodologies for analyzing urban data to support sustainable city planning and management. I am particularly interested in how technology can be leveraged to create more livable, sustainable, and equitable cities.</p>
                    <p>I am passionate about bridging the gap between academic research and practical applications in urban planning and policy-making. My work aims to contribute to evidence-based approaches for creating smarter and more sustainable urban environments.</p>
                  </div>
                  
        <h3 class="profile-section-title">Research Interests</h3>
        <ul class="profile-interests-list">
          <li>Geographical Information Science</li>
          <li>Urban Analytics</li>
          <li>Spatial Optimisation</li>
          <li>Geospatial Data Science</li>
          <li>City and Regional Development</li>
        </ul>

        <h3 class="profile-section-title">Education</h3>
        <div class="profile-education-container">
          <div class="profile-education-item">
            <i class="fas fa-graduation-cap profile-education-icon"></i>
            <strong class="profile-education-degree">Ph.D. Urban Studies</strong><br>
            <span class="profile-education-institution">University of Glasgow, School of Social and Political Sciences<br>2021 - Present</span>
          </div>
          <div class="profile-education-item">
            <i class="fas fa-graduation-cap profile-education-icon"></i>
            <strong class="profile-education-degree">M.Sc. Spatio-Temporal Analytics and Big Data Mining</strong><br>
            <span class="profile-education-institution">University College London, Department of Civil, Environmental and Geomatic Engineering<br>2019</span>
          </div>
          <div class="profile-education-item">
            <i class="fas fa-graduation-cap profile-education-icon"></i>
            <strong class="profile-education-degree">B.Sc. Environmental Science</strong><br>
            <span class="profile-education-institution">Beijing Normal University, School of Environment<br>2018</span>
          </div>
        </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
        .profile-page {
          background: #f8f9fa;
          min-height: 100vh;
          padding: 0;
        }

        .profile-sidebar {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-card {
          text-align: center;
          color: white;
          padding: 3rem 2rem;
          width: 100%;
          max-width: 400px;
        }

        .profile-image-container {
          position: relative;
          display: inline-block;
          margin-bottom: 2rem;
        }

        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 5px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          object-fit: cover;
        }

        .profile-badge {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.9);
          color: #667eea;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .profile-name {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .profile-title {
          font-size: 1.3rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }

        .profile-institution {
          font-size: 1.1rem;
          font-weight: 300;
          margin-bottom: 2rem;
          opacity: 0.8;
          font-style: italic;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          color: white;
          text-decoration: none;
        }

        .content-area {
          padding: 4rem 3rem;
          background: white;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 2rem;
          border-bottom: 3px solid #667eea;
          padding-bottom: 1rem;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 3rem;
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .profile-section-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 3rem 0 1.5rem 0;
          border-left: 4px solid #667eea;
          padding-left: 1rem;
        }

        .profile-interests-list {
          margin-bottom: 3rem;
          padding-left: 1.5rem;
        }

        .profile-interests-list li {
          margin-bottom: 0.5rem;
          font-size: 1rem;
          color: #333;
        }

        .profile-education-container {
          margin-bottom: 3rem;
        }

        .profile-education-item {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #667eea;
          margin-bottom: 1rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .profile-education-icon {
          color: #667eea;
          font-size: 1.2rem;
          margin-top: 0.2rem;
        }

        .profile-education-degree {
          color: #2c3e50;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .profile-education-institution {
          color: #6c757d;
          font-size: 1rem;
        }

        .research-section {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 10px;
          border-left: 4px solid #667eea;
          margin-bottom: 2rem;
        }

        .research-section p {
          color: #555;
          margin-bottom: 1rem;
        }

        .research-section ul {
          color: #555;
          padding-left: 1.5rem;
        }

        .research-section li {
          margin-bottom: 0.8rem;
        }

        @media (max-width: 768px) {
          .profile-sidebar {
            padding: 2rem 1rem;
          }
          
          .content-area {
            padding: 2rem 1.5rem;
          }
          
          .profile-name {
            font-size: 2rem;
          }
          
          .about-title {
            font-size: 2rem;
          }
          
          .profile-interests-list {
            justify-content: center;
          }
        }
        </style>
    design:
      background:
        color: '#f8f9fa'
      spacing:
        padding: ['0', '0', '0', '0']
---
