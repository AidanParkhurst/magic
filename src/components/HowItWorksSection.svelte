<section class="section-three">
  <div class="section-content">
    <div class="center-text">
      <h2 class="section-title">How it Works</h2>
      <p class="section-description">
        Ready to elevate your next event with unforgettable magic? Let's explore which magical experience is perfect for your occasion and create moments your guests will talk about for years to come.
      </p>
    </div>
    
    <img 
      src="/images/pencil_total.png" 
      alt="Pencil magic trick" 
      class="pencil-image"
    />
  </div>

  <div class="steps-container">
    <div class="step">
      <div class="step-number">1</div>
      <h3 class="step-title">Select & Inquire</h3>
      <p class="step-description">Choose your preferred magical experience and fill out the booking form below with your event details.</p>
    </div>

    <div class="step-arrow">→</div>

    <div class="step">
      <div class="step-number">2</div>
      <h3 class="step-title">Contract & Deposit</h3>
      <p class="step-description">We'll send you a performance contract and deposit request to secure your date.</p>
    </div>

    <div class="step-arrow">→</div>

    <div class="step">
      <div class="step-number">3</div>
      <h3 class="step-title">You're All Set!</h3>
      <p class="step-description">Sign the contract, send your deposit, and we're confirmed! Your magical experience awaits.</p>
    </div>
  </div>
</section>

<style>
  .section-three {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;
    position: relative;
  }

  .section-content {
    position: relative;
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center-text {
    position: absolute;
    left: 15%;
    top: 12%;
    transform: none;
    text-align: left;
    z-index: 10;
    max-width: 55ch;
    background-color: transparent;
    border-radius: 0;
  }

  .section-title {
    font-family: 'Forum', serif;
    font-size: 2.5rem;
    font-weight: normal;
    margin: 0 0 1rem 0;
    color: #3a4a5e;
  }

  .section-description {
    font-family: 'Forum', serif;
    font-size: 1.05rem;
    line-height: 1.6;
    margin: 0 0 3rem 0;
    color: #3a4a5e;
  }

  .pencil-image {
    position: absolute;
    right: 2%;
    top: 10%;
    max-height: 75vh;
    height: auto;
    width: auto;
    object-fit: contain;
    z-index: 5;
  }

  .steps-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 0 0 0 15%;
    width: 60%;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 62%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .step {
    flex: 0 0 auto;
    text-align: center;
    padding: 2rem;
    border: 1px solid #5a6a7e;
    border-radius: 8px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .step-number {
    font-family: 'Forum', serif;
    font-size: 2.5rem;
    font-weight: bold;
    color: #5a6a7e;
    margin: 0 0 0.5rem 0;
  }

  .step-title {
    font-family: 'Forum', serif;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 0 0.75rem 0;
    color: #3a4a5e;
  }

  .step-description {
    font-family: 'Forum', serif;
    font-size: 0.85rem;
    line-height: 1.3;
    margin: 0;
    color: #5a6a7e;
  }

  .step-arrow {
    font-size: 1.5rem;
    color: #5a6a7e;
    flex-shrink: 0;
    display: block;
    margin: 0 -0.25rem;
  }

  @media (max-width: 767px) {
    .section-title {
      font-size: 2rem;
    }

    .section-description {
      font-size: 1rem;
    }

    .center-text {
      position: absolute;
      left: auto;
      right: 0;
      top: 40%;
      transform: translateY(-50%);
      max-width: 50%;
      padding: 0 1.5rem;
      text-align: left;
      background-color: transparent;
      border-radius: 0;
      z-index: 10;
    }

    .pencil-image {
      max-height: 50vh;
      right: -30%;
      bottom: auto;
      top: 40%;
    }

    .steps-container {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 50%;
      padding: 0 0 0 1.5rem;
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;
    }

    .step {
      flex: 0 0 auto;
      width: 100%;
      max-width: 280px;
      padding: 1.5rem;
    }

    .step-number {
      font-size: 1.75rem;
    }

    .step-title {
      font-size: 0.95rem;
    }

    .step-description {
      font-size: 0.85rem;
    }

    .step-arrow {
      display: none;
    }
  }
</style>
