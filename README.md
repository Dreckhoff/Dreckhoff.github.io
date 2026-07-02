# Johannes Dreckhoff - Personal Website

A clean, professional personal website showcasing research, writing, and travels.

## Structure

```
/
├── index.html              # Main landing page with personal bio, gallery, places, blog, contact
├── professional.html       # Academic background, research resources, paper/software links
├── places.html            # Places page with live weather/time
├── impressum.html         # Legal page (German requirement)
├── css/
│   └── main.css          # Main stylesheet
├── js/
│   ├── main.js           # Main JavaScript (smooth scroll, forms)
│   └── places.js         # Places page functionality
├── blog/
│   ├── index.html        # Blog archive page
│   └── welcome.html      # First blog post
├── assets/
│   ├── documents/        # PDFs and audio files
│   ├── gallery/          # Personal photos
│   ├── places/           # Travel destination images
│   └── images/           # Future images
└── archive/              # Old website files
```

## Features

- **Personal Bio**: About section with personal background
- **Professional Page**: Academic journey, research work, resources, and paper/software links
- **Gallery**: Photo collection with hover overlays
- **Places**: Interactive map of cities with live weather and local time
- **Blog**: Simple blog system with individual post pages
- **Contact Form**: Formspree integration for messages
- **Responsive Design**: Mobile-friendly layout
- **Clean & Professional**: Minimal design with blue/teal color scheme

## Design Philosophy

- **Color Scheme**: Cool & professional (blues and teals)
- **Typography**: System fonts for fast loading and clean appearance
- **Layout**: Generous whitespace, clear hierarchy
- **No Dark Mode**: Simplified to single light theme

## Adding New Blog Posts

See `BLOGGING_GUIDE.txt` for a step-by-step guide. In short: copy an existing post in `blog/`, update its metadata and content, add it to `blog/index.html`, and optionally add a homepage preview.

## Technologies

- Pure HTML5, CSS3, and vanilla JavaScript
- No frameworks or build tools required
- Formspree for contact form
- GitHub Pages for hosting

## Local Development

Simply open `index.html` in a web browser. For better results, use a local server:

```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

## Deployment

This site is configured for GitHub Pages deployment at `Dreckhoff.github.io`.

To deploy:
1. Commit changes to the repository
2. Push to the `main` branch
3. GitHub Pages will automatically deploy the site

## Future Enhancements

- Add more blog posts as content is created
- Consider adding real weather API integration (OpenWeatherMap)
- Add projects/publications section as research progresses
- Optimize images for web delivery
- Add structured data for SEO

## Contact

Johannes Dreckhoff
- GitHub: https://github.com/Dreckhoff
- LinkedIn: https://www.linkedin.com/in/johannes-dreckhoff/
- Bluesky: https://bsky.app/profile/johannesdreckhoff.bsky.social

---

© 2026 Johannes Dreckhoff. All rights reserved.
