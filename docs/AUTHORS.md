# Author Management Guide

## Creating New Authors

### 1. Create Author Directory
Create a new folder in `content/authors/` with the author's username (use kebab-case):
```
content/authors/luke-hargreaves/
```

### 2. Add Author Profile
Create `_index.md` in the author's folder with their information:

```yaml
---
name: Luke Hargreaves
avatar_image: "your-photo.jpg"
authors:
- luke-hargreaves
superuser: false
role: Your Role
organizations:
- name: Company Name
  url: "https://company.com"
bio: Short bio description
interests:
- Interest 1
- Interest 2
social:
- icon: envelope
  icon_pack: fas
  link: 'mailto:your@email.com'
- icon: linkedin
  icon_pack: fab
  link: https://linkedin.com/in/yourprofile
email: "your@email.com"
---

Full bio content here...
```

### 3. Add Profile Photo
- Add your photo to `static/img/` folder
- Update `avatar_image` field with the filename
- Recommended size: 300x300px or larger, square format
- Formats: JPG, PNG, WebP

### 4. Using Authors in Content
Reference authors in your content's front matter:

```yaml
---
title: "Your Content Title"
authors:
- luke-hargreaves
- admin  # Multiple authors possible
---
```

## Author Usernames
Use kebab-case for consistency:
- ✅ `luke-hargreaves`
- ✅ `john-smith`
- ❌ `Luke Hargreaves`
- ❌ `luke_hargreaves`

## Social Icons
Available social platforms:
- `envelope` (email)
- `twitter`
- `linkedin`
- `github`
- `gitlab`
- `facebook`
- `instagram`
- `youtube`
- `globe` (website)

## Superuser vs Regular Authors
- **Superuser**: Primary site owner (appears on homepage, main profile)
- **Regular Author**: Contributors, team members, guest authors

## Multiple Authors
Content can have multiple authors:
```yaml
authors:
- luke-hargreaves
- collaborator-name
```

## Author Pages
Each author gets their own page at:
- `/authors/luke-hargreaves/`
- Lists all content by that author
- Shows full bio and social links
