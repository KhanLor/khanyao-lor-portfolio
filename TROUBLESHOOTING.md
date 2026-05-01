# Troubleshooting Guide

Comprehensive troubleshooting for common issues.

## 🔴 Critical Issues

### Issue: "Failed to compile" error on startup

**Symptoms:**
- Red errors in terminal after `npm run dev`
- Page shows "Something went wrong"

**Solutions:**
1. Check for TypeScript errors:
   ```bash
   npm run type-check
   ```

2. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```

3. Check for syntax errors in recent edits

4. Restart the dev server:
   ```bash
   # Press Ctrl+C in terminal
   npm run dev
   ```

---

### Issue: Module not found errors

**Symptoms:**
```
Module not found: Can't resolve '@/components/...'
```

**Solutions:**
1. Check file path is correct (case-sensitive)
2. Verify file exists in the location
3. Check `tsconfig.json` path aliases:
   ```json
   "paths": {
     "@/*": ["src/*"]
   }
   ```
4. Clear node_modules:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 🟡 Common Issues

### Issue: Dark mode not persisting

**Symptoms:**
- Dark mode doesn't save when page refreshes
- Theme reverts to system default

**Causes:**
- Browser cache issues
- `ThemeProvider` not properly initialized
- Cookies/localStorage disabled

**Solutions:**
1. Clear browser data:
   - Press F12 → Application → Clear all
   - Or: Ctrl+Shift+Delete

2. Check `src/app/layout.tsx` has:
   ```typescript
   <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
   ```

3. Check `next-themes` is installed:
   ```bash
   npm list next-themes
   ```

4. Try in incognito/private mode (tests if cookies work)

---

### Issue: Supabase connection errors

**Symptoms:**
```
Error: Missing Supabase configuration
Cannot POST /api/contact
```

**Causes:**
- Missing `.env.local` file
- Wrong credentials
- Supabase project inactive
- Network/CORS issues

**Solutions:**
1. Verify `.env.local` exists with correct values:
   ```bash
   cat .env.local  # macOS/Linux
   type .env.local  # Windows
   ```

2. Check values in [Supabase Dashboard](https://supabase.com/dashboard):
   - Go to Settings → API
   - Copy exact URL and Anon Key

3. Restart dev server after updating `.env.local`:
   ```bash
   npm run dev
   ```

4. Verify tables exist in Supabase:
   - Go to Table Editor
   - Look for `projects` and `contact_messages` tables

5. Check RLS policies allow access:
   - Click table → RLS
   - Enable public insert/select

---

### Issue: Contact form not submitting

**Symptoms:**
- Form appears to submit but no error message
- Network tab shows 400/500 error
- No data appears in Supabase

**Possible Causes:**
- Table doesn't exist
- RLS policies too restrictive
- Invalid form data
- Network request blocked

**Solutions:**
1. Open browser DevTools (F12):
   - Go to Network tab
   - Submit form
   - Click the request
   - Check Response tab for error details

2. Verify table exists in Supabase:
   ```sql
   SELECT * FROM contact_messages LIMIT 1;
   ```

3. Check RLS policies:
   ```sql
   SELECT * FROM information_schema.table_privileges 
   WHERE table_name = 'contact_messages';
   ```

4. Test form validation:
   - Try submitting with invalid email
   - Should show "Please enter a valid email address"

5. Check console for JavaScript errors (F12 → Console)

---

### Issue: Resume PDF not displaying

**Symptoms:**
- "View Resume" button does nothing
- Download gives 404 error
- Button works but page says not found

**Solutions:**
1. Add resume file:
   ```bash
   # Place your PDF at:
   public/resume.pdf
   ```

2. Restart dev server:
   ```bash
   npm run dev
   ```

3. Check filename exactly matches links:
   - In `src/components/sections/about.tsx`
   - Should be: `href="/resume.pdf"`

4. Test with browser DevTools:
   - F12 → Network tab
   - Click the button
   - Check request URL and response

---

### Issue: Styling issues / Tailwind not working

**Symptoms:**
- Classes not applying
- Styles appear inconsistent
- Colors different than expected
- Dark mode classes ignored

**Solutions:**
1. Verify Tailwind content paths in `tailwind.config.ts`:
   ```typescript
   content: [
     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   ```

2. Check class name is valid Tailwind class
3. Rebuild Tailwind:
   ```bash
   npm run dev  # Automatically rebuilds
   ```

4. For custom classes, use `@apply` in CSS:
   ```css
   .custom-class {
     @apply px-4 py-2 rounded-lg bg-blue-600;
   }
   ```

5. Clear browser cache (F12 → Network → Disable cache)

---

### Issue: Mobile menu not closing

**Symptoms:**
- Menu stays open after clicking link
- Can't click menu toggle
- Menu overlaps content

**Solutions:**
1. Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R)

2. Check `src/components/navbar.tsx` has close on link click:
   ```typescript
   onClick={() => setIsOpen(false)}
   ```

3. Check z-index in CSS doesn't conflict with other elements

---

### Issue: Slow performance / site takes long to load

**Symptoms:**
- Page takes > 3 seconds to load
- Lighthouse score < 70
- Images load slowly

**Solutions:**
1. Check network in DevTools (F12 → Network):
   - Sort by size
   - Look for large files
   - Optimize or remove if possible

2. Optimize images:
   - Use Next.js `<Image>` component
   - Resize images before uploading
   - Use WebP format

3. Check build size:
   ```bash
   npm run build
   # Look for large chunks in output
   ```

4. Verify Supabase queries are optimized:
   - Only select needed columns
   - Add indexes if fetching 1000+ rows
   - Consider pagination

---

## 🔵 Deployment Issues

### Issue: Deployment fails on Vercel

**Symptoms:**
- Build fails with "npm run build" error
- Deployment shows error in logs
- Works locally but not on Vercel

**Solutions:**
1. Check Vercel build logs:
   - Vercel Dashboard → Project → Deployments
   - Click failed deployment
   - Expand logs to see error

2. Test build locally:
   ```bash
   npm run build
   npm start
   ```

3. Verify environment variables in Vercel:
   - Settings → Environment Variables
   - Check exact key names match `.env.local`
   - Redeploy after adding variables

4. Common build errors:
   - **Type errors**: Run `npm run type-check`
   - **Module not found**: Check imports
   - **Timeout**: Large build, increase timeout in vercel.json

---

### Issue: Environment variables not working in Vercel

**Symptoms:**
- Works locally but fails on Vercel
- Supabase connection errors on production
- Error: "Missing Supabase configuration"

**Solutions:**
1. Verify in Vercel dashboard:
   - Project → Settings → Environment Variables
   - Check all required vars are present

2. Variables must be prefixed correctly:
   - Client-side: `NEXT_PUBLIC_*`
   - Server-side: `*` (any name)

3. Redeploy after adding variables:
   - Vercel won't use new vars without redeploy
   - Go to Deployments → Click last one → Redeploy

4. Check variable values have no extra spaces:
   - `NEXT_PUBLIC_SUPABASE_URL = https://...` ❌ (space before =)
   - `NEXT_PUBLIC_SUPABASE_URL=https://...` ✅

---

## 🟢 Debugging Tools

### Browser DevTools (F12)

**Console Tab:**
```javascript
// Check environment variables
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)

// Test component state
console.log('Current theme:', theme)
```

**Network Tab:**
- See all requests and responses
- Check Supabase API calls
- Verify correct status codes (200 = good, 4xx/5xx = error)

**Application Tab:**
- Check localStorage for theme preference
- Check cookies
- Clear cache if needed

### Terminal Debugging

```bash
# See full build output
npm run build -- --verbose

# Type checking
npm run type-check

# Run linter
npm run lint

# Clear all caches
rm -rf .next node_modules package-lock.json
npm install && npm run dev
```

### Supabase Dashboard

1. **SQL Editor** - Run test queries
2. **Table Editor** - View/edit data directly
3. **Logs** - See database queries and errors
4. **Auth** - Check user permissions

---

## 🆘 Emergency Fixes

### Complete Reset (Nuclear Option)

```bash
# WARNING: This removes everything and starts fresh
rm -rf node_modules .next .env.local
npm install
cp .env.local.example .env.local
# Edit .env.local with your values
npm run dev
```

### Git Revert to Last Working State

```bash
# See recent commits
git log --oneline -5

# Revert to a specific commit
git revert COMMIT_HASH

# Or reset (careful - loses changes)
git reset --hard COMMIT_HASH
```

### Check System Requirements

```bash
# Verify Node.js version
node --version
# Should be 18.17+

# Verify npm version
npm --version
# Should be latest

# Update if needed
npm install -g npm@latest
```

---

## 📞 Getting Help

If you're stuck:

1. **Check relevant documentation:**
   - README.md - General info
   - SETUP_GUIDE.md - Setup issues
   - DEPLOYMENT_GUIDE.md - Deployment issues
   - CUSTOMIZATION_GUIDE.md - Code issues

2. **Search error message:**
   - Exact error in Google
   - Check Stack Overflow
   - GitHub issues for Next.js/React

3. **Official Resources:**
   - [Next.js Docs](https://nextjs.org/docs)
   - [Supabase Docs](https://supabase.com/docs)
   - [Vercel Support](https://vercel.com/support)

4. **Ask for help:**
   - Show error messages
   - Share code snippet
   - Describe what you tried
   - Include system info (Node version, OS)

---

## 🐛 Reporting Issues

If you find a bug, include:
- Error message (exact text)
- Steps to reproduce
- What you expected to happen
- What actually happened
- Environment info (Node version, OS, browser)

This helps identify and fix issues faster!

---

**Last Updated:** May 2026
