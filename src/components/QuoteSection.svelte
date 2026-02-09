<section class="instant-quote" id="quote-section">
  <div class="quote-wrapper">
    <h2 class="section-title">Get an instant quote</h2>

    <form class="quote-form" aria-label="Instant quote form" on:submit={handleSubmit}>
      <div class="form-row">
        <input type="text" id="iq-fullName" name="fullName" placeholder="Full Name" required />
      </div>
      <div class="form-row">
        <input type="email" id="iq-email" name="email" placeholder="Email" required />
      </div>

      <div class="form-row">
        <input type="tel" id="iq-phone" name="phone" placeholder="Phone" />
      </div>

      <div class="form-row">
        <input type="text" id="iq-organization" name="organization" placeholder="Organization / Event" />
      </div>

      <div class="form-row">
        <select id="iq-eventType" name="eventType">
          <option value="">Event Type</option>
          <option>Anniversary Party</option>
          <option>Christmas Party</option>
          <option>Client Event</option>
          <option>College Event</option>
          <option>Convention</option>
          <option>Corporate Awards Dinner</option>
          <option>Corporate Cocktail Party</option>
          <option>Corporate Dinner</option>
          <option>Corporate Event</option>
          <option>Corporate Holiday Party</option>
          <option>Corporate Meeting</option>
          <option>Fundraiser</option>
          <option>Grand Opening</option>
          <option>Jewish Celebration</option>
          <option>Networking Event</option>
          <option>New Year's Eve</option>
          <option>Non Profit Event</option>
          <option>Other</option>
          <option>Private Event</option>
          <option>Product Launch</option>
          <option>TBD</option>
          <option>Team Building</option>
          <option>Tradeshow</option>
          <option>Workshop</option>
        </select>
      </div>

      <div class="form-row">
        <label class="sr-only" for="iq-date">Event Date</label>
        <input type="date" id="iq-date" name="date" />
      </div>

      <div class="form-row">
        <label class="radio-label">Magical Experience</label>
        <div class="radio-row">
          <label><input type="radio" name="iq-experience" value="Talented Guest" checked> Talented Guest - Closeup Magic</label>
          <label><input type="radio" name="iq-experience" value="One Man Show"> One Man Show</label>
        </div>
      </div>

      <button type="submit" class="booking-btn small" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Get Quote'}
      </button>

      {#if submitStatus === 'success'}
        <p class="status-message success">Quote sent! Check your email for next steps.</p>
      {:else if submitStatus === 'error'}
        <p class="status-message error">Failed to send quote. Please try again.</p>
      {/if}
    </form>
  </div>
  <div class="home-deck-container">
    <img src="/images/spread_total.png" alt="deck of cards" class="home-deck-image" />
  </div>
</section>

<script>
  import emailjs from '@emailjs/browser';

  let isSubmitting = false;
  let submitStatus = null;

  // Initialize EmailJS (Public Key from EmailJS)
  emailjs.init('pdqDmdY-sbD_juHgJ');

  async function handleSubmit(e) {
    e.preventDefault();
    isSubmitting = true;
    submitStatus = null;

    const form = e.target;
    const formData = {
      fullName: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value || 'Not provided',
      organization: form.organization.value || 'Not provided',
      eventType: form.eventType.value || 'Not specified',
      date: form.date.value || 'Not specified',
      experience: form['iq-experience'].value,
      toEmail: 'aidanparkhurst@gmail.com'
    };

    try {
      await emailjs.send('service_zzormiu', 'template_instant_quote', formData);
      submitStatus = 'success';
      form.reset();
      setTimeout(() => {
        submitStatus = null;
      }, 4000);
    } catch (error) {
      console.error('Email send failed:', error);
      submitStatus = 'error';
      setTimeout(() => {
        submitStatus = null;
      }, 4000);
    } finally {
      isSubmitting = false;
    }
  }
</script>

<style>
  .instant-quote {
    padding: 3rem 1rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .quote-wrapper {
    max-width: 420px;
    width: 100%;
    padding: 1rem;
    z-index: 2;
  }

  .home-deck-container {
    position: absolute;
    left: -18%;
    top: 10%;
    height: calc(121vh - 2px);
    width: auto;
    overflow: hidden;
    z-index: 1;
    pointer-events: none;
  }

  .home-deck-image {
    height: 150vh;
    width: auto;
    object-fit: contain;
    opacity: 0.95;
    z-index: 1;
    pointer-events: none;
  }

  .section-title {
    font-family: 'Forum', serif;
    font-size: 1.75rem;
    margin: 0 0 1rem 0;
    color: #3a4a5e;
    text-align: center;
  }

  .quote-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }

  .quote-form .form-row {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .quote-form input,
  .quote-form select {
    font-family: 'Forum', serif;
    font-size: 1.2rem;
    padding: 0.75rem;
    border: 2px dashed #5a6a7e;
    border-radius: 10px;
    background-color: transparent;
    flex: 1;
    opacity: 0.5;
    transition: border-color 0.3s, opacity 0.3s;
  }

  .quote-form input:hover,
  .quote-form select:hover {
    opacity: 0.8;
    border-color: #3a4a5e;
  }

  .quote-form input:focus,
  .quote-form select:focus {
    opacity: 1;
    outline: none;
    border-color: #3a4a5e;
  }

  .radio-label {
    font-family: 'Forum', serif;
    font-size: 1rem;
    color: #3a4a5e;
  }

  .sr-only {
    font-family: 'Forum', serif;
  }

  .quote-form .radio-row {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .quote-form .radio-row label {
    font-family: 'Forum', serif;
    font-size: 1rem;
    color: #3a4a5e;
  }

  .booking-btn.small {
    width: 100%;
    margin-top: 1.5rem;
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

  .booking-btn.small:hover {
    background-color: #3a4a5e;
    color: rgb(240, 240, 240);
  }

  .booking-btn.small:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .status-message {
    font-family: 'Forum', serif;
    font-size: 1rem;
    text-align: center;
    padding: 0.75rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .status-message.success {
    background-color: #e8f5e9;
    color: #2e7d32;
    border: 1px solid #4caf50;
  }

  .status-message.error {
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #f44336;
  }

  @media (max-width: 767px) {
    .home-deck-container {
      display: none;
    }
  }
</style>
