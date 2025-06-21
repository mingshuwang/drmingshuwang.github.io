# Dr. Mingshu Wang's Academic Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

This is the academic website for Dr. Mingshu Wang, Reader in Geospatial Data Science at the University of Glasgow.

## 🚀 Quick Start

### Local Development

**Option 1: Using the development script (Recommended)**
```bash
# On Linux/Mac
./dev-server.sh

# On Windows
dev-server.bat
```

**Option 2: Manual Hugo commands**
```bash
# Clean and update
rm -rf public/ resources/_gen/
hugo mod get -u

# Start development server
hugo server --environment development --buildDrafts --buildFuture --port 1313
```

### Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch.

## 🔧 Troubleshooting Local vs Netlify Differences

If you notice differences between local and deployed versions:

1. **Hugo Version**: Ensure you're using Hugo Extended v0.134.3 (same as Netlify)
2. **Environment**: Use `--environment development` locally and `production` for deployment
3. **Base URL**: Local uses `localhost:1313`, production uses `https://drmingshuwang.org/`
4. **Modules**: Run `hugo mod get -u` to update dependencies

## 📁 Project Structure

- `content/` - Site content (Markdown files)
- `config/` - Hugo configuration files
- `static/` - Static assets
- `assets/` - Source assets for processing
- `netlify.toml` - Netlify deployment configuration

## 🛠️ Built With

- [Hugo](https://gohugo.io/) - Static site generator
- [Hugo Blox](https://hugoblox.com/) - Academic theme framework
- [Netlify](https://netlify.com/) - Deployment platform

## 📚 Documentation

- [Hugo Blox Documentation](https://docs.hugoblox.com/)
- [Hugo Documentation](https://gohugo.io/documentation/)

## 🐛 Common Issues

### Local Development Issues
- **Hugo version mismatch**: Install Hugo Extended v0.134.3
- **Module errors**: Run `hugo mod clean --all` then `hugo mod get -u`
- **Build failures**: Check that you're using Hugo Extended, not standard Hugo

### Deployment Issues
- **Different appearance**: Check `netlify.toml` Hugo version matches local
- **Missing content**: Ensure all content files are committed to Git
- **Build errors**: Check Netlify deploy logs for specific error messages

---
© Mingshu Wang 2025
