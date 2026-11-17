# Cosmiq Solutions website

A React (Vite) website with GSAP scroll animations. Pages: Home, About us, Contact (with an enquiry form).

## Run it

You need Node.js 18 or newer.

```bash
npm install
npm run dev        # opens a local preview with live reload
npm run build      # creates the production site in /dist
npm run preview    # test the production build locally
```

Upload the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, cPanel).

## Project structure

```
src/
  main.jsx                 app entry
  App.jsx                  layout + page switching
  config/site.js           site name and ENQUIRY_EMAIL  <-- fill this in
  data/content.js          all headings, cards, FAQs and service text
  hooks/
    useHashRoute.js        #about / #contact page routing
    useScrollAnimations.js GSAP ScrollTrigger effects
  components/              Navbar, Footer, HeroBackground, Services, Steps,
                           WhySection, Faq, CtaBanner, EnquiryForm, ...
  pages/                   Home, About, Contact
  styles/global.css        all styling (the wine, white and purple palette variables are at the top)
  assets/                  logo.png, hero.jpg and the three service images
```

## Common changes

- **Text and cards:** edit `src/data/content.js`.
- **Hero background photo:** replace `src/assets/hero.jpg` (keep the dark area on the left for the text).
- **Service images:** replace `ai-driven.jpg`, `erp.jpg`, `consultation.jpg` in `src/assets/`.
- **Logo:** replace `src/assets/logo.png` (transparent PNG).
- **Colours:** the theme uses three colours: purple `--purple` (main), wine `--wine` (accent) and white `--white`, with a deep purple `--ink` for text and light purple tints `--lav`. Change the variables at the top of `src/styles/global.css`.

## Before launch

1. Set `ENQUIRY_EMAIL` in `src/config/site.js`. The Contact form opens the visitor's email app with the enquiry ready to send to that address. For delivery without an email app, connect the form to a form service (Formspree, Netlify Forms, or your own API) inside `src/components/EnquiryForm.jsx`.
2. Replace "Regulatory address to be added" and "Global phone numbers and website URL to be added" in `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
3. The About page has one image placeholder (`ImagePlaceholder` in `src/pages/About.jsx`). Swap it for a real photo.
