<script>
  function handleQuoteClick() {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section class="services-section">
  <h2 class="services-title">Two Magical Experiences</h2>
  <div class="services-container">
    <img 
      src="/images/coins_total.png" 
      alt="Magic coins" 
      class="coins-image"
    />
    <div class="service-card">
      <h3 class="service-name"><strong>Talented Guest</strong></h3>
      <p class="service-subtitle">Closeup Magic</p>
      <p class="service-description">
        Aidan joins your event as a charming "guest", performing close-up magic and reading minds, right in the middle of the crowd.
      </p>
      
      <div class="card-section">
        <h4 class="card-heading">Features</h4>
        <ul class="card-list">
          <li>Walk-around magic mingling throughout your event</li>
          <li>Hands-on performances using familiar objects</li>
          <li>Engaging mentalism that feels personal and conversational</li>
          <li>Customized tricks to suit your event and audience</li>
        </ul>
      </div>

      <div class="card-section">
        <h4 class="card-heading">Perfect For</h4>
        <ul class="card-list">
          <li>Cocktail hours & receptions</li>
          <li>After-dinner entertainment</li>
          <li>Corporate events & celebrations</li>
          <li>Grand openings & special occasions</li>
        </ul>
      </div>

      <button class="booking-btn" on:click={handleQuoteClick}>
        Check Availability
      </button>
    </div>
    <div class="service-card">
      <h3 class="service-name"><strong>Curious Connections</strong></h3>
      <p class="service-subtitle">One Man Show</p>
      <p class="service-description">
        A high energy magic show, featuring visual mysteries, mind-bending mentalism, and lots of audience participation. Tailored to your event, no stage required!
      </p>
      
      <div class="card-section">
        <h4 class="card-heading">Features</h4>
        <ul class="card-list">
          <li>Visual, sophisticated, and hands-on illusions</li>
          <li>Full-scale mentalism with audience participation</li>
          <li>Opportunites to integrate branding and powerful messaging</li>
          <li>Impossible predictions, transformations, disappearances, and more</li>
        </ul>
      </div>

      <div class="card-section">
        <h4 class="card-heading">Perfect For</h4>
        <ul class="card-list">
          <li>Corporate galas & award ceremonies</li>
          <li>Conferences & summits</li>
          <li>Large-scale celebrations</li>
          <li>Theatrical venues & fundraising events</li>
        </ul>
      </div>

      <button class="booking-btn" on:click={handleQuoteClick}>
        Check Availability
      </button>
    </div>
  </div>
</section>

<style>
  .services-section {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 4rem 2rem;
    position: relative;
  }

  .services-title {
    font-family: 'Forum', serif;
    font-size: 2.5rem;
    font-weight: normal;
    text-align: center;
    margin: 0 0 3rem 0;
    color: #3a4a5e;
  }

  .services-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 800px;
    width: 100%;
  }

  .service-card {
    border: 1px solid #5a6a7e;
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  .service-name {
    font-family: 'Forum', serif;
    font-size: 1.3rem;
    font-weight: normal;
    margin: 0 0 0.25rem 0;
    color: #3a4a5e;
  }

  .service-subtitle {
    font-family: 'Forum', serif;
    font-size: 0.9rem;
    margin: 0 0 1rem 0;
    color: #5a6a7e;
  }

  .service-description {
    font-family: 'Forum', serif;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
    color: #3a4a5e;
  }

  .card-section {
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .card-section:last-child {
    margin-bottom: 1.5rem;
  }

  .card-heading {
    font-family: 'Forum', serif;
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0 0 0.75rem 0;
    color: #5a6a7e;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-list li {
    font-family: 'Forum', serif;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #3a4a5e;
    position: relative;
    padding-left: 1.25rem;
  }

  .card-list li:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #3a4a5e;
  }

  .booking-btn {
    font-family: 'Forum', serif;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid #3a4a5e;
    background-color: #3a4a5e;
    color: rgb(240, 240, 240);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
  }

  .booking-btn:hover {
    background-color: rgba(210, 210, 220, 0.5);
    color: #3a4a5e;
  }

  .coins-image {
    position: absolute;
    left: 2%;
    bottom: 0%;
    max-height: 35vh;
    height: auto;
    width: auto;
    object-fit: contain;
    z-index: 5;
  }

  @media (max-width: 767px) {
    .services-section {
      padding: 4rem 1rem 2rem;
      min-height: auto;
    }

    .services-title {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }

    .services-container {
      display: flex;
      flex-direction: column;
      gap: 6rem;
      position: relative;
    }

    .service-card {
      padding: 1.5rem;
    }

    .service-card:first-of-type {
      order: 1;
    }

    .coins-image {
      position: absolute;
      max-height: 20vh;
      width: auto;
      margin: 0;
      transform: none;
      order: 2;
      right: -10%;
      top: 48%;
      left: auto;
      z-index: 10;
    }

    .service-card:last-of-type {
      order: 3;
    }

    .service-name {
      font-size: 1.1rem;
    }

    .service-description {
      font-size: 0.9rem;
    }
  }
</style>
