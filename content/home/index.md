---
title: "Dr. Mingshu Wang"
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "0"

sections:
  - block: markdown
    content:
      title: ""
      text: |
        <div class="hero-section">
          <div class="hero-container">
            <div class="hero-content">
              <h2 class="hero-subtitle">Welcome to</h2>
              <h1 class="hero-title">Dr. Mingshu Wang's Academic Website</h1>
              <h3 class="hero-institution">Reader in Geospatial Data Science</h3>
              <h4 class="hero-university">University of Glasgow</h4>
              <div class="hero-scroll" onclick="scrollToAbout()">
                <span class="scroll-text">Learn More</span>
                <div class="scroll-icon">
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          color: white;
          text-align: center;
          max-width: 900px;
          padding: 4rem 3rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          font-weight: 300;
          margin-bottom: 1rem;
          opacity: 0.9;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-institution {
          font-size: 1.4rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
          opacity: 0.95;
          color: #f8f9fa;
        }

        .hero-university {
          font-size: 1.1rem;
          font-weight: 300;
          margin-bottom: 3rem;
          opacity: 0.8;
          font-style: italic;
        }

        .hero-scroll {
          position: absolute;
          bottom: -12rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 20px 35px;
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50px;
          backdrop-filter: blur(25px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .hero-scroll:hover {
          transform: translateX(-50%) translateY(-8px);
          background: rgba(255, 255, 255, 0.4);
          border-color: rgba(255, 255, 255, 0.7);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }

        .scroll-text {
          font-size: 1rem;
          margin: 0 0 10px 0;
          font-weight: 600;
          color: white;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: block;
        }

        .scroll-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          animation: gentleBounce 2s ease-in-out infinite;
        }

        .scroll-icon i {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .hero-scroll:hover .scroll-icon i {
          color: white;
          transform: translateY(3px);
        }

        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }



        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1.5rem;
            margin: 0 1rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
            letter-spacing: 1px;
          }
          .hero-institution {
            font-size: 1.2rem;
          }
          .hero-university {
            font-size: 1rem;
          }
          .hero-scroll {
            bottom: 2rem;
            padding: 15px 25px;
          }
        }
        </style>

        <script>
        function scrollToAbout() {
          const aboutSection = document.getElementById('about-section');
          if (aboutSection) {
            aboutSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
        </script>
    design:
      background:
        color: '#001122'
      spacing:
        padding: ['0', '0', '0', '0']

  - block: markdown
    id: about-section
    content:
      title: "About Our Research"
      text: |
        Location-aware technologies and big data are transforming the ways we study and understand human behavior. At **GeoAI Lab**, our mission is to pioneer geospatial solutions to propel human mobility science, a burgeoning field that seeks to model and predict patterns of movement, as well as influence the ways people navigate through urban environments and the broader earth system.
    design:
      background:
        gradient_start: '#f8f9fa'
        gradient_end: '#ffffff'
        gradient_angle: 135
      spacing:
        padding: ['100px', '0', '100px', '0']

  - block: features
    content:
      title: "Research Areas"
      items:
        - name: "Urban Informatics & GeoAI"
          description: "To improve the understanding of human and vehicle mobility using location-aware technologies and big data analytics, with a focus on developing innovative geospatial artificial intelligence methods."
          icon: "city"
        - name: "Mobility Prediction & Demand Forecast"
          description: "To make timely and reliable forecast of individual and collective mobility using geospatial artificial intelligence (GeoAI) and machine learning techniques."
          icon: "chart-line"
        - name: "Urban Systems & Spatial Analysis"
          description: "To understand short- and long-term changes of mobility behavior in the context of global change and new urban crises (e.g., pandemic, natural disasters), using advanced spatial analysis methods."
          icon: "map"
        - name: "Sustainable Transportation"
          description: "To study the impact of shared mobility and autonomous vehicles on future urban systems, contributing to sustainable urban development and smart city initiatives."
          icon: "leaf"
        - name: "Regional Development & Connectivity"
          description: "To understand the broad implications of mobility for urban development and human interactions, examining how transportation networks shape regional economic and social outcomes."
          icon: "network-wired"
        - name: "Smart Tourism & Destination Analytics"
          description: "To understand tourist spatial behavior and destination choices & develop solutions for smart and sustainable tourism development using big data and location intelligence."
          icon: "plane"
    design:
      spacing:
        padding: ['0', '0', '0', '0']

---
