# 🚀 Quick Start Guide - Deploy Your Portfolio

## You Have 3 Options to Deploy Your Website:

### ✨ Option 1: GitHub Pages (RECOMMENDED - FREE & Professional)

**Why GitHub Pages?**
- ✅ Free hosting forever
- ✅ Custom domain support (vt0299.github.io)
- ✅ Perfect for developer portfolios
- ✅ Automatic HTTPS
- ✅ Fast global CDN

**Deploy in 5 Minutes:**

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `vt0299.github.io`
   - Make it **Public**
   - Click "Create repository"

2. **Run the Deployment Script**
   ```bash
   cd /Users/vasu/Desktop/Profile
   ./deploy.sh
   ```
   
   Or manually:
   ```bash
   cd /Users/vasu/Desktop/Profile
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/vt0299/vt0299.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from "main" branch
   - Save

4. **✅ Done! Your site will be live at:**
   ```
   https://vt0299.github.io
   ```

---

### 🌐 Option 2: Netlify (Alternative - Also FREE)

1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `/Users/vasu/Desktop/Profile` folder
3. Get instant URL like: `your-name.netlify.app`
4. Optional: Add custom domain

---

### ☁️ Option 3: Vercel (Alternative - Also FREE)

1. Go to https://vercel.com/new
2. Import from GitHub or upload files
3. Deploy automatically
4. Get URL like: `your-portfolio.vercel.app`

---

## 📝 After Deployment

### Share Your Portfolio:

1. **Update LinkedIn**
   - Add website link to profile
   - Update "Contact Info" section

2. **Update GitHub Profile**
   - Edit your GitHub profile
   - Add website URL

3. **Update Resume/CV**
   - Add portfolio link at the top

4. **Email Signature**
   ```
   Vasu Thakur
   AI/ML Developer
   🌐 https://vt0299.github.io
   📧 vasuthhakur@gmail.com
   ```

---

## 🎨 Customize Your Portfolio

### Add Your Profile Picture:
1. Add image file to `/Users/vasu/Desktop/Profile/` (e.g., `profile.jpg`)
2. Update `about.html` with image tag

### Update Projects:
- Edit `projects.html`
- Copy existing project card template
- Update details

### Change Color Scheme:
- Edit `styles.css`
- Modify `:root` CSS variables

---

## 🔧 Need Help?

**Common Issues:**

1. **Website not loading?**
   - Wait 2-3 minutes after deployment
   - Clear browser cache
   - Check GitHub Actions tab for build status

2. **Styles not working?**
   - Ensure all files are in the same directory
   - Check file names are exact matches

3. **Want to update content?**
   ```bash
   cd /Users/vasu/Desktop/Profile
   # Make your changes
   git add .
   git commit -m "Update content"
   git push
   ```

---

## 📊 Current Files:

- ✅ `index.html` - Home page
- ✅ `projects.html` - All 10 projects
- ✅ `about.html` - Your CV info
- ✅ `contact.html` - Contact details
- ✅ `styles.css` - Modern dark theme
- ✅ `script.js` - Interactive features
- ✅ `README.md` - Documentation
- ✅ `deploy.sh` - Deployment helper

---

## 🎯 Next Steps:

1. ✅ Deploy to GitHub Pages (5 minutes)
2. ✅ Share on LinkedIn
3. ✅ Add to GitHub profile
4. ✅ Update resume
5. ⏳ Keep adding new projects
6. ⏳ Consider adding blog section
7. ⏳ Add Google Analytics

---

**Your portfolio showcases:**
- 10 AI/ML projects
- Professional experience
- 5 publications
- Complete skill set
- Contact information

**Ready to go live!** 🚀

For questions: vasuthhakur@gmail.com
