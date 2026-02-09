<section class="section-two">
  <div class="section-content">
    <div class="center-text">
      <p class="subtitle">The Mission</p>
      <h2 class="section-title">Magic At Your Fingertips</h2>
      <p class="section-description">
        More than seen, magic is felt. Using ordinary objects like cards, pens, and coins, Aidan creates extraordinary moments of mystery and connection, that unfold directly in your guests’ hands.
        His interactive close-up illusions turn corporate events and private gatherings into memorable experiences: energizing the room, engaging every guest, and inspiring people to talk about your event, long after it ends.
      </p>
    </div>
    
    <img 
      src="/images/reach_hand_total.png" 
      alt="Hand reaching" 
      class="reach-hand-image"
    />
    
    <img 
      src="/images/hold_hand_total.png" 
      alt="Hand holding" 
      class="hold-hand-image"
    />
  </div>
</section>

<style>
  .section-two {
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
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    max-width: 70ch;
    padding: 2rem;
    background-color: rgba(240, 240, 240, 0.9);
    border-radius: 16px;
  }

  .subtitle {
    font-family: 'Forum', serif;
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
    color: #5a6a7e;
  }

  .section-title {
    font-family: 'Forum', serif;
    font-size: 3rem;
    font-weight: normal;
    margin: 0 0 1.5rem 0;
    color: #3a4a5e;
  }

  .section-description {
    font-family: 'Forum', serif;
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
    color: #3a4a5e;
  }

  .reach-hand-image {
    position: absolute;
    left: 0;
    top: 25%;
    transform: translateY(-50%);
    max-height: 30vh;
    height: auto;
    width: auto;
    object-fit: contain;
    z-index: 5;
  }

  .hold-hand-image {
    position: absolute;
    right: 0;
    top: 75%;
    transform: translateY(-50%);
    max-height: 40vh;
    height: auto;
    width: auto;
    object-fit: contain;
    z-index: 5;
  }

  @media (max-width: 767px) {
    .section-title {
      font-size: 2rem;
    }

    .section-description {
      font-size: 1rem;
    }

    .center-text {
      position: static;
      transform: none;
      max-width: 100%;
      padding: 2rem 1.5rem;
      background-color: transparent;
      border-radius: 0;
      margin: -10rem 0 2rem 0;
    }

    .reach-hand-image {
      max-height: 15vh;
      left: 0;
      bottom: 15%;
      top: auto;
      transform: none;
    }

    .hold-hand-image {
      max-height: 20vh;
      right: 0;
      bottom: 2%;
      top: auto;
      transform: none;
    }
  }
</style>
