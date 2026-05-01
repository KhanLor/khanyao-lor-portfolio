# Development & Customization Guide

Guide for developers to customize and extend the portfolio website.

## File Structure Overview

```
khanyao-lor-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata, theme setup
│   │   ├── page.tsx            # Home page (imports all sections)
│   │   └── globals.css         # Global styles and animations
│   ├── components/
│   │   ├── navbar.tsx          # Navigation with dark mode toggle
│   │   ├── footer.tsx          # Footer with social links
│   │   ├── contact-form.tsx    # Contact form with validation
│   │   ├── container.tsx       # Max-width wrapper component
│   │   ├── theme-provider.tsx  # Dark mode provider
│   │   └── sections/
│   │       ├── hero.tsx        # Landing/hero section
│   │       ├── about.tsx       # About section with resume
│   │       ├── projects.tsx    # Projects showcase
│   │       ├── experience.tsx  # Experience timeline
│   │       └── contact.tsx     # Contact section
│   └── lib/
│       └── supabase.ts         # Supabase client and queries
├── public/
│   ├── README.md               # Guide for public assets
│   └── resume.pdf              # Your resume (add this)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── .env.local.example
└── README.md
```

## Common Customizations

### 1. Change Color Scheme

**File:** `tailwind.config.ts`

```typescript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Blue
      secondary: '#1f2937',  // Dark gray
    },
  },
}
```

Popular color combinations:
- **Blue + Purple**: `#3b82f6` + `#a855f7`
- **Green + Teal**: `#10b981` + `#06b6d4`
- **Red + Orange**: `#ef4444` + `#f97316`

### 2. Update Social Links

**File:** `src/components/footer.tsx`

```typescript
{
  href: 'https://github.com/yourusername',  // Change this
  target: '_blank',
  rel: 'noopener noreferrer',
  'aria-label': 'GitHub',
}
```

### 3. Modify Navigation Items

**File:** `src/components/navbar.tsx`

```typescript
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },    // Add new item
  { label: 'Contact', href: '#contact' },
]
```

### 4. Add New Section

1. Create new component in `src/components/sections/`:

```typescript
// src/components/sections/blog.tsx
export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-950">
      {/* Your content */}
    </section>
  )
}
```

2. Import in `src/app/page.tsx`:

```typescript
import Blog from '@/components/sections/blog'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Blog />  {/* Add here */}
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
```

### 5. Customize Typography

**File:** `tailwind.config.ts`

```typescript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
  serif: ['Playfair Display', 'serif'],
}
```

Then use in components:
```tsx
<h1 className="font-serif">Serif Heading</h1>
<p className="font-sans">Sans-serif text</p>
```

### 6. Add Project Dynamically from Supabase

**File:** `src/components/sections/projects.tsx`

Replace the static projects array:

```typescript
'use client'

import { useEffect, useState } from 'react'
import { getProjects } from '@/lib/supabase'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjects()
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to fetch projects:', err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading projects...</div>

  return (
    // ... your JSX
  )
}
```

### 7. Add Newsletter Signup

Create a new component:

```typescript
// src/components/newsletter.tsx
'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter logic here
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg border"
      />
      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">
        Subscribe
      </button>
    </form>
  )
}
```

### 8. Add Blog Section

Create blog files:

```typescript
// src/app/blog/page.tsx
import Link from 'next/link'

const posts = [
  { id: 1, title: 'Post Title', slug: 'post-title', date: '2024-01-01' },
]

export default function BlogPage() {
  return (
    <div>
      {posts.map(post => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </div>
  )
}
```

### 9. Implement Search Functionality

Create a search component with Supabase full-text search:

```typescript
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Search() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')

  const handleSearch = async (value: string) => {
    setQuery(value)
    if (value.length < 2) return

    const { data } = await supabase
      .from('projects')
      .select()
      .ilike('title', `%${value}%`)

    setResults(data || [])
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search projects..."
      />
      {results.map(result => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  )
}
```

### 10. Add Image Gallery

Using Next.js Image component:

```typescript
import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: '/images/project-1.jpg', alt: 'Project 1' },
    { src: '/images/project-2.jpg', alt: 'Project 2' },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {images.map(img => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          width={400}
          height={300}
          className="rounded-lg object-cover"
        />
      ))}
    </div>
  )
}
```

## Advanced Features

### Add Dark Mode Toggle Storage

The `next-themes` package automatically handles this, but you can customize:

```typescript
// In theme-provider.tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  storageKey="portfolio-theme"  // Custom storage key
>
```

### Add Analytics

```bash
npm install @vercel/analytics
```

```typescript
// In app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Add Error Tracking

```bash
npm install @sentry/nextjs
```

Follow [Sentry documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

## Performance Optimization

### 1. Image Optimization

```typescript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority  // For above-the-fold images
  quality={75}  // Adjust quality
/>
```

### 2. Code Splitting

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@/components/heavy'))
```

### 3. Caching Strategy

```typescript
// In next.config.js
images: {
  minimumCacheTTL: 31536000,  // 1 year
}
```

## Testing

### Install Testing Library

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

### Example Test

```typescript
// src/components/__tests__/navbar.test.tsx
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/navbar'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})
```

## Deployment Checklist

Before deploying:

- [ ] All custom information updated
- [ ] Resume PDF added
- [ ] Images optimized
- [ ] No console errors
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] All links working
- [ ] Contact form tested (if Supabase connected)
- [ ] Environment variables set in Vercel

## TypeScript Tips

### Type-safe Component Props

```typescript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
}: ButtonProps) {
  // Component logic
}
```

### Environment Variable Types

```typescript
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    }
  }
}
```

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Happy customizing! 🎨
