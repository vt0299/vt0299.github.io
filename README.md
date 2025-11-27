# Vasu Thakur - Portfolio Website

A modern, responsive portfolio website showcasing AI/ML projects, skills, and professional experience.

## 🌟 Features

- **Modern Design**: Dark theme with vibrant gradients and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **4 Pages**: Home, Projects, About, Contact
- **Interactive**: Project filtering, smooth scrolling, contact form
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Lightweight vanilla JavaScript (no frameworks)

## 📁 Project Structure

```
Profile/
├── index.html          # Home page with hero section and featured projects
├── projects.html       # All projects with filtering
├── about.html          # Education, experience, publications, skills
├── contact.html        # Contact information and form
├── styles.css          # Complete styling system
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🚀 How to Host on GitHub Pages (FREE)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `vt0299.github.io` (using your GitHub username)
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all files (index.html, projects.html, about.html, contact.html, styles.css, script.js)
3. Scroll down and click "Commit changes"

**Option B: Using Git (Command Line)**
```bash
# Navigate to your Profile directory
cd /Users/vasu/Desktop/Profile

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - portfolio website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/vt0299/vt0299.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be live at: **https://vt0299.github.io**

## 🎨 Customization

### Update Contact Information

Edit `contact.html` to update:
- Email address
- Phone number
- LinkedIn URL
- GitHub URL

### Add More Projects

Edit `projects.html`:
1. Copy an existing `.project-card` div
2. Update the project icon, title, description, tags, and GitHub link
3. Add appropriate `data-category` for filtering

### Change Colors

Edit `styles.css` in the `:root` section:
- `--gradient-primary`: Main gradient color
- `--accent-primary`: Accent color for links and highlights
- `--bg-primary`: Background color

### Add Your Photo (Optional)

1. Add your profile photo to the folder (e.g., `profile.jpg`)
2. In `about.html`, add an image section:
```html
<div class="profile-photo">
    <img src="profile.jpg" alt="Vasu Thakur">
</div>
```

## 🔧 Local Development

To test locally before uploading:

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Then open http://localhost:8000 in your browser
   ```

## 📱 Mobile Responsive

The website is fully responsive and works perfectly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌐 Alternative Hosting Options

If you prefer not to use GitHub Pages:

1. **Netlify** (Free): Drag & drop your folder at netlify.com
2. **Vercel** (Free): Import from GitHub at vercel.com
3. **Google Drive**: While possible, not recommended for developer portfolios

## 📊 Analytics (Optional)

To track visitors, add Google Analytics:

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking code
3. Add before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 🎯 Next Steps

1. Upload to GitHub Pages
2. Share your portfolio link on:
   - LinkedIn profile
   - GitHub profile README
   - Resume/CV
   - Email signature
3. Keep it updated with new projects
4. Consider adding a blog section

## 📝 License

Feel free to use this template for your own portfolio!

## 🤝 Support

For questions or issues:
- Email: vasuthhakur@gmail.com
- GitHub: [@vt0299](https://github.com/vt0299)

---

**Built with** ❤️ **using vanilla HTML, CSS, and JavaScript**
