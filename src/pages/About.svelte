<script>
  import Navigation from '../components/Navigation.svelte';
</script>

<svelte:head>
  <title>About Aidan Parkhurst | Professional Magician</title>
  <meta name="description" content="Learn about Aidan Parkhurst, a professional magician specializing in close-up magic and corporate entertainment in New Jersey and New York." />
  <meta property="og:title" content="About Aidan Parkhurst | Professional Magician" />
  <meta property="og:description" content="Learn about Aidan Parkhurst, a professional magician specializing in close-up magic and corporate entertainment." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://magicupclo.se/about" />
  <link rel="canonical" href="https://magicupclo.se/about" />
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aidan Parkhurst",
      "url": "https://magicupclo.se/about",
      "jobTitle": "Professional Magician",
      "sameAs": [
        "https://instagram.com/aidanparkhurst",
        "https://tiktok.com/@arpkst"
      ],
      "workLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "New Jersey",
          "addressCountry": "US"
        }
      }
    }
  </script>
</svelte:head>

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
