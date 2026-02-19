<script>
  import Navigation from '../components/Navigation.svelte';
  import Footer from '../components/Footer.svelte';
  import { navigate } from 'svelte-routing';
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Close-Up Magic',
      date: '2026-02-10',
      excerpt: 'Discover the techniques and psychology behind captivating close-up magic performances.',
      slug: 'art-of-closeup-magic'
    },
    {
      id: 2,
      title: 'New Jersey Magician for Events: Entertainment That Creates Wonder',
      date: '2026-01-15',
      excerpt: 'Hire a professional magician in New Jersey for events that leave lasting impressions.',
      slug: 'new-jersey-magician'
    },
    {
      id: 3,
      title: 'Close-Up Magic in New York: Intimate Entertainment That Amazes',
      date: '2025-11-20',
      excerpt: 'Experience close-up magic in New York that creates unforgettable moments.',
      slug: 'close-up-magic-new-york'
    },
    {
      id: 4,
      title: 'Corporate Magic in New Jersey: Professional Entertainment for Business Events',
      date: '2025-09-05',
      excerpt: 'Impress your clients and guests with corporate magic entertainment in New Jersey.',
      slug: 'corporate-magic-new-jersey'
    },
    {
      id: 5,
      title: 'Private Party Magician: Make Your Celebration Magical',
      date: '2025-06-12',
      excerpt: 'Celebrate with unforgettable magic entertainment from a professional party magician.',
      slug: 'private-party-magician'
    },
    {
      id: 6,
      title: 'Magician for Grand Opening: Draw Crowds and Create Excitement',
      date: '2025-03-18',
      excerpt: 'Make your grand opening unforgettable with a professional magician.',
      slug: 'magician-grand-opening'
    },
    {
      id: 7,
      title: 'Magician for Christmas Party: Holiday Entertainment That Amazes',
      date: '2024-12-01',
      excerpt: 'Transform your Christmas party with magical entertainment for guests of all ages.',
      slug: 'magician-christmas-party'
    },
    {
      id: 8,
      title: 'Card Magic: The Art of Illusion with a Deck of Cards',
      date: '2024-08-22',
      excerpt: 'Discover the techniques and artistry behind stunning card magic performances.',
      slug: 'card-magic'
    },
    {
      id: 9,
      title: 'Coin Magic: Small Objects, Large Amazement',
      date: '2024-05-10',
      excerpt: 'Master the art of coin magic and sleight of hand techniques.',
      slug: 'coin-magic'
    },
    {
      id: 10,
      title: 'Mentalism Magic: Reading Minds and Predicting the Unpredictable',
      date: '2024-01-15',
      excerpt: 'Discover the secrets of mentalism and psychological illusion.',
      slug: 'mentalism-magic'
    },
    {
      id: 11,
      title: 'How to Hire a Magician: A Complete Guide to Booking Professional Magic Entertainment',
      date: '2023-09-03',
      excerpt: 'Learn everything you need to know about hiring the right magician for your event.',
      slug: 'how-to-hire-magician'
    },
    {
      id: 12,
      title: 'Best Magicians in NJ and NY: What Makes a Magician Truly Exceptional',
      date: '2023-05-20',
      excerpt: 'Discover what distinguishes exceptional magicians and how to find the best talent.',
      slug: 'best-magicians-nj-ny'
    },
    {
      id: 13,
      title: 'Magic for Weddings: Create Magical Moments for Your Special Day',
      date: '2023-02-14',
      excerpt: 'Enhance your wedding celebration with professional magic entertainment.',
      slug: 'magic-for-weddings'
    },
    {
      id: 14,
      title: 'Event Magician: Professional Entertainment for Any Celebration',
      date: '2022-03-01',
      excerpt: 'Transform your event with an experienced event magician who creates memorable moments.',
      slug: 'event-magician'
    }
  ];

  function navigateToBlogPost(slug) {
    navigate(`/blog/${slug}`);
  }
</script>

