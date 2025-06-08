# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, featuring smooth animations, dark mode support, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful typography
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: WCAG 2.1 AA compliance with proper focus management

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with Custom Properties (CSS Variables)
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Create React App
- **Development**: Hot reload with React Scripts

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with theme toggle
│   ├── Header.css         # Header styles
│   ├── Hero.js            # Landing section with introduction
│   ├── Hero.css           # Hero section styles
│   ├── WorkHistory.js     # Work experience timeline
│   ├── Education.js       # Education and certifications
│   ├── Skills.js          # Skills and technologies
│   ├── Projects.js        # Featured projects showcase
│   ├── Contact.js         # Contact form and information
│   └── Footer.js          # Site footer
├── App.js                 # Main application component
├── App.css               # Global styles and CSS variables
├── index.js              # React entry point
└── index.css             # Additional global styles
```

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Name and professional title
   - Bio description
   - Social media links
   - Professional photo

2. **Meta Tags** (`public/index.html`):
   - Update title, description, and Open Graph tags
   - Replace placeholder URLs and images

### Styling
The project uses CSS custom properties for easy theming. Main variables are defined in `src/App.css`:

```css
:root {
  --primary-color: #2563eb;
  --accent-color: #f59e0b;
  /* ... other variables */
}
```

### Content
Add your content to each component:
- Work history in `WorkHistory.js`
- Education and certifications in `Education.js`
- Skills and technologies in `Skills.js`
- Projects in `Projects.js`
- Contact information in `Contact.js`

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure custom domain and SSL

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 📱 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance

- Lighthouse score: 90+
- Core Web Vitals optimized
- Lazy loading for images
- Optimized bundle size
- Efficient animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/yourusername/portfolio/issues).

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

Made with ❤️ by [Your Name](https://yourportfolio.com) 