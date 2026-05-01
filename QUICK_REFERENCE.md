# Quick Reference Guide

Quick commands and snippets for working with your portfolio.

## 🚀 Common Commands

### Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript
```

### Installation & Updates
```bash
npm install          # Install dependencies
npm update           # Update all packages
npm outdated         # Check outdated packages
```

### Database
```bash
# No CLI needed - use Supabase dashboard or execute SQL in their editor
# See DEPLOYMENT_GUIDE.md for SQL scripts
```

## 📂 File Locations

### Add/Update...
| What | Where |
|------|-------|
| Your name/title | `src/components/sections/hero.tsx` |
| About description | `src/components/sections/about.tsx` |
| Projects | `src/components/sections/projects.tsx` |
| Experience | `src/components/sections/experience.tsx` |
| Social links | `src/components/footer.tsx` |
| Colors | `tailwind.config.ts` |
| Resume PDF | `public/resume.pdf` |
| Images | `public/images/` |
| Environment vars | `.env.local` |

## 🎨 Common Tailwind Classes

### Sizing
```typescript
// Width
w-full, w-1/2, w-96

// Height
h-screen, h-96, h-20

// Padding
p-4, px-6, py-2

// Margin
m-4, mx-auto, my-2

// Gap
gap-4, gap-x-6, gap-y-2
```

### Colors
```typescript
// Background
bg-white, bg-slate-50, bg-blue-600, bg-gradient-to-r

// Text
text-slate-900, text-blue-600, text-lg

// Border
border, border-2, border-slate-300, rounded-lg
```

### Flexbox
```typescript
// Container
flex, flex-col, flex-wrap

// Alignment
justify-center, items-center, gap-4

// Responsive
flex-col sm:flex-row, md:grid-cols-2
```

### Responsive
```typescript
// Mobile first
sm:  // 640px
md:  // 768px
lg:  // 1024px
xl:  // 1280px
2xl: // 1536px

// Examples
md:grid-cols-2, sm:flex-row, lg:text-2xl
```

## 🔧 TypeScript Snippets

### Functional Component
```typescript
'use client'  // Add if using hooks

interface Props {
  title: string
  count?: number
}

export default function MyComponent({ title, count = 0 }: Props) {
  return <div>{title}</div>
}
```

### API Call to Supabase
```typescript
import { supabase } from '@/lib/supabase'

const { data, error } = await supabase
  .from('table_name')
  .select('*')
  .eq('id', someId)

if (error) console.error(error)
else console.log(data)
```

### Form with State
```typescript
'use client'

import { useState } from 'react'

export default function Form() {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Do something with value
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

### useEffect Hook
```typescript
'use client'

import { useEffect, useState } from 'react'

export default function Component() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Fetch or setup
    fetchData()
  }, []) // Empty array = run once on mount

  return <div>{data}</div>
}
```

## 🌓 Dark Mode

### Using Theme in Component
```typescript
'use client'

import { useTheme } from 'next-themes'

export default function Component() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

### Dark Mode CSS Classes
```typescript
// Light mode only
className="bg-white dark:bg-slate-900"

// Automatically applies to all children
className="dark"

// Conditional classes
theme === 'dark' ? 'dark:text-white' : 'text-black'
```

## 🔗 Important Links

### Local Development
- App: http://localhost:3000
- Next.js Docs: https://nextjs.org/docs

### Services
- Supabase: https://supabase.com/dashboard
- Vercel: https://vercel.com/dashboard
- GitHub: https://github.com

### Documentation
- Setup: [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- Deployment: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- Customization: [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
- Full Docs: [DOCUMENTATION.md](./DOCUMENTATION.md)

## 🐛 Debugging

### Check Console
```bash
# Browser console (F12 → Console tab)
# Look for errors and warnings
```

### Server Logs
```bash
# Terminal running `npm run dev`
# Shows server-side errors and Next.js messages
```

### Supabase Logs
```bash
# Supabase Dashboard → Logs
# View database queries and errors
```

### Type Checking
```bash
npm run type-check
# Finds TypeScript errors
```

## 💾 Version Control (Git)

```bash
# Status
git status

# Add changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub
git push

# View logs
git log --oneline -5
```

## 📦 Dependency Commands

```bash
# Add a package
npm install package-name

# Remove a package
npm uninstall package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated

# Clear cache
npm cache clean --force
```

## ⚙️ Environment Variables

Required for local development:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

For Vercel (add in dashboard Settings → Environment Variables)

## 🎨 Color Palette

Default colors in `tailwind.config.ts`:
- Primary: `#3b82f6` (Blue)
- Secondary: `#1f2937` (Dark Gray)
- Accent: `#a855f7` (Purple in gradients)

Change in `tailwind.config.ts` for brand colors.

## 📱 Breakpoints

```
Mobile:     < 640px (sm)
Tablet:     640px - 1023px (md, lg)
Desktop:    > 1024px (xl, 2xl)
```

## 🔐 Security Reminders

✅ DO:
- Keep `.env.local` in `.gitignore`
- Use `NEXT_PUBLIC_` prefix only for client-side vars
- Validate form input
- Enable RLS on Supabase tables

❌ DON'T:
- Commit `.env.local` to Git
- Hardcode API keys
- Expose secret keys to client
- Skip TypeScript validation

## 📚 Resource Files

| File | Purpose |
|------|---------|
| `src/` | All source code |
| `public/` | Static files (add resume here!) |
| `src/app/` | Pages and layout |
| `src/components/` | React components |
| `src/lib/` | Utilities and clients |
| `.env.local` | Environment variables |
| `tailwind.config.ts` | Style configuration |
| `tsconfig.json` | TypeScript settings |

---

For more detailed help, see the full documentation files.
Happy coding! 🚀
