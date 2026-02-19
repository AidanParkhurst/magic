<script>
  import Navigation from '../components/Navigation.svelte';
  import Footer from '../components/Footer.svelte';
  import { navigate } from 'svelte-routing';

  function handleContactClick() {
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

<svelte:head>
  <title>FAQ | Questions About Booking a Magician | Aidan Parkhurst Magic</title>
  <meta name="description" content="Find answers to frequently asked questions about booking a professional magician. Learn about types of magic performances, customization, and event requirements." />
  <meta property="og:title" content="FAQ | Questions About Booking a Magician" />
  <meta property="og:description" content="Find answers to frequently asked questions about booking a professional magician for your event." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://magicupclo.se/faq" />
  <link rel="canonical" href="https://magicupclo.se/faq" />
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do You Have Experience Entertaining At My Type of Event?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, I have performed at corporate events, private parties, weddings, grand openings, holiday parties, and many other special occasions. I work directly with clients to understand their specific needs and customize my performance for different audiences and settings."
          }
        },
        {
          "@type": "Question",
          "name": "How Do You Incorporate Our Brand or Event Theme Into Your Performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I work hand-in-hand with clients to seamlessly integrate branding elements, themes, and personal details into customized tricks and performances. Whether you want to highlight a special guest, incorporate your company's products, or create memorable themed moments, I design my routines with your specific goals in mind."
          }
        },
        {
          "@type": "Question",
          "name": "What's Your Creative Process For Customizing Your Performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I start by learning about you, your event, your goals, and your guests. I take time to understand your vision, then craft an interactive experience that specially fits your group's needs. Whether you want close-up magic, a stage show, or something unique, I collaborate to deliver performances that create lasting impressions."
          }
        },
        {
          "@type": "Question",
          "name": "What Types of Magic Performance Do You Offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I specialize in close-up magic for cocktail hours and intimate settings, stage magic for larger gatherings, and mentalism performances. I assess your specific event and recommend the best magic program to ensure your celebration is a complete success."
          }
        },
        {
          "@type": "Question",
          "name": "How Will Your Performance Keep My Guests Engaged and Entertained?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I customize every routine based on your event goals, target audience, and desired atmosphere. I read the room in real-time, adapt my performance based on audience reaction, and focus entirely on creating moments that your guests will remember and discuss long after your event ends."
          }
        },
        {
          "@type": "Question",
          "name": "Are There Restrictions Around Photographing or Filming Your Act?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I absolutely love being part of your guests' social media content. I encourage guests to photograph and film my performance so they can share the amazement with their networks. Just make sure to tag me or mention Magic Up Close so we can celebrate the magical moments together."
          }
        },
        {
          "@type": "Question",
          "name": "What Technical Requirements and Venue Accommodations Are Needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A strolling close-up magician requires minimal accommodations. A stage performance with larger illusions might require basic AV equipment and proper lighting. Most of my performances are flexible and work beautifully in virtually any venue. I'll discuss all technical requirements during our planning conversations."
          }
        }
      ]
    }
  </script>
</svelte:head>

<Navigation />