<svelte:head>
  <title>Media & Blog | Aidan Parkhurst Magic</title>
  <meta name="description" content="Explore Aidan Parkhurst's blog posts about magic, corporate entertainment, and event planning. Read articles on close-up magic, hiring a magician, and more." />
  <meta property="og:title" content="Media & Blog | Aidan Parkhurst Magic" />
  <meta property="og:description" content="Read blog posts about professional magic, corporate entertainment, and event planning." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://magicupclo.se/media" />
  <link rel="canonical" href="https://magicupclo.se/media" />
</svelte:head>

<Navigation />

<main>
  <div class="media-container">
    <!-- Videos Section -->
    <div class="videos-section">
      <div class="horizontal-video">
        <div class="video-placeholder"></div>
      </div>
      
      <div class="vertical-videos">
        <div class="vertical-video">
          <div class="video-placeholder"></div>
        </div>
        <div class="vertical-video">
          <div class="video-placeholder"></div>
        </div>
        <div class="vertical-video">
          <div class="video-placeholder"></div>
        </div>
      </div>
    </div>

    <!-- Blog Posts Section -->
    <div class="blog-section">
      <h2 class="blog-title">Blog Posts</h2>
      
      <table class="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Read More</th>
          </tr>
        </thead>
        <tbody>
          {#each blogPosts as post (post.id)}
            <tr class="blog-row" on:click={() => navigateToBlogPost(post.slug)}>
              <td class="blog-title-cell">{post.title}</td>
              <td class="blog-date-cell">{new Date(post.date).toLocaleDateString()}</td>
              <td class="blog-link-cell">→</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</main>

<style>
  main {
    min-height: calc(100vh - 100px);
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .media-container {
    max-width: 1200px;
    width: 100%;
  }

  /* Videos Section */
  .videos-section {
    margin-bottom: 4rem;
  }

  .horizontal-video {
    width: 100%;
    max-width: 900px;
    margin: 0 auto 2rem;
  }

  .horizontal-video .video-placeholder {
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: rgb(210, 210, 220);
    border-radius: 12px;
  }

  .video-placeholder {
    width: 100%;
    border-radius: 12px;
  }

  .vertical-videos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .vertical-video {
    width: 100%;
  }

  .vertical-video .video-placeholder {
    aspect-ratio: 9 / 16;
    background-color: rgb(210, 210, 220);
  }

  /* Blog Section */
  .blog-section {
    padding: 0 1rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .blog-title {
    font-family: 'Forum', serif;
    font-size: 2rem;
    color: #3a4a5e;
    margin: 0 0 2rem 0;
    font-weight: normal;
  }

  .blog-table {
    width: 100%;
    max-width: 800px;
    border-collapse: collapse;
    font-family: 'Forum', serif;
  }

  .blog-table thead {
    border-bottom: 2px solid #3a4a5e;
  }

  .blog-table th {
    text-align: left;
    padding: 1rem;
    color: #3a4a5e;
    font-weight: bold;
    font-size: 1rem;
  }

  .blog-row {
    border-bottom: 1px solid #5a6a7e;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .blog-row:hover {
    background-color: rgba(210, 210, 220, 0.5);
  }

  .blog-row td {
    padding: 1.25rem 1rem;
    color: #3a4a5e;
    font-size: 0.95rem;
  }

  .blog-title-cell {
    font-weight: 500;
  }

  .blog-date-cell {
    color: #5a6a7e;
    font-size: 0.9rem;
  }

  .blog-link-cell {
    text-align: center;
    color: #5a6a7e;
  }

  @media (max-width: 767px) {
    main {
      padding: 1.5rem 1rem;
    }

    .vertical-videos {
      grid-template-columns: 1fr;
    }

    .blog-table {
      font-size: 0.85rem;
    }

    .blog-table th,
    .blog-row td {
      padding: 0.75rem 0.5rem;
    }

    .blog-title-cell {
      min-width: 200px;
    }
  }
</style>

<Footer />
