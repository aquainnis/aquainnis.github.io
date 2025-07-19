# Theme Customization Structure

This document explains how theme overrides are organized in this Hugo site.

## Directory Structure

```
├── assets/                    # Processed assets (SCSS, JS, images)
│   ├── sass/
│   │   └── _custom.scss      # Custom SCSS overrides
│   └── js/
│       └── custom.js         # Custom JavaScript
├── layouts/                   # Template overrides
│   └── partials/             # Partial template overrides
├── static/                    # Static assets (images, fonts, etc.)
└── data/                     # Data file overrides
```

## Override Hierarchy

Hugo follows this lookup order for each file type:

### 1. Assets (`assets/`)
- **Purpose**: Files that need processing (SCSS compilation, JS bundling, image processing)
- **Lookup order**: 
  1. `assets/` (your site)
  2. `themes/academia-hugo/assets/` (theme)

### 2. Layouts (`layouts/`)
- **Purpose**: HTML templates, partials, shortcodes
- **Lookup order**:
  1. `layouts/` (your site)
  2. `themes/academia-hugo/layouts/` (theme)

### 3. Static (`static/`)
- **Purpose**: Static files that don't need processing
- **Lookup order**:
  1. `static/` (your site)
  2. `themes/academia-hugo/static/` (theme)

### 4. Data (`data/`)
- **Purpose**: Configuration and data files
- **Lookup order**:
  1. `data/` (your site)
  2. `themes/academia-hugo/data/` (theme)

## Best Practices

### ✅ DO:
- Keep custom files in your site root, not in the theme directory
- Use descriptive filenames (e.g., `_custom.scss`, `custom.js`)
- Document your customizations
- Use version control for all customizations

### ❌ DON'T:
- Modify files directly in `themes/` directory
- Mix different asset types in wrong directories
- Override entire files when you only need small changes

## Examples

### Custom SCSS:
```scss
// assets/sass/_custom.scss
@import "themes/academia-hugo/assets/sass/main.scss";

// Your custom overrides here
$primary-color: #007bff;
```

### Custom JavaScript:
```javascript
// assets/js/custom.js
// Your custom functionality here
```

### Layout Override:
```html
<!-- layouts/partials/navbar.html -->
<!-- Overrides themes/academia-hugo/layouts/partials/navbar.html -->
```

## Theme Integration

The Academia theme automatically includes:
- All SCSS files from `assets/sass/`
- All JS files from `assets/js/`
- All layouts from `layouts/`

Your customizations will be processed and included automatically.
