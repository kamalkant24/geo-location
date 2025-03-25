<template>
    <div class="about-container">
      <header class="hero">
        <h1 class="title">About Geolocation Lookup</h1>
        <p class="subtitle">Discover the power of IP-based geolocation technology</p>
      </header>
  
      <section class="content">
        <div class="feature-card">
          <h2>What is Geolocation?</h2>
          <p>
            Geolocation is the process of identifying the geographic location of a device or user
            using IP addresses. It helps in providing location-based services, security enhancements,
            and personalized experiences.
          </p>
        </div>
  
        <div class="feature-card">
          <h2>How It Works?</h2>
          <p>
            Our system fetches real-time IP details and provides precise information about a user's
            approximate location, including country, region, city, ISP, and timezone.
          </p>
        </div>
  
        <div class="feature-card">
          <h2>Why Use Geolocation?</h2>
          <ul>
            <li>Enhanced security for fraud prevention</li>
            <li>Better user experience with localized content</li>
            <li>Efficient website analytics and user tracking</li>
            <li>Improved targeted marketing strategies</li>
          </ul>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .about-container {
    max-width: 900px;
    margin: auto;
    text-align: center;
    padding: 40px;
  }
  
  .hero {
    background: linear-gradient(135deg, #4f46e5, #3b82f6);
    color: white;
    padding: 50px 20px;
    border-radius: 12px;
    margin-bottom: 30px;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 1.2rem;
    margin-top: 10px;
  }
  
  .content {
    display: grid;
    gap: 20px;
  }
  
  .feature-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #1e40af;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  </style>