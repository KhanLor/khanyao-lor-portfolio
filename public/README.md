# Public Assets

This folder contains static assets for the portfolio website.

## Files to Add

### Resume
- Place your resume PDF as `resume.pdf` in this folder
- Used by the "View Resume" and "Download Resume" buttons
- Referenced in: `src/components/sections/about.tsx`

### Favicon
- Add `favicon.ico` for the website favicon
- You can generate one at: https://www.favicon-generator.org/

### Project Images (Optional)
- Add project images to showcase in the projects section
- Recommended dimensions: 400x300px for project cards
- Supported formats: PNG, JPG, WEBP

## Example Structure

```
public/
├── favicon.ico
├── resume.pdf
└── images/
    ├── project-1.jpg
    ├── project-2.jpg
    ├── project-3.jpg
    └── project-4.jpg
```

## Usage in Code

Reference assets in your components:

```tsx
// For images
import Image from 'next/image'
<Image src="/images/project-1.jpg" alt="Project" width={400} height={300} />

// For links
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
```

## Important Notes

- All files in the `public` folder are served at the root of your site
- Keep file sizes optimized (especially images) for better performance
- Use descriptive file names for better organization
