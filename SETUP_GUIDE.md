# Quick Setup Guide

Complete step-by-step guide to get your portfolio running locally.

## Prerequisites

- Node.js 18.17 or later ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- A code editor (VS Code recommended: [Download](https://code.visualstudio.com/))

## Step 1: Initial Setup

### 1.1 Install Dependencies

```bash
npm install
```

This installs all required packages including:
- Next.js, React, TypeScript
- Tailwind CSS for styling
- Supabase client for backend
- Lucide React for icons
- Next-themes for dark mode

### 1.2 Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Windows (PowerShell)
copy .env.local.example .env.local

# macOS/Linux
cp .env.local.example .env.local
```

## Step 2: Customize Your Content

### 2.1 Update Personal Information

Edit the following files to personalize your portfolio:

**`src/components/sections/hero.tsx`**
- Update your name and title
- Modify the introduction text
- Add your email address

**`src/components/footer.tsx`**
- Update social media links
- Update email and phone
- Add GitHub/LinkedIn profile URLs

**`src/app/layout.tsx`**
- Change metadata title and description

### 2.2 Update Projects

Edit `src/components/sections/projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://project-link.com',
    featured: true,
  },
  // Add more projects...
]
```

### 2.3 Add Your Resume

1. Place your resume PDF in the `public/` folder
2. Name it `resume.pdf`
3. The links in the about section will automatically work

## Step 3: Run Locally

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

### Hot Reload

The development server automatically reloads when you save changes. Just edit a file and see the changes in your browser!

## Step 4: Test Features

- [ ] Navigate through all sections using the navbar
- [ ] Test the dark mode toggle (top right)
- [ ] Check responsive design (resize browser window)
- [ ] Test resume buttons (they won't work until you add a PDF)
- [ ] Try the contact form (it requires Supabase setup)

## Step 5: Supabase Setup (Optional but Recommended)

To enable the contact form:

### 5.1 Create a Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Sign up and create a new project
3. Wait for the project to initialize (1-2 minutes)

### 5.2 Get API Keys

1. Click "Settings" → "API" in your Supabase project
2. Copy **Project URL** and **Anon Key**
3. Paste into `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 5.3 Create Database Tables

1. Go to **SQL Editor** in Supabase
2. Click **New Query**
3. Copy-paste the SQL below and run it:

```sql
-- Create projects table
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

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable RLS (Row Level Security)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "projects_public_read" ON projects
FOR SELECT USING (true);

CREATE POLICY "contact_public_insert" ON contact_messages
FOR INSERT WITH CHECK (true);
```

### 5.4 Restart Development Server

```bash
# Stop the server (Ctrl+C)
# Start again
npm run dev
```

Now the contact form should work!

## Step 6: Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## Troubleshooting

### Issue: Port 3000 is already in use

```bash
npm run dev -- -p 3001
# Or kill the process on port 3000
```

### Issue: Dependencies not installing

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Environment variables not working

- Restart the dev server after updating `.env.local`
- Check that variables are prefixed with `NEXT_PUBLIC_` if used in browser
- Don't commit `.env.local` to Git

### Issue: Dark mode not working

- Clear browser cache: Ctrl+Shift+Delete
- Check console for errors: F12 → Console tab

## Next Steps

1. ✅ Customize all content
2. ✅ Set up Supabase (if using contact form)
3. ✅ Add your resume PDF
4. ✅ Test all features locally
5. ➡️ [Deploy to Vercel](./DEPLOYMENT_GUIDE.md)

## Need More Help?

- Check the full [README.md](./README.md)
- Read the [Deployment Guide](./DEPLOYMENT_GUIDE.md)
- Review the [Next.js Documentation](https://nextjs.org/docs)

---

Happy coding! 🚀
