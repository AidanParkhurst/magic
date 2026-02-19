<footer class="site-footer">
  <div class="footer-sep">
    <div class="line-footer"></div>
  </div>

  <div class="footer-content">
    <div class="footer-col">
      <h3 class="footer-title">Overview</h3>
      <ul class="footer-list">
        <li><a href="/">About</a></li>
        <li><a href="/bookings">Bookings</a></li>
        <li><a href="/media">Media</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3 class="footer-title">Contact</h3>
      <p class="footer-contact"><a href="mailto:aidanp@rkhur.st">aidanp@rkhur.st</a></p>
      <p class="footer-contact"><a href="tel:+12012485985">(+1) 201-248-5985</a></p>
    </div>

    <div class="footer-col">
      <h3 class="footer-title">Socials</h3>
      <ul class="footer-list">
        <li><a href="https://instagram.com/aidanparkhurst" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://tiktok.com/@arpkst" target="_blank" rel="noreferrer">TikTok</a></li>
        <li><a href="https://rkhur.st" target="_blank" rel="noreferrer">Personal site</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <small>© 2026 Aidan Parkhurst — All rights reserved</small>
  </div>

  <div class="footer-deck-container">
    <img src="/images/spread_total.png" alt="deck of cards" class="footer-deck-image" />
  </div>
</footer>

<style>
  .site-footer {
    padding: 3rem 1rem 2rem;
    width: 100%;
    box-sizing: border-box;
    color: #3a4a5e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-sep {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .line-footer {
    width: 45vw;
    height: 1px;
    background-color: #3a4a5e;
    opacity: 0.6;
    margin: 0 auto;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 45vw;
    padding: 0 1rem;
    box-sizing: border-box;
    justify-items: space-between;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .footer-title {
    font-family: 'Forum', serif;
    font-size: 1.1rem;
    margin: 0 0 0.5rem 0;
  }

  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .footer-list a,
  .footer-contact a {
    color: #5a6a7e;
    text-decoration: none;
  }

  .footer-list a:hover,
  .footer-contact a:hover {
    text-decoration: underline;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    color: #5a6a7e;
  }

  @media (max-width: 767px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .site-footer {
      position: relative;
      overflow: hidden;
    }

    .footer-deck-container {
      position: absolute;
      left: -40%;
      top: 5%;
      height: 100%;
      width: auto;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
    }

    .footer-deck-image {
      height: 100%;
      width: auto;
      object-fit: contain;
      opacity: 0.9;
      z-index: 0;
      pointer-events: none;
    }

    .footer-sep,
    .footer-content,
    .footer-bottom {
      position: relative;
      z-index: 1;
    }
  }

  @media (min-width: 768px) {
    .footer-deck-container {
      display: none;
    }
  }
</style>
