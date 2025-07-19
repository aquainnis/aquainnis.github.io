# Aquainnis - Sustainable Technology Company Website

<p align="center">
  <img src="static/img/aquainnis-logo-500x500-trans.png" alt="Aquainnis Logo" width="200"/>
</p>

<p align="center">
  <strong>Building a sustainable future through innovative technology solutions</strong>
</p>

<p align="center">
  <a href="https://aquainnis.github.io">🌐 Live Website</a> | 
  <a href="#getting-started">🚀 Getting Started</a> | 
  <a href="#features">✨ Features</a> | 
  <a href="#contributing">🤝 Contributing</a>
</p>

---

## 🌊 About Aquainnis

Aquainnis is a sustainable technology company dedicated to developing innovative solutions for environmental challenges. Our website showcases our projects, research, publications, and team members working towards a more sustainable future.

This repository contains the source code for our company website, built with Hugo and the Academia theme, deployed automatically to GitHub Pages.

## 🏗️ Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) v0.124.1
- **Theme**: Academia Hugo (customized for corporate use)
- **Deployment**: GitHub Pages with GitHub Actions
- **Styling**: Bootstrap 4.3.1
- **Contact Forms**: Formspree integration
- **Analytics**: Google Analytics (configurable)

## ✨ Features

### 🎯 Core Sections
- **Home/Hero Section**: Company overview and mission
- **About**: Company story and values
- **Projects**: Sustainable technology initiatives
- **Team**: Meet our experts and researchers
- **Publications**: Research papers and articles
- **Blog/Posts**: Latest news and insights
- **Contact**: Get in touch with integrated contact form

### 🔧 Technical Features
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, structured data
- **Fast Loading**: Optimized images and minified assets
- **Accessibility**: WCAG compliant
- **Multi-language Support**: i18n ready
- **Dark/Light Mode**: User preference toggle
- **Search Functionality**: Built-in search capability

## 🚀 Getting Started

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) v0.124.1 or higher
- [Node.js](https://nodejs.org/) v18.15.0 or higher
- [Git](https://git-scm.com/)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/aquainnis/aquainnis.github.io.git
   cd aquainnis.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run project setup**
   ```bash
   npm run project-setup
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:1313`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Hugo development server |
| `npm run build` | Build production site |
| `npm run test` | Run production build locally |
| `npm run project-setup` | Initialize project configuration |

## 📁 Project Structure

```
aquainnis.github.io/
├── .github/workflows/     # GitHub Actions CI/CD
├── archetypes/           # Content templates
├── config/_default/      # Hugo configuration
│   ├── hugo.toml        # Main Hugo config
│   ├── params.toml      # Theme parameters
│   ├── menus.toml       # Navigation menus
│   └── languages.toml   # Multi-language settings
├── content/             # Website content
│   ├── authors/         # Team member profiles
│   ├── home/           # Homepage sections
│   ├── post/           # Blog posts
│   ├── project/        # Project showcases
│   └── publication/    # Research publications
├── data/               # Data files
├── static/             # Static assets (images, files)
├── themes/             # Hugo themes
└── package.json        # Node.js dependencies
```

## 🎨 Customization

### Brand Colors & Styling
The site uses the "forest" color theme appropriate for a sustainable technology company. To customize:

1. **Colors**: Edit `config/_default/params.toml`
   ```toml
   color_theme = "forest"  # Available: default, ocean, forest, dark, apogee, etc.
   ```

2. **Logo**: Replace `static/img/aquainnis-logo-500x500-trans.png`

3. **Fonts**: Modify in `config/_default/params.toml`
   ```toml
   font = "classic"  # Available: default, classic, playfair
   ```

### Content Management

#### Adding Team Members
1. Create folder: `content/authors/[username]/`
2. Add `_index.md` with member details
3. Include profile photo: `avatar.jpg`

#### Adding Projects
1. Create folder: `content/project/[project-name]/`
2. Add `index.md` with project details
3. Include featured image: `featured.jpg`

#### Adding Blog Posts
1. Create folder: `content/post/[post-name]/`
2. Add `index.md` with post content
3. Include featured image: `featured.jpg`

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Actions Workflow
- **Trigger**: Push to `main` branch
- **Process**: Install Hugo → Install dependencies → Build site → Deploy to GitHub Pages
- **URL**: https://aquainnis.github.io

### Manual Deployment
```bash
npm run build
# Upload the `public/` directory to your web server
```

## 📞 Contact Configuration

To enable the contact form:

1. **Set up Formspree account** at [formspree.io](https://formspree.io)
2. **Update contact widget**: Edit `content/home/contact.md`
3. **Configure email settings**: Edit `config/_default/params.toml`

See [Issue #2](https://github.com/aquainnis/aquainnis.github.io/issues/2) for detailed setup instructions.

## 🔧 Configuration

### Key Configuration Files

- **`config/_default/hugo.toml`**: Main Hugo configuration
- **`config/_default/params.toml`**: Theme parameters and contact info
- **`config/_default/menus.toml`**: Navigation structure
- **`package.json`**: Build scripts and dependencies

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HUGO_ENV` | Hugo environment (production) | Yes |
| `HUGO_VERSION` | Hugo version to use | Yes |
| `NODE_VERSION` | Node.js version | Yes |

## 🤝 Contributing

We welcome contributions to improve our website! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Content Guidelines
- Use clear, professional language
- Include alt text for all images
- Follow existing naming conventions
- Test locally before submitting

## 📋 Roadmap

- [ ] Implement contact form with Formspree
- [ ] Add search functionality
- [ ] Optimize images and performance
- [ ] Add more project case studies
- [ ] Implement newsletter signup
- [ ] Add team member blog integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🌍 About Sustainability

As a sustainable technology company, we're committed to:
- **Carbon-neutral hosting**: Using green hosting providers
- **Optimized performance**: Reducing energy consumption through efficient code
- **Accessibility**: Ensuring our content is accessible to all users
- **Open source**: Contributing to the community

## 📧 Contact

- **Website**: [aquainnis.com](https://aquainnis.com)
- **Email**: luke@aquainnis.com
- **Phone**: +61 438 151 095
- **Location**: Brisbane, Australia

---

<p align="center">
  <strong>Building a sustainable future, one innovation at a time 🌱</strong>
</p>
