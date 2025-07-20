# Hugo Academic Theme - Page Types Documentation

This document explains all the different page types supported by the Hugo Academic theme and how to use them effectively.

## Overview

The Hugo Academic theme supports several built-in page types, each with specific layouts and parameters. Page types are specified in the frontmatter using the `type` parameter.

## Core Page Types

### 1. Project (`type: project`)

Used for portfolio items, case studies, and project showcases.

**Location**: `content/projects/project-name/index.md`

**Required Parameters**:
- `title` - Project title
- `summary` - Brief description
- `date` - Project date
- `type: project`

**Optional Parameters**:
```yaml
tags: ["tag1", "tag2"]           # Project categories/tags
external_link: ""                # URL to external project (replaces detail page)
url_code: ""                     # Link to source code
url_pdf: ""                      # Link to PDF
url_slides: ""                   # Link to presentation slides
url_video: ""                    # Link to video
url_custom: [{name: "Custom", url: ""}] # Custom links
image:
  caption: "Photo caption"
  focal_point: "Smart"           # Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  preview_only: false
links:
- icon: twitter
  icon_pack: fab
  name: Follow
  url: https://twitter.com/username
slides: example                  # Associate with slides (content/slides/example/index.md)
```

**Example**:
```yaml
---
title: My Amazing Project
summary: A brief description of what this project does
date: "2025-01-15T00:00:00Z"
type: project
tags: ["AI", "Machine Learning"]
external_link: ""
image:
  caption: "Project screenshot"
  focal_point: "Smart"
---
```

### 2. Publication (`type: publication`)

Used for academic papers, articles, and research publications.

**Location**: `content/publications/publication-name/index.md`

**Required Parameters**:
- `title` - Publication title
- `authors` - List of authors
- `date` - Publication date
- `publication_types` - Type of publication (see below)

**Optional Parameters**:
```yaml
publication: "Journal Name"       # Where published
publication_short: "JNAME"       # Abbreviated journal name
abstract: "Full abstract text"
url_pdf: ""                      # Link to PDF
url_code: ""                     # Link to code
url_dataset: ""                  # Link to dataset
url_poster: ""                   # Link to poster
url_project: ""                  # Link to project page
url_slides: ""                   # Link to slides
url_source: ""                   # Link to source
url_video: ""                    # Link to video
doi: "10.1000/xyz123"           # Digital Object Identifier
featured: true                   # Feature this publication
tags: ["tag1", "tag2"]
projects: ["project-name"]       # Associate with projects
image:
  caption: "Figure caption"
  focal_point: "Smart"
```

**Publication Types** (defined in `data/publication_types.toml`):
- `1` - Conference paper (`pub_conf`)
- `2` - Journal article (`pub_journal`)
- `3` - Preprint (`pub_preprint`)
- `4` - Report (`pub_report`)
- `5` - Book (`pub_book`)
- `6` - Book section (`pub_book_section`)
- `7` - Thesis (`pub_thesis`)
- `8` - Patent (`pub_patent`)
- `0` - Uncategorized (`pub_uncat`)

**Example**:
```yaml
---
title: "Deep Learning for Climate Change"
authors: ["John Doe", "Jane Smith"]
date: "2025-01-15T00:00:00Z"
publication_types: ["2"]
publication: "Nature Climate Change"
publication_short: "Nat. Clim. Chang."
abstract: "This paper presents..."
featured: true
tags: ["Deep Learning", "Climate"]
doi: "10.1038/s41558-025-12345-6"
---
```

### 3. Talk (`type: talk`)

Used for conference presentations, seminars, and speaking engagements.

**Location**: `content/talks/talk-name/index.md`

**Required Parameters**:
- `title` - Talk title
- `date` - Talk date
- `event` - Event name
- `location` - Event location

**Optional Parameters**:
```yaml
event_url: "https://conference.com"  # Event website
abstract: "Talk abstract"
summary: "Brief summary"
address:
  street: "123 Main St"
  city: "City"
  region: "State"
  postcode: "12345"
  country: "Country"
date_end: "2025-01-16T00:00:00Z"   # End date for multi-day events
all_day: false
publishDate: "2025-01-01T00:00:00Z"
authors: ["admin"]
tags: ["tag1", "tag2"]
featured: false
image:
  caption: "Event photo"
  focal_point: "Smart"
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
slides: example                     # Associate with slides
projects: ["project-name"]         # Associate with projects
```

**Example**:
```yaml
---
title: "AI in Healthcare"
event: "Tech Conference 2025"
event_url: "https://techconf2025.com"
location: "San Francisco, CA"
date: "2025-03-15T14:00:00Z"
date_end: "2025-03-15T15:00:00Z"
all_day: false
abstract: "This talk explores..."
authors: ["admin"]
tags: ["AI", "Healthcare"]
---
```

### 4. Slides (`type: slides`)

Used for presentation slides that can be viewed in the browser.

**Location**: `content/slides/slide-deck-name/index.md`

**Required Parameters**:
- `title` - Slide deck title
- `type: slides`

**Optional Parameters**:
```yaml
summary: "Presentation summary"
authors: ["admin"]
tags: ["tag1", "tag2"]
date: "2025-01-15T00:00:00Z"
slides:
  theme: white                    # Reveal.js theme
  highlight_style: github        # Code highlighting style
  transition: slide              # Slide transition
  controls: true
  progress: true
  history: true
  center: true
  mouse_wheel: true
```

