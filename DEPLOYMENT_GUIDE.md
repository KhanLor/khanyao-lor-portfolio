# Deployment & Setup Guide

Complete guide to set up your portfolio with Supabase and deploy to Vercel.

## Table of Contents

1. [Supabase Setup](#supabase-setup)
2. [Vercel Deployment](#vercel-deployment)
3. [Domain Setup](#domain-setup)
4. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Supabase Setup

### Step 1: Create a Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Sign In" or "Start Your Project"
3. Sign up with GitHub, Google, or email
4. Create a new project

### Step 2: Get Your Credentials

1. Go to your Supabase project dashboard
2. Click "Settings" → "API"
3. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon (public) Key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Save these credentials in `.env.local`

### Step 3: Create Database Tables

1. Go to the **SQL Editor** section in Supabase
2. Create a new query and run the following SQL:

#### Projects Table
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

-- Create index for faster queries
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_created_at ON projects(created_at);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "projects_public_read" ON projects
FOR SELECT USING (true);
```

#### Contact Messages Table
```sql
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create index for faster queries
CREATE INDEX idx_contact_created_at ON contact_messages(created_at);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public insert access
CREATE POLICY "contact_public_insert" ON contact_messages
FOR INSERT WITH CHECK (true);

-- Allow authenticated admin to read all messages
CREATE POLICY "contact_admin_read" ON contact_messages
FOR SELECT USING (
  auth.role() = 'authenticated'
);
```

### Step 4: Insert Sample Data (Optional)

```sql
INSERT INTO projects (title, description, technologies, featured) VALUES
(
  'Kamay-Kainan Website',
  'A modern restaurant website with responsive design and user-friendly interface.',
  ARRAY['Next.js', 'TypeScript', 'Tailwind CSS', 'PLpgSQL'],
  true
),
(
  'Smart Waste Tracking System',
  'Real-time waste collection and tracking system with integrated location tracking.',
  ARRAY['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  true
),
(
  'Messianic Believer Website',
  'Religion-based informational website focused on responsive design.',
  ARRAY['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  false
),
(
  'Penong''s Inventory System',
  'Inventory management system for stock tracking with product monitoring.',
  ARRAY['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  false
);
```

---

## Vercel Deployment

### Step 1: Prepare Your Repository

1. Initialize Git if you haven't already:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub:
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

### Step 2: Connect to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Find and select your portfolio repository
5. Click "Import"

#### Option B: Using Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Step 3: Configure Environment Variables

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Environment Variables"
3. Add the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Click "Save"

### Step 4: Deploy

1. Click "Deploy"
2. Vercel will automatically build and deploy your project
3. Your site will be live at: `https://your-project.vercel.app`

---

## Domain Setup

### Add a Custom Domain (Optional)

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Enter your custom domain (e.g., `khanyao.com`)
3. Follow the DNS configuration instructions
4. Point your domain nameservers to Vercel

#### Example DNS Records for Common Providers:
- **GoDaddy**: Update nameservers to Vercel's nameservers
- **Cloudflare**: Add Vercel's nameservers
- **Route 53 (AWS)**: Add Vercel's DNS records

---

## Post-Deployment Checklist

- [ ] Site is accessible at custom domain (if configured)
- [ ] Contact form is working (test sending a message)
- [ ] Dark mode toggle works properly
- [ ] All project links work correctly
- [ ] Resume PDF displays and downloads properly
- [ ] Mobile responsive design looks good
- [ ] Performance is acceptable (check Vercel Analytics)
- [ ] SEO metadata is correct (check page source)

---

## Monitoring & Maintenance

### View Deployment Logs

1. In Vercel, click your project
2. Click "Deployments"
3. Select a deployment to view logs

### Update Your Site

```bash
# Make changes locally
git add .
git commit -m "Update description"
git push

# Vercel automatically redeploys on push
```

### Update Database

1. Go to Supabase dashboard
2. Navigate to "SQL Editor" or "Table Editor"
3. Add/update your projects data

### Monitor Performance

1. In Vercel, click "Analytics"
2. View Core Web Vitals and usage metrics

### Troubleshooting

**Build fails on deploy:**
- Check Vercel build logs for errors
- Ensure all environment variables are set
- Test locally with `npm run build`

**Contact form not working:**
- Verify Supabase tables exist
- Check RLS policies allow insert
- Review Supabase logs for errors

**Slow performance:**
- Optimize images
- Check Vercel Analytics
- Review database queries

---

## Advanced Configuration

### Add Environment Secrets (Optional)

For server-side operations:

```bash
# Generate a Supabase service role key (for admin operations)
# Go to Supabase → Settings → API → Service Role Key

# Add to Vercel (don't expose to frontend):
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Add Analytics

```typescript
// In src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

---

## Security Best Practices

1. ✅ Keep `.env.local` in `.gitignore`
2. ✅ Use public keys (anon) for frontend-only access
3. ✅ Enable Row Level Security (RLS) on Supabase tables
4. ✅ Validate form input on both client and server
5. ✅ Use HTTPS only (Vercel/Supabase provide this by default)
6. ✅ Keep dependencies updated: `npm update`

---

## Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment/vercel)
- [Supabase RLS](https://supabase.com/docs/guides/auth/row-level-security)

---

Need help? Check the main [README.md](./README.md) or visit the documentation links above.
