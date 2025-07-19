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

Aquainnis is a sustainable technology company founded by Luke Hargreaves, ex-Amazon thought leader and clean technology entrepreneur. With over 15 years of experience in cloud computing and sustainability solutions, we develop innovative technology that balances environmental responsibility with business outcomes.

This repository contains the source code for our company website, built with Hugo and the Academia theme, deployed automatically to GitHub Pages.

## 🏗️ Technology Stack

- **Static Site Generator**: [Hugo](https://gohugo.io/) v0.147.9+ Extended
- **Theme**: Academia Hugo (customized for corporate use)
- **Deployment**: GitHub Pages with GitHub Actions
- **Styling**: Bootstrap 4.3.1 with custom SASS
- **Search**: Built-in Fuse.js search functionality
- **Icons**: Font Awesome integration

## ✨ Features

### 🎯 Core Sections
- **Home/Hero Section**: Company overview and mission
- **About**: Founder profile and company story
- **Projects**: Sustainable technology initiatives and AI research
- **Services**: Consulting and technical advisory services
- **Case Studies**: Real-world outcomes and success stories
- **News**: Latest updates and announcements
- **Publications**: Research papers and technical articles

### 🔧 Technical Features
- **Responsive Design**: Mobile-first approach with Bootstrap 4
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Fast Search**: Client-side search with Fuse.js
- **Dark/Light Mode**: User preference toggle
- **Social Integration**: LinkedIn, GitHub, YouTube, and email links
- **Custom Footer**: Clean, professional branding
- **Accessibility**: WCAG compliant design

## 🚀 Getting Started

### Prerequisites
- [Hugo Extended](https://gohugo.io/installation/) v0.147.9 or higher
- [Git](https://git-scm.com/)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/aquainnis/aquainnis.github.io.git
   cd aquainnis.github.io
   ```

2. **Start development server**
   ```bash
   hugo server --buildDrafts --buildFuture
   ```
   The site will be available at `http://localhost:1313`

### Quick Commands

| Command | Description |
|---------|-------------|
| `hugo server` | Start Hugo development server |
| `hugo --minify` | Build production site |
| `hugo new publications/my-paper/index.md` | Create new publication |
| `hugo new projects/my-project/index.md` | Create new project |

## 📁 Project Structure

```
aquainnis.github.io/
├── .github/workflows/     # GitHub Actions CI/CD
├── archetypes/           # Content templates for new pages
│   ├── default.md       # Default page template
│   ├── publication/     # Publication template
│   └── project/         # Project template
├── config/_default/      # Hugo configuration
│   ├── hugo.toml        # Main Hugo config & permalinks
│   ├── params.toml      # Theme parameters & contact info
│   ├── menus.toml       # Navigation structure
│   └── languages.toml   # Multi-language settings
├── content/             # Website content
│   ├── authors/         # Author profiles (Luke Hargreaves)
│   │   └── luke-hargreaves/  # Founder profile
│   ├── home/           # Homepage widget sections
│   │   ├── about.md    # About widget
│   │   ├── hero.md     # Hero section
│   │   ├── projects.md # Projects showcase
│   │   └── publications.md # Publications widget
│   ├── news/           # News and updates
│   │   └── 2025/       # Year-organized news
│   ├── projects/       # Project showcases
│   │   ├── artificial-intelligence/
│   │   ├── deep-learning/
│   │   └── skin-cancer-ai/
│   ├── services/       # Service offerings
│   │   └── consulting/ # Consulting services
│   ├── case-studies/   # Success stories and outcomes
│   └── publications/   # Research papers and articles
├── data/               # Data files and configuration
├── layouts/            # Custom template overrides
│   └── partials/       # Custom footer (no "Powered by" text)
├── static/             # Static assets
│   └── img/           # Images and logos
└── themes/             # Academia Hugo theme
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

#### Adding Publications
1. Create new publication: `hugo new publications/my-research-paper/index.md`
2. Edit the generated file with your publication details
3. Include featured image: `featured.jpg`

#### Adding Projects
1. Create new project: `hugo new projects/my-project/index.md`
2. Add project details and description
3. Include featured image: `featured.jpg`

#### Adding News/Updates
1. Create folder: `content/news/2025/[post-name]/`
2. Add `index.md` with news content
3. Include featured image if needed

### Search Configuration
Search is enabled by default. To customize or disable:

```toml
# In config/_default/params.toml
[search]
  engine = 1  # 0: disabled, 1: built-in search, 2: Algolia
```

## 🚀 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Actions Workflow
- **Trigger**: Push to `main` branch
- **Process**: Install Hugo → Build site → Deploy to GitHub Pages
- **URL**: https://aquainnis.github.io

### Manual Deployment
```bash
hugo --minify
# Upload the `public/` directory to your web server
```

## � Search Functionality

The site includes built-in search powered by Fuse.js:

- **Access**: Click the search icon in navigation or visit `#search`
- **Coverage**: Searches all content including publications, projects, and news
- **Features**: Real-time search with fuzzy matching
- **Performance**: Client-side search, no server requests needed

## 🔧 Configuration

### Key Configuration Files

- **`config/_default/hugo.toml`**: Main Hugo configuration and permalinks
- **`config/_default/params.toml`**: Theme parameters, contact info, and social links
- **`config/_default/menus.toml`**: Navigation structure
- **`content/home/`**: Homepage widget configuration

### Important Settings

```toml
# Social sharing disabled
sharing = false

# Search enabled
[search]
  engine = 1

# Content type mapping
[cascade]
  [[cascade]]
    _target = {path = "/publications/**"}
    type = "publication"
```

## 📋 Roadmap

- [x] ~~Implement search functionality~~ ✅ Built-in search with Fuse.js
- [x] ~~Optimize project structure~~ ✅ Clean 5-category organization
- [x] ~~Remove unnecessary build processes~~ ✅ Hugo-only workflow
- [x] ~~Update founder profile with real content~~ ✅ Luke Hargreaves bio
- [x] ~~Configure social links~~ ✅ LinkedIn, GitHub, YouTube integration
- [ ] Add more case studies and project showcases
- [ ] Implement contact form with Formspree
- [ ] Add newsletter signup functionality
- [ ] Optimize images and performance further
- [ ] Add more research publications

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
- **Location**: Brisbane, Australia
- **LinkedIn**: [Aquainnis Company](https://au.linkedin.com/company/aquainnis)
- **GitHub**: [github.com/aquainnis](https://github.com/aquainnis)
- **YouTube**: [@aquainnis](https://youtube.com/@aquainnis)

---

<p align="center">
  <strong>Building a sustainable future, one innovation at a time 🌱</strong>
</p>