**Example**:
```yaml
---
title: "My Presentation"
type: slides
date: "2025-01-15T00:00:00Z"
slides:
  theme: white
  transition: slide
---

# Slide 1

Content here

---

# Slide 2

More content
```

### 5. Docs (`type: docs`)

Used for documentation pages with navigation sidebar.

**Location**: `content/docs/section/page.md`

**Required Parameters**:
- `title` - Page title
- `type: docs`

**Optional Parameters**:
```yaml
summary: "Page summary"
date: "2025-01-15T00:00:00Z"
toc: true                        # Show table of contents
weight: 10                       # Order in navigation
linktitle: "Short Title"         # Title in navigation
menu:
  docs:
    parent: "section-name"       # Parent section
    weight: 10
```

**Example**:
```yaml
---
title: "Getting Started"
type: docs
weight: 10
toc: true
menu:
  docs:
    parent: "tutorials"
    weight: 10
---
```

### 6. Post (`type: post`)

Used for blog posts and news articles.

**Location**: `content/post/post-name/index.md`

**Required Parameters**:
- `title` - Post title
- `date` - Publication date

**Optional Parameters**:
```yaml
subtitle: "Post subtitle"
summary: "Post summary"
authors: ["admin"]
tags: ["tag1", "tag2"]
categories: ["category1"]
date: "2025-01-15T00:00:00Z"
lastmod: "2025-01-16T00:00:00Z"
featured: false
draft: false
image:
  caption: "Image caption"
  focal_point: "Smart"
  preview_only: false
projects: ["project-name"]
```

**Example**:
```yaml
---
title: "My Blog Post"
subtitle: "A detailed exploration"
date: "2025-01-15T00:00:00Z"
authors: ["admin"]
tags: ["Technology", "AI"]
categories: ["Blog"]
featured: true
---
```

### 7. Authors (`type: authors`)

Used for author/people profiles.

**Location**: `content/authors/username/_index.md`

**Required Parameters**:
- `title` - Person's name
- `role` - Job title/role

**Optional Parameters**:
```yaml
bio: "Short biography"
interests:
- Artificial Intelligence
- Machine Learning
education:
  courses:
  - course: PhD in Computer Science
    institution: Stanford University
    year: 2020
social:
- icon: envelope
  icon_pack: fas
  link: 'mailto:email@example.com'
- icon: twitter
  icon_pack: fab
  link: https://twitter.com/username
- icon: google-scholar
  icon_pack: ai
  link: https://scholar.google.com/
- icon: github
  icon_pack: fab
  link: https://github.com/username
organizations:
- name: Company Name
  url: "https://company.com"
email: "email@example.com"
superuser: true                  # Make this the main site author
user_groups:
- Researchers
- Visitors
```

**Example**:
```yaml
---
title: John Doe
role: Senior AI Researcher
bio: Expert in machine learning and AI
interests:
- Artificial Intelligence
- Deep Learning
- Computer Vision
social:
- icon: envelope
  icon_pack: fas
  link: 'mailto:john@example.com'
organizations:
- name: Tech Company
  url: "https://techcompany.com"
superuser: true
---
```

## Custom Page Types

You can create custom page types by simply specifying a unique `type` value:

### Example: Service Pages (`type: service`)

```yaml
---
title: "Cloud Services"
summary: "Our cloud computing solutions"
date: "2025-01-15T00:00:00Z"
type: service
weight: 10
---
```

## Widget Configuration

When using portfolio widgets to display page types, configure them like this:

```toml
[content]
  page_type = "project"          # Match the type parameter
  count = 0                      # 0 = show all, or specify number
  
  [[content.filter_button]]
    name = "All"
    tag = "*"
  
  [[content.filter_button]]
    name = "Deep Learning"
    tag = "Deep Learning"
```

## Common Parameters

These parameters work across most page types:

- `title` - Page title
- `summary` - Brief description
- `date` - Date
- `tags` - List of tags
- `featured` - Boolean for featured content
- `draft` - Boolean to hide from publication
- `weight` - Order/priority
- `image` - Featured image configuration
- `url` - Custom URL override
- `menu` - Menu configuration

## Best Practices

1. **Consistent Dating**: Use ISO 8601 format (`2025-01-15T00:00:00Z`)
2. **Meaningful Tags**: Use consistent, descriptive tags across content
3. **Image Optimization**: Optimize images for web use
4. **SEO-Friendly**: Use descriptive titles and summaries
5. **Cross-Linking**: Link related content using `projects`, `publications`, etc.
6. **Menu Structure**: Use logical menu hierarchies for docs and navigation

## Troubleshooting

- **Content Not Showing**: Check `type` parameter matches widget `page_type`
- **Menu Errors**: Define required menu items in `config/_default/menus.toml`
- **Image Issues**: Ensure images are in correct directories (`static/img/` or page bundles)
- **Date Problems**: Use proper ISO 8601 format for dates

This documentation covers the core functionality of the Hugo Academic theme's page types. For theme-specific customizations, refer to your theme's documentation or layout files.
