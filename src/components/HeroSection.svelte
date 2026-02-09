<script>
  function handleQuoteClick() {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class="content-container">
  <div class="text-section">
    <p class="subtitle">The Close Up Magic of</p>
    <h1 class="name">
      <span class="first-name">Aidan</span><br>
      <span class="last-name">Parkhurst</span>
    </h1>
    
    <p class="description">
      New Jersey born close-up magician and mentalist. Sharing magic, wonder, and smiles for 6+ years.<br>
      "From Boston to New York City, and even as far as Mexico, Aidan brings a warm, personable approach to magic."
    </p>
    
    <button class="booking-btn" on:click={handleQuoteClick}>
      Check Availability 
    </button>
  </div>

  <img 
    src="/images/mirror_total.png" 
    alt="Aidan Parkhurst sat performing card magic in front of a fancy mirror" 
    class="mirror-image"
  />
</div>

<style>
  .content-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 2rem;
    gap: 5rem;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    .content-container {
      justify-content: center;
      margin: 0;
      padding-right: 2rem;
    }

    .text-section {
      flex: 0 0 auto;
      align-items: center;
      margin-right: auto;
      margin-left: auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .mirror-image {
      margin-left: auto;
    }

    .description {
      width: 75%;
    }

    .booking-btn {
      width: 75%;
    }
  }

  .text-section {
    text-align: center;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30vw;
  }

  .subtitle {
    font-family: 'Forum', serif;
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
    color: #5a6a7e;
  }

  .name {
    font-family: 'Forum', serif;
    font-weight: normal;
    line-height: .9;
    margin: 0 0 3rem 0;
    color: #3a4a5e;
  }

  .first-name {
    font-size: 5rem;
  }

  .last-name {
    font-size: 3rem;
    color: #3a4a5e;
  }

  .description {
    font-family: 'Forum', serif;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    color: #3a4a5e;
  }

  .booking-btn {
    font-family: 'Forum', serif;
    font-size: 1.2rem;
    padding: 0.75rem 2rem;
    border: 2px solid #3a4a5e;
    background-color: transparent;
    color: #3a4a5e;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .booking-btn:hover {
    background-color: #3a4a5e;
    color: rgb(240, 240, 240);
  }

  .mirror-image {
    max-height: 80vh;
    height: auto;
    width: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 767px) {
    .mirror-image {
      max-height: 72vh;
    }
    .text-section {
      max-width: 22ch;
      padding-left: 0.5rem;
    }
    .content-container {
      gap: 0.5rem;
      margin: 0;
      padding: 0 0.5rem;
    }
    .subtitle {
      font-size: 0.9rem;
    }
    .first-name {
      font-size: 4rem;
    }
    .last-name {
      font-size: 2.5rem;
    }
    .booking-btn {
      font-size: 1rem;
      padding: 0.5rem 1.5rem;
    }
  }
</style>
