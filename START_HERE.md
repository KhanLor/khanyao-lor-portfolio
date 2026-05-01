# 🚀 Welcome to Your Portfolio Website!

**START HERE** → Follow this guide to get your portfolio up and running.

## ⚡ 5-Minute Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.local.example .env.local

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000 🎉
```

**That's it!** Your portfolio is now running locally.

---

## 📋 Next: Customize Your Content

### Step 1: Update Personal Information (5 min)

Edit these files with your info:

1. **src/components/sections/hero.tsx** - Your name, title, intro
2. **src/components/sections/about.tsx** - Your bio and skills
3. **src/components/sections/projects.tsx** - Your projects
4. **src/components/sections/experience.tsx** - Your experience
5. **src/components/footer.tsx** - Social links

### Step 2: Add Your Resume (2 min)

1. Save your resume as PDF: `public/resume.pdf`
2. The download/view buttons will work automatically
3. Restart dev server to see it: Press Ctrl+C, then `npm run dev`

### Step 3: Test Everything Locally (5 min)

- [ ] Navigation works
- [ ] Dark mode toggle works (top right)
- [ ] All sections display correctly
- [ ] Links to projects work
- [ ] Resume buttons work
- [ ] Mobile responsive (resize browser window)

---

## 🗄️ Backend Setup (Optional - 10 min)

To make the **contact form** functional:

### 1. Create Supabase Account
- Go to [supabase.com](https://supabase.com)
- Sign up (free)
- Create a new project

### 2. Get Your API Keys
- In Supabase dashboard
- Click Settings → API
- Copy: **Project URL** and **Anon Key**

### 3. Configure Your App
- Edit `.env.local`:
  ```env
  NEXT_PUBLIC_SUPABASE_URL=your_project_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
  ```

### 4. Create Database Tables
- In Supabase, go to SQL Editor
- Copy the SQL from [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#step-3-create-database-tables)
- Run it

### 5. Restart Your App
```bash
# Stop: Ctrl+C
# Start: npm run dev
```

**Contact form now works! 🎉**

---

## 🌐 Deploy to Production (15 min)

Ready to go live?

### 1. Push to GitHub
```bash
git add .
git commit -m "My portfolio website"
git push
```

### 2. Deploy to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repo
- Add environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Click "Deploy"

Your site is now live! Get the URL from Vercel. 🚀

### 3. (Optional) Add Custom Domain
- In Vercel settings
- Add your domain (like khanyao.com)
- Follow DNS instructions

For detailed steps, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 📚 Documentation

### Getting Started
- **This file** - Quick overview & setup
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Detailed local setup
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Commands & snippets

### For Development
- [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - How to customize
- [README.md](./README.md) - Complete documentation
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Fix common issues

### For Deployment
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Deploy & Supabase setup
- [DOCUMENTATION.md](./DOCUMENTATION.md) - Full index

### Quick Reference
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Commands, snippets, tips

---

## 🎨 What You Get

✅ Modern, responsive design  
✅ Dark/light mode toggle  
✅ Mobile-friendly  
✅ Contact form (with Supabase)  
✅ Project showcase  
✅ Experience timeline  
✅ Skills display  
✅ Resume buttons  
✅ Social links  
✅ Fast performance  
✅ SEO optimized  
✅ TypeScript support  

---

## 🔧 Technology Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Supabase** - Backend (optional)
- **Vercel** - Hosting

---

## 🎯 Common Tasks

| Task | File | Time |
|------|------|------|
| Change your name | `src/components/sections/hero.tsx` | 1 min |
| Update projects | `src/components/sections/projects.tsx` | 5 min |
| Change colors | `tailwind.config.ts` | 2 min |
| Add social links | `src/components/footer.tsx` | 2 min |
| Enable contact form | `.env.local` + Supabase | 10 min |
| Deploy | GitHub + Vercel | 5 min |

See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for more.

---

## ❓ Stuck?

### Issue: Site won't start
```bash
npm install
npm run dev
```

### Issue: Can't find a file
Check [File Structure Guide](./DOCUMENTATION.md#-project-structure)

### Issue: Dark mode not working
Clear cache: Ctrl+Shift+Delete (or F12 → Application → Clear all)

### Issue: Contact form not working
Follow [Supabase Setup](#-backend-setup-optional---10-min) above

**Still stuck?** See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

---

## 📝 Checklist

Before going live:

- [ ] Customized all personal info
- [ ] Added resume PDF to `public/resume.pdf`
- [ ] Tested locally with `npm run dev`
- [ ] Tested mobile responsiveness
- [ ] Tested dark mode
- [ ] Set up Supabase (if using contact form)
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel
- [ ] Set custom domain (optional)
- [ ] Tested live site

---

## 🎉 You're Ready!

Your portfolio website is complete and ready to showcase your work.

### Next Steps:
1. ✅ Run locally: `npm run dev`
2. ✅ Customize content
3. ✅ Add resume
4. ✅ Deploy to Vercel

**Questions?** Check the docs above or see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

---

## 📞 Your Contact Info

Keep your contact info updated:
- Email: khanyaolor123@gmail.com
- Phone: +63 948 618 7359
- Location: Davao City, Philippines

Update these in `src/components/sections/hero.tsx` and `src/components/footer.tsx`

---

## 🚀 Ready to Deploy?

Follow [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for step-by-step instructions.

Your portfolio is waiting to impress! 💼✨

---

**Version:** 1.0.0  
**Last Updated:** May 2026  
**Framework:** Next.js 15 + TypeScript + Tailwind CSS

Happy coding! 🎨
