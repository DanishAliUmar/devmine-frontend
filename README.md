This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

```

│   ├── app/
│   │   ├── (marketing)/          # Marketing pages group
│   │   │   ├── page.tsx           # Home/Landing page
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── contact/
│   │   │   └── layout.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/                # Layout components
│   │   │   ├── header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── MobileNav.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   ├── footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── FooterLinks.tsx
│   │   │   └── container/
│   │   │       └── Container.tsx
│   │   ├── sections/              # Page sections
│   │   │   ├── hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── HeroBackground.tsx
│   │   │   ├── services/
│   │   │   │   ├── Services.tsx
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   └── ServiceGrid.tsx
│   │   │   ├── features/
│   │   │   │   ├── Features.tsx
│   │   │   │   └── FeatureCard.tsx
│   │   │   ├── process/
│   │   │   │   ├── Process.tsx
│   │   │   │   └── ProcessStep.tsx
│   │   │   ├── testimonials/
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   └── TestimonialCard.tsx
│   │   │   ├── stats/
│   │   │   │   ├── Stats.tsx
│   │   │   │   └── StatCard.tsx
│   │   │   ├── cta/
│   │   │   │   └── CTA.tsx
│   │   │   └── contact/
│   │   │       ├── ContactForm.tsx
│   │   │       └── ContactInfo.tsx
│   │   └── shared/                # Shared/reusable components
│   │       ├── AnimatedSection.tsx
│   │       ├── GradientText.tsx
│   │       ├── SectionHeading.tsx
│   │       └── IconWrapper.tsx
│   ├── lib/
│   │   ├── utils.ts               # Utility functions (cn, etc.)
│   │   ├── constants.ts           # App constants
│   │   └── validations.ts         # Zod schemas
│   ├── types/
│   │   ├── index.ts               # Main types export
│   │   ├── service.types.ts
│   │   ├── testimonial.types.ts
│   │   ├── process.types.ts
│   │   ├── navigation.types.ts
│   │   └── common.types.ts
│   ├── data/
│   │   ├── services.data.ts
│   │   ├── testimonials.data.ts
│   │   ├── navigation.data.ts
│   │   └── stats.data.ts
│   └── hooks/
│       ├── useScrollSpy.ts
│       ├── useInView.ts
│       └── useMediaQuery.ts
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
