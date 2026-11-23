# Stalwyn Workforce

UK staffing and recruitment site for Stalwyn Workforce, built with Next.js.

The page covers temporary and seasonal staffing, permanent recruitment and ad hoc cover, with enquiry and application forms for employers and candidates.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `NEXT_PUBLIC_SITE_URL` to the public origin before deploy so Open Graph images resolve to that domain.

```bash
npm run build
npm run lint
```

## Project structure

- `app/` — App Router entry, layout, metadata and global styles
- `components/` — header, page sections and the shared draft form
- `lib/content.ts` — copy, navigation, form fields and structured data
- `lib/download-draft.ts` — builds the text file the forms download
- `public/brand/` — logo
- `public/images/` — photography

## Forms

The business enquiry and candidate application do not post data to a server. Submitting checks the fields, then downloads a `.txt` draft onto the device so it can be forwarded by email.
