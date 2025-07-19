# Resume Setup Instructions

## To enable the resume download button:

1. **Add your resume/CV** to the static files directory:
   ```
   static/files/luke-hargreaves-cv.pdf
   ```

2. **Create the files directory** if it doesn't exist:
   ```bash
   mkdir -p static/files
   ```

3. **Copy your resume**:
   ```bash
   cp /path/to/your/resume.pdf static/files/luke-hargreaves-cv.pdf
   ```

4. **The download button is already configured** in Luke's author profile to point to:
   - URL: `files/luke-hargreaves-cv.pdf`
   - Label: "Download Resume"

## Alternative: Link to external resume
If you prefer to host your resume elsewhere, update the URL in Luke's profile:
```yaml
btn:
- url : "https://your-website.com/resume.pdf"
  label : "Download Resume"
```

## File formats supported:
- PDF (recommended)
- DOC/DOCX
- Any other downloadable format
