<script>
  import Navigation from '../components/Navigation.svelte';
  
  function handleBackHome() {
    window.location.href = '/';
  }
</script>

<Navigation />

<main>
  <div class="content">
    <h1>Under Construction!</h1>
    <p class="blurb">
      Thanks for checking out my magic! This page is still being set up, come back soon to see it!
    </p>
    <button class="back-btn" on:click={handleBackHome}>Back to Home</button>
  </div>
</main>

<style>
  main {
    min-height: calc(100vh - 100px);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    max-width: 800px;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-family: 'Forum', serif;
    font-size: 3rem;
    color: #3a4a5e;
    margin-bottom: 1.5rem;
    font-weight: normal;
  }

  .blurb {
    font-family: 'Forum', serif;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #3a4a5e;
    margin-bottom: 2rem;
  }

  .back-btn {
    font-family: 'Forum', serif;
    font-size: 1.1rem;
    padding: 0.75rem 2rem;
    border: 2px solid #3a4a5e;
    background-color: transparent;
    color: #3a4a5e;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .back-btn:hover {
    background-color: #3a4a5e;
    color: rgb(240, 240, 240);
  }
</style>
