#!/bin/bash

# Portfolio Website Deployment Script
# This script will help you deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "Visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if already a git repository
if [ -d ".git" ]; then
    echo "📁 Git repository already exists"
    echo ""
    read -p "Do you want to push changes? (y/n): " push_changes
    if [ "$push_changes" = "y" ]; then
        git add .
        git commit -m "Update portfolio website"
        git push
        echo "✅ Changes pushed successfully!"
    fi
else
    echo "📝 Let's set up your GitHub repository"
    echo ""
    echo "First, create a repository on GitHub:"
    echo "1. Go to https://github.com/new"
    echo "2. Name it: vt0299.github.io"
    echo "3. Make it Public"
    echo "4. Do NOT initialize with README"
    echo "5. Click 'Create repository'"
    echo ""
    read -p "Have you created the repository? (y/n): " repo_created
    
    if [ "$repo_created" = "y" ]; then
        # Initialize git
        git init
        echo "✅ Git repository initialized"
        
        # Add all files
        git add .
        echo "✅ Files staged"
        
        # Commit
        git commit -m "Initial commit - portfolio website"
        echo "✅ Initial commit created"
        
        # Rename branch to main
        git branch -M main
        echo "✅ Branch renamed to main"
        
        # Add remote
        echo ""
        read -p "Enter your GitHub repository URL (e.g., https://github.com/vt0299/vt0299.github.io.git): " repo_url
        git remote add origin "$repo_url"
        echo "✅ Remote repository added"
        
        # Push to GitHub
        echo ""
        echo "Pushing to GitHub..."
        git push -u origin main
        
        echo ""
        echo "🎉 Deployment Complete!"
        echo "================================"
        echo "Your website will be live at: https://vt0299.github.io"
        echo "It may take 1-2 minutes to deploy."
        echo ""
        echo "Next steps:"
        echo "1. Go to your repository settings on GitHub"
        echo "2. Navigate to 'Pages' in the left sidebar"
        echo "3. Ensure 'main' branch is selected as the source"
        echo "4. Wait a few minutes and visit your site!"
    else
        echo "Please create the repository first and run this script again."
    fi
fi

echo ""
echo "📚 Need help? Check the README.md file"
echo "🐛 Issues? Email: vasuthhakur@gmail.com"
