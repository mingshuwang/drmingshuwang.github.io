---
title: "Dr. Heyi Wei"
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
                    <img src="avatar-team.jpg" alt="Heyi Wei" class="profile-image">
                  </div>
                  <div class="profile-info">
                    <h1 class="profile-name">Dr. Heyi Wei</h1>
                    <h2 class="profile-title">PhD Graduate</h2>
                    <h3 class="profile-institution">University of Glasgow</h3>
                  </div>
                  <div class="social-links">
                    <a href="mailto:heyi.wei@glasgow.ac.uk" class="social-link" title="Email">
                      <i class="fas fa-envelope"></i>
                    </a>
                    <a href="https://linkedin.com/in/heyi-wei" class="social-link" title="LinkedIn">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/heyi-wei" class="social-link" title="GitHub">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-8 content-area">
                <div class="about-content">
                  <h2 class="about-title">About Me</h2>
                  <div class="about-text">
                    <p>Dr. Heyi Wei is a recent PhD graduate from the School of Geographical and Earth Sciences at the University of Glasgow, where she conducted her doctoral research under the supervision of Dr. Mingshu Wang. Her research focused on environmental geography and the application of remote sensing technologies to monitor urban environmental changes and assess climate change impacts.</p>
                    <p>During her PhD studies, Heyi developed innovative methodologies for using satellite imagery and geospatial analysis to understand environmental dynamics in urban areas. Her work particularly focused on how urbanization affects local climate patterns and environmental quality, contributing to our understanding of urban sustainability challenges.</p>
                    <p>Heyi's research has been published in several high-impact journals and she has presented her findings at international conferences on environmental geography and remote sensing. Her work bridges the gap between environmental science and urban studies, providing valuable insights for sustainable urban development.</p>
                    <p>Dr. Wei is currently working as an environmental consultant, applying her expertise in remote sensing and environmental analysis to support environmental impact assessments and sustainability planning for urban development projects.</p>
                  </div>
                  
                  <h3 class="section-title">Research Interests</h3>
                  <div class="interests-list">
                    <span class="interest-tag">Environmental Geography</span>
                    <span class="interest-tag">Remote Sensing</span>
                    <span class="interest-tag">Climate Change</span>
                    <span class="interest-tag">Urban Environment</span>
                    <span class="interest-tag">Sustainability Science</span>
                  </div>
                  
                  <h3 class="section-title">Education</h3>
                  <div class="education-list">
                    <div class="education-item">
                      <strong>PhD in Geography</strong><br>
                      University of Glasgow, UK
                    </div>
                    <div class="education-item">
                      <strong>MSc in Environmental Science</strong><br>
                      Imperial College London, UK
                    </div>
                    <div class="education-item">
                      <strong>BSc in Environmental Engineering</strong><br>
                      Beijing University of Technology, China
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

        .section-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 3rem 0 1.5rem 0;
          border-left: 4px solid #667eea;
          padding-left: 1rem;
        }

        .interests-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 3rem;
        }

        .interest-tag {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 500;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .education-list {
          space-y: 1.5rem;
        }

        .education-item {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #667eea;
          margin-bottom: 1rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .education-item strong {
          color: #2c3e50;
          font-size: 1.1rem;
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
          
          .interests-list {
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
