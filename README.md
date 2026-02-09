# Aidan Parkhurst - Close Up Magic Website

A personal website for close-up magician Aidan Parkhurst built with Svelte and Vite.

## Features

- **Mobile-First Responsive Design**: Optimized for all screen sizes
- **Page Navigation**: About, Media, and Bookings pages
- **Modern Styling**: Custom fonts (Noto Serif Javanese, Times New Roman) and cohesive color scheme
- **Booking Form**: Contact form for booking inquiries

## Design Specifications

- **Background**: RGB(240, 240, 240)
- **Font (Name)**: Noto Serif Javanese (serif)
- **Font (Body)**: Times New Roman
- **Text Color**: Desaturated dark blue (#3a4a5e)

## Project Structure

```
magic/
├── public/
│   └── images/          # Place mirror_total.png here
├── src/
│   ├── components/
│   │   └── Navigation.svelte
│   ├── pages/
│   │   ├── Home.svelte
│   │   ├── About.svelte
│   │   ├── Media.svelte
│   │   └── Bookings.svelte
│   ├── App.svelte
│   ├── app.css
│   └── main.js
└── index.html
```

## Setup

1. Install dependencies (already done):
   ```bash
   npm install
   ```

2. **Add the mirror image**:
   - Place `mirror_total.png` in the `public/images/` directory

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## Technology Stack

- **Svelte**: Modern reactive JavaScript framework
- **Vite**: Fast build tool and dev server
- **svelte-spa-router**: Client-side routing

## Pages

- **Home (/)**: Landing page with hero section and mirror image
- **About (/about)**: Information about Aidan Parkhurst
- **Media (/media)**: Photos and videos gallery
- **Bookings (/bookings)**: Contact form for booking inquiries

## Next Steps

- **Add your mirror_total.png image to public/images/**
- Customize page content (About, Media sections)
- Set up form submission handling for the Bookings page
- Add media content (photos/videos) to the Media page
