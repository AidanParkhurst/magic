<script>
  import Navigation from '../components/Navigation.svelte';
</script>

<Navigation />

<main>
  <div class="content">
    <h1>About</h1>
    <p>
      Information about Aidan Parkhurst and his close-up magic performances.
    </p>
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
    max-width: 800px;
    width: 100%;
  }

  h1 {
    font-family: Georgia, 'Palatino Linotype', 'Book Antiqua', serif;
    font-size: 3rem;
    color: #3a4a5e;
    margin-bottom: 1.5rem;
  }

  p {
    font-family: 'Times New Roman', serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #3a4a5e;
  }
</style>
