# Khanyao Lor - Portfolio Website

A modern, responsive personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Supabase**, and deployed on **Vercel**.

## 🎨 Features

- ✨ **Modern Design** - Clean and minimalist UI with smooth animations
- 🌓 **Dark Mode** - Full dark/light mode support with theme persistence
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- 🚀 **Fast Performance** - Optimized with Next.js App Router and static generation
- 💬 **Contact Form** - Functional contact form with Supabase backend
- 📊 **Projects Showcase** - Display your best projects with descriptions and tech stack
- 🎯 **Accessibility** - Semantic HTML and proper ARIA labels
- 📄 **Resume** - Integrated resume view and download functionality
- 🔗 **SEO Optimized** - Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **Backend/Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Theme Management**: Next-themes
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager
- Supabase account (for backend features)
- Vercel account (for deployment)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd khanyao-lor-portfolio
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Update the values with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## 🗄️ Supabase Setup

### Create Tables

1. **Projects Table**
```sql
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] NOT NULL,
  link VARCHAR(500),
  image_url VARCHAR(500),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);
```

2. **Contact Messages Table**
```sql
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);
```

### Enable Row Level Security (Optional but Recommended)

For better security, enable RLS on your tables:

```sql
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "projects_public_read" ON projects
FOR SELECT USING (true);

-- Allow public insert access to contact_messages
CREATE POLICY "contact_public_insert" ON contact_messages
FOR INSERT WITH CHECK (true);
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── navbar.tsx          # Navigation bar with dark mode toggle
│   ├── footer.tsx          # Footer
│   ├── contact-form.tsx    # Contact form component
│   ├── container.tsx       # Container wrapper
│   ├── theme-provider.tsx  # Theme provider
│   └── sections/           # Page sections
│       ├── hero.tsx        # Hero/landing section
│       ├── about.tsx       # About section with resume buttons
│       ├── projects.tsx    # Projects showcase
│       ├── experience.tsx  # Experience/timeline
│       └── contact.tsx     # Contact section
└── lib/
    └── supabase.ts        # Supabase client and utilities
```

## 🎨 Customization

### Update Personal Information

Edit your personal details in:
- `src/components/sections/hero.tsx` - Hero section content
- `src/components/footer.tsx` - Social links and contact info
- `src/app/layout.tsx` - Site metadata and title

### Add/Update Projects

Projects are currently defined in `src/components/sections/projects.tsx`. To use dynamic data from Supabase:

```typescript
const projects = await getProjects(); // From lib/supabase.ts
```

### Customize Theme Colors

Modify colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-primary-color',
      secondary: '#your-secondary-color',
    },
  },
},
```

### Add Your Resume

Place your resume PDF in the `public/` directory and update the resume links:

```html
<a href="/your-resume.pdf">Download Resume</a>
```

## 📦 Building for Production

```bash
npm run build
npm start
```

The build creates an optimized production build in the `.next` folder.

## 🚀 Deployment on Vercel

### Option 1: Connect GitHub Repository

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

## 🔐 Security Notes

- Never commit `.env.local` to your repository
- Use `.env.local.example` for template
- Enable Row Level Security on Supabase tables
- Use read-only anon keys for public features
- For sensitive operations, use service role keys only on the server

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and navigation
- Optimized images and lazy loading
- Fast loading times

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Proper color contrast ratios
- Readable font sizes

## 🐛 Troubleshooting

### Issue: Theme not persisting
- Clear browser cache and localStorage
- Check that `ThemeProvider` is properly configured

### Issue: Supabase connection error
- Verify environment variables are set correctly
- Check Supabase project is active
- Ensure API keys are valid

### Issue: Contact form not submitting
- Check Supabase tables exist and have proper RLS policies
- Verify contact_messages table has insert permission
- Check browser console for errors

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

**Khanyao Lor**
- Email: khanyaolor123@gmail.com
- Phone: +63 948 618 7359
- Location: Davao City, Philippines
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using Next.js, React, and Tailwind CSS