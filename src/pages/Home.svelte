<script>
  import Navigation from '../components/Navigation.svelte';
  import HeroSection from '../components/HeroSection.svelte';
  import ScrollIndicator from '../components/ScrollIndicator.svelte';
  import HandsSection from '../components/HandsSection.svelte';
  import ServicesSection from '../components/ServicesSection.svelte';
  import HowItWorksSection from '../components/HowItWorksSection.svelte';
  import QuoteSection from '../components/QuoteSection.svelte';
  import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
  <title>Professional Magician New Jersey & New York | Aidan Parkhurst Magic</title>
  <meta name="description" content="Aidan Parkhurst offers close-up magic, corporate entertainment, and event magic in New Jersey and New York. Book a professional magician for your next event." />
  <meta property="og:title" content="Professional Magician New Jersey & New York | Aidan Parkhurst Magic" />
  <meta property="og:description" content="Aidan Parkhurst offers close-up magic, corporate entertainment, and event magic in New Jersey and New York." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://magicupclo.se/" />
  <link rel="canonical" href="https://magicupclo.se/" />
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Magic Up Close",
      "alternateName": "Aidan Parkhurst Magic",
      "description": "Professional magician offering close-up magic and corporate entertainment",
      "url": "https://magicupclo.se/",
      "telephone": "+1-201-248-5985",
      "email": "aidanp@rkhur.st",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "New Jersey",
        "addressCountry": "US"
      },
      "areaServed": ["New Jersey", "New York"],
      "priceRange": "$$",
      "serviceType": ["Close-Up Magic", "Corporate Magic", "Event Magic", "Wedding Magic", "Private Party Magic"]
    }
  </script>
</svelte:head>

<Navigation />

<main>
  <HeroSection />
  <ScrollIndicator />
  <HandsSection />
  <ScrollIndicator />
  <ServicesSection />
  <ScrollIndicator />
  <HowItWorksSection />
  <ScrollIndicator />
  <QuoteSection />
</main>

<Footer />

<style>
  :global(html) {
    --bg-light: rgb(240, 240, 240);
    --dark-blue: #3a4a5e;
    --light-blue: #5a6a7e;

    background-color: var(--dark-blue);
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', serif;
    background-color: var(--bg-light);
    color: var(--dark-blue);
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    max-width: 100vw;
    overflow-x: clip;
  }

  @media (min-width: 768px) {
    :global(body) {
      background: linear-gradient(to right, rgb(220, 220, 220), var(--bg-light) 20%, var(--bg-light) 80%, rgb(220, 220, 220));
    }
  }
</style>

