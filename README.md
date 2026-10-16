# Leo Lucky Hands Studios — standalone website

A Next.js App Router starter for a premium black-and-gold talent and celebrity management website.

## Included

- Four main pages: Home, Actress Portfolio, Services, About & Contact
- Dynamic individual talent pages at `/portfolio/[slug]`
- Search by name/language and language filter
- 37 actress records imported from the provided CSV
- Placeholder portrait cards until you add approved photos
- Optional profile image gallery and local video support
- WhatsApp enquiry form (opens WhatsApp with the filled details; it does not store submissions)
- Responsive mobile navigation and layouts

## Requirements

- Node.js 20.9+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Add actress photos

Each record in `data/talent.json` has a `photo` field. The default is `/images/talent/<slug>.jpg`.

Example: for Shruti Hasan, place an image at:

`public/images/talent/shruti-hasan.jpg`

Keep the filename matching the `photo` field. If the image is missing, the site displays a designed placeholder instead of a broken image.

## Add gallery photos and videos

Open `data/talent.json` and edit a talent record:

```json
{
  "slug": "shruti-hasan",
  "name": "Shruti Hasan",
  "type": "Actress",
  "photo": "/images/talent/shruti-hasan.jpg",
  "followers": "23.7M",
  "languages": "Tamil and Telugu",
  "instagram": "https://www.instagram.com/shrutzhaasan/?hl=en",
  "price": "25 Lakhs",
  "description": "Optional profile description.",
  "gallery": [
    "/images/talent/shruti-hasan-02.jpg",
    "/images/talent/shruti-hasan-03.jpg"
  ],
  "videos": ["/videos/shruti-hasan-showreel.mp4"]
}
```

Place gallery photos in `public/images/talent/` and video files in `public/videos/`. For large videos, prefer a YouTube/Vimeo embed rather than storing large files in the project; the current video field expects a playable direct video file URL.

## Add an upcoming model

Add a new object to `data/talent.json` with a unique slug and set `"type": "Model"`. Include the fields above. The portfolio page has an Actresses/Models filter; model profiles appear automatically when added.

## Update details

- Talent records: `data/talent.json`
- Contact phone / WhatsApp: search for `917675961136` in `components/ContactForm.tsx` and `components/Footer.tsx`.
- Instagram: search for `leoluckyhands` in `components/Footer.tsx` and `app/about-contact/page.tsx`.
- Founder: `app/about-contact/page.tsx`
- Brand styling: `app/globals.css`

## Important before publishing

1. Add approved, high-quality photos for each profile.
2. Confirm the artist names, follower counts, fees and Instagram URLs. The values are carried over from the supplied PDF/CSV and may need updating.
3. Obtain permission to publish artist photographs, videos, rates and profile details.
4. Confirm whether artist fees are public. If not, change the profile price to “Contact for fee” or remove it from the public UI.
5. The enquiry form currently opens WhatsApp. For saved leads or email notifications, connect a form backend/service before launch.
6. Add your final logo file, founder photograph, social preview image and favicon.

## Deploy

Recommended: push the project to GitHub and import it into Vercel. Vercel detects Next.js automatically. Add your own domain in Vercel's project settings and update DNS as instructed by Vercel.
