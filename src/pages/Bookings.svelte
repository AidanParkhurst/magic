<script>
  import Navigation from '../components/Navigation.svelte';
</script>

<svelte:head>
  <title>Book a Magician | Aidan Parkhurst Magic</title>
  <meta name="description" content="Book Aidan Parkhurst for your event. Contact us for close-up magic, corporate entertainment, and professional magic performances in New Jersey and New York." />
  <meta property="og:title" content="Book a Magician | Aidan Parkhurst Magic" />
  <meta property="og:description" content="Book Aidan Parkhurst for your event. Contact us for professional magic performances." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://magicupclo.se/bookings" />
  <link rel="canonical" href="https://magicupclo.se/bookings" />
</svelte:head>

<Navigation />

<main>
  <div class="content">
    <h1>Bookings</h1>
    <p>
      Contact Aidan Parkhurst for booking inquiries and availability.
    </p>
    
    <form class="booking-form">
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" required />
      </div>

      <div class="form-group">
        <label for="organization">Organization / Event</label>
        <input type="text" id="organization" name="organization" />
      </div>

      <div class="form-group">
        <label for="eventType">Event Type</label>
        <select id="eventType" name="eventType">
          <option value="">-- Select an event type --</option>
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

      <div class="form-group">
        <label>Magical Experience</label>
        <div class="radio-group">
          <label><input type="radio" name="experience" value="Talented Guest" checked> Talented Guest - Closeup Magic</label>
          <label><input type="radio" name="experience" value="One Man Show"> One Man Show</label>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />
      </div>

      <div class="form-group">
        <label for="date">Event Date</label>
        <input type="date" id="date" name="date" />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <button type="submit" class="submit-btn">Submit</button>
    </form>
  </div>
</main>

<style>
  main {
    min-height: calc(100vh - 100px);
    padding: 2rem;
    display: flex;
    justify-content: center;
  }

  .content {
    max-width: 600px;
    width: 100%;
  }

  h1 {
    font-family: 'Forum', serif;
    font-size: 3rem;
    color: #3a4a5e;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Forum', serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #3a4a5e;
    margin-bottom: 2rem;
  }

  .booking-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-family: 'Forum', serif;
    font-size: 1rem;
    color: #3a4a5e;
  }

  input,
  textarea {
    font-family: 'Forum', serif;
    font-size: 1.2rem;
    padding: 0.75rem;
    border: 2px dashed var(--light-blue);
    opacity: 0.5;
    border-radius: 12px;
    background-color: transparent;
    transition: border-color 0.3s;
  }

  select {
    font-family: 'Forum', serif;
    font-size: 1.2rem;
    padding: 0.75rem;
    border: 2px dashed var(--light-blue);
    opacity: 0.85;
    border-radius: 12px;
    background-color: transparent;
    transition: border-color 0.3s;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .radio-group label {
    font-family: 'Forum', serif;
    font-size: 1rem;
    color: #3a4a5e;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input:hover,
  textarea:hover {
    opacity: 0.8;
    border-color: var(--dark-blue);
  }

  input:focus,
  textarea:focus {
    opacity: 1;
    outline: none;
    border-color: var(--dark-blue);
  }

  .submit-btn {
    font-family: 'Forum', serif;
    font-size: 1rem;
    padding: 0.75rem 2rem;
    border: 2px solid #3a4a5e;
    background-color: transparent;
    color: #3a4a5e;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    align-self: flex-start;
  }

  .submit-btn:hover {
    background-color: #3a4a5e;
    color: rgb(240, 240, 240);
  }
</style>