<main>
  <div class="faq-container">
    <header class="faq-header">
      <h1>Top 7 Questions to Ask When Booking a Magician</h1>
      <p class="faq-intro">Looking to add wonder and excitement to your event? With years of experience amazing audiences at corporate events, private parties, and special occasions, I know what you should ask to confidently book a magician and create an unforgettable experience with Magic Up Close.</p>
    </header>

    <div class="faq-content">
      <div class="faq-item">
        <h2>1. Do You Have Experience Entertaining At My Type of Event?</h2>
        <p>It is essential to confirm a magician has expertise performing specifically for your event type, whether that's corporate events, private parties, weddings, grand openings, holiday parties, or other special occasions. At Magic Up Close, I have performed at all these event types and more, bringing years of experience tailored to different audiences and settings. I work directly with clients to understand their specific needs, audience demographics, and event goals, then customize my performance accordingly. Don't be afraid to ask for more information about your magician's background. I'm here to help you book with confidence and create the perfect magical experience for your guests.</p>
      </div>

      <div class="faq-item">
        <h2>2. How Do You Incorporate Our Brand or Event Theme Into Your Performance?</h2>
        <p>I work hand-in-hand with clients early on to seamlessly integrate branding elements, themes, messaging, and personal details into customized tricks and performances. Whether you want me to highlight a special guest, incorporate your company's products, create memorable moments around your event's theme, or generate social media-worthy moments, I design my routines with your specific goals in mind. You can relax knowing I think of every detail so you can focus on enjoying the magical experience! I'm happy to discuss how I've successfully customized magic for past events and how I can tailor my performance specifically for you.</p>
      </div>

      <div class="faq-item">
        <h2>3. What's Your Creative Process For Customizing Your Performance?</h2>
        <p>I start by truly learning about you, your event, your specific goals, and who your guests are, letting those insights guide me to design a fully customized performance. I take time to understand your vision, then craft an interactive experience that perfectly fits your group and your specific needs. Whether you want to create an intimate close-up magic experience where I mingle with guests, perform a stage show that captivates a larger audience, or something completely unique to your event, I collaborate closely with each client to deliver performances that create lasting impressions and meaningful memories. My goal is to ensure your guests walk away amazed and talking about your event long afterward.</p>
      </div>

      <div class="faq-item">
        <h2>4. What Types of Magic Performance Do You Offer?</h2>
        <p>I specialize in several performance styles to match any event need. Close-up magic is perfect for cocktail hours, receptions, and intimate settings where I work the room performing sleight of hand with cards, coins, and other props, creating individual moments of amazement for your guests. Stage magic works beautifully for larger gatherings where everyone watches together, creating impressive illusions and moments of shared wonder. I also offer mentalism performances that appear to read minds and predict outcomes. Whether you prefer a strolling magician engaging small groups, a formal stage performance, or a hybrid approach, I assess your specific event and recommend the best magic program to ensure your celebration is a complete success.</p>
      </div>

      <div class="faq-item">
        <h2>5. How Will Your Performance Keep My Guests Engaged and Entertained?</h2>
        <p>Keeping guests engaged comes down to making them feel the magic was created exclusively for them. I customize every routine based on your specific event goals, target audience, and desired atmosphere. I spend time truly understanding your vision, then craft an interactive experience that perfectly matches your group's needs. My close-up magic works especially well because it happens right in front of spectators, creating intimate moments of genuine amazement that feel personal and special. I read the room in real-time, adapt my performance based on audience reaction, and focus entirely on creating moments that your guests will remember and discuss long after your event ends.</p>
      </div>

      <div class="faq-item">
        <h2>6. Are There Restrictions Around Photographing or Filming Your Act?</h2>
        <p>In today's social sharing age, photography and filming policies are important to understand upfront. I absolutely love being part of your guests' social media content. Magic moments are perfect for sharing! I encourage guests to photograph and film my performance so they can share the amazement with their networks. This creates wonderful buzz around your event and extends its reach far beyond those physically present. Just make sure to tag me @aidanparkhurst or mention Magic Up Close so we can celebrate the magical moments together. This policy is entirely flexible based on your preferences, so just let me know what works best for your event.</p>
      </div>

      <div class="faq-item">
        <h2>7. What Technical Requirements and Venue Accommodations Are Needed?</h2>
        <p>Every magician has different needs based on the type of performance. A strolling close-up magician performing card and coin tricks amongst tables or groups requires minimal accommodations, just space to move around and interact with your guests. A stage performance with larger illusions might require basic AV equipment, proper lighting, and stage setup depending on the venue and illusions being performed. Most of my performances are flexible and work beautifully in virtually any venue, from upscale restaurants to corporate offices to outdoor gardens. I'll discuss all technical requirements with you during our planning conversations and work closely with your venue to ensure everything runs smoothly. There are no surprises, just clear communication and seamless coordination.</p>
      </div>
    </div>

    <div class="faq-footer">
      <p>Have more questions? <a href="/bookings" on:click|preventDefault={handleContactClick}>Contact me to discuss your event</a> and let's create something truly magical together!</p>
    </div>
  </div>
</main>

<Footer />

<style>
  main {
    min-height: calc(100vh - 100px);
    padding: 2rem 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .faq-container {
    max-width: 900px;
    width: 100%;
    margin-top: 2rem;
  }

  .faq-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 2px solid #3a4a5e;
    padding-bottom: 2rem;
  }

  .faq-header h1 {
    font-family: 'Forum', serif;
    font-size: 2.5rem;
    color: #3a4a5e;
    margin: 0 0 1rem 0;
    font-weight: normal;
  }

  .faq-intro {
    font-family: 'Forum', serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: #3a4a5e;
    margin: 0;
  }

  .faq-content {
    margin-bottom: 3rem;
  }

  .faq-item {
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #d2d2dc;
  }

  .faq-item:last-child {
    border-bottom: none;
  }

  .faq-item h2 {
    font-family: 'Forum', serif;
    font-size: 1.4rem;
    color: #3a4a5e;
    margin: 0 0 1rem 0;
    font-weight: normal;
  }

  .faq-item p {
    font-family: 'Forum', serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: #3a4a5e;
    margin: 0;
  }

  .faq-footer {
    text-align: center;
    padding-top: 2rem;
    border-top: 2px solid #3a4a5e;
  }

  .faq-footer p {
    font-family: 'Forum', serif;
    font-size: 1.1rem;
    color: #3a4a5e;
    margin: 0;
  }

  .faq-footer a {
    color: #3a4a5e;
    text-decoration: underline;
    transition: color 0.3s;
  }

  .faq-footer a:hover {
    color: #5a6a7e;
  }

  @media (max-width: 767px) {
    main {
      padding: 1rem;
    }

    .faq-header h1 {
      font-size: 1.75rem;
    }

    .faq-intro {
      font-size: 0.95rem;
    }

    .faq-item h2 {
      font-size: 1.2rem;
    }

    .faq-item p {
      font-size: 0.95rem;
    }

    .faq-footer p {
      font-size: 0.95rem;
    }
  }
</style>
