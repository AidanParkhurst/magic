<script>
  import { Link, navigate } from 'svelte-routing';

  function handleBookingsClick() {
    const quoteSection = document.getElementById('quote-section');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If quote section doesn't exist, we're on another page
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const quote = document.getElementById('quote-section');
        if (quote) {
          quote.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
</script>

<nav>
  <Link to="/">About</Link>
  <Link to="/media">Media</Link>
  <button class="booking-link" on:click={handleBookingsClick}>Bookings</button>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    width: 45vw;
    margin: 0 auto;
    padding: 2rem 0;
    box-sizing: border-box;
  }

  nav :global(a) {
    color: var(--dark-blue);
    text-decoration: none;
    font-family: 'Forum', serif;
    font-size: 1.2rem;
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }

  nav :global(a:hover) {
    color: var(--light-blue);
    background-color: rgba(210,210,220,0.5);
  }

  nav :global(a:active) {
    color: var(--bg-light);
    background-color: var(--dark-blue);
  }

  .booking-link {
    color: var(--dark-blue);
    text-decoration: none;
    font-family: 'Forum', serif;
    font-size: 1.2rem;
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .booking-link:hover {
    color: var(--light-blue);
    background-color: rgba(210, 210, 220, 0.5);
  }

  .booking-link:active {
    color: var(--bg-light);
    background-color: var(--dark-blue);
  }

  @media (max-width: 767px) {
    nav {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
</style>
