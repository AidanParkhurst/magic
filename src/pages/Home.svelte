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

