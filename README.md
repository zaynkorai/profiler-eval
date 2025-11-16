# ProfileEvaluator AI

**ProfileEvaluator AI** is a TypeScript-based tool powered by ChatGPT that analyzes GitHub profiles or resumes and generates a detailed evaluation. It provides insights into a candidate’s skills, experience, and public contributions — helping recruiters, hiring managers, or developers themselves understand strengths, weaknesses, and opportunities for improvement.  

![Demo coming soon](demo.gif) <!-- Optional: add a demo GIF or image -->

## Features

- Analyze **GitHub profiles** and evaluate:
  - Code quality, activity, and consistency  
  - Project relevance and complexity  
  - Collaboration and open-source contributions  
  - Tech stack expertise  
- Analyze **Resumes (PDF / DOCX / TXT)** and summarize:
  - Skills and technologies  
  - Work experience and roles  
  - Achievements and career trajectory  
- Generate **actionable recommendations** for improvement or hiring decisions  
- Clean, readable evaluation reports suitable for managers or candidates  
- Easily extendable for other platforms (LinkedIn, portfolio websites)

## Tech Stack

- **TypeScript** – Core language  
- **Node.js** – Runtime environment  
- **OpenAI API (ChatGPT)** – Natural language analysis  
- **Axios / Fetch** – API requests to GitHub or resume parsing services  
- **PDF/Docx parsing libraries** – `pdf-parse` or `docx` for resume analysis  


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
