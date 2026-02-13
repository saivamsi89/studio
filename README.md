# Raw Talks With VK - Modern Website

A modern, responsive website for Raw Talks With VK podcast, built with improved design, animations, and user experience.

## 🚀 Features

### Improvements Over Reference Site:
- ✨ **Modern Gradient Design** - Beautiful gradient color scheme throughout
- 🎨 **Smooth Animations** - Fade-in effects, hover animations, and transitions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🌙 **Dark Theme** - Eye-friendly dark theme with accent colors
- ⚡ **Performance Optimized** - Fast loading and smooth scrolling
- 🎯 **Better UX** - Improved navigation, interactive elements, and user flow
- 🔍 **SEO Friendly** - Proper meta tags and semantic HTML
- ♿ **Accessible** - Better contrast ratios and keyboard navigation

## 📁 File Structure

```
studio/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🛠️ Setup Instructions

1. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

2. **Customize Content:**
   - Edit `index.html` to change text content
   - Update guest data in `script.js` (guests array)
   - Update testimonials in `script.js` (testimonials array)
   - Modify colors in `styles.css` (CSS variables in `:root`)

3. **Add Images:**
   - Replace placeholder images with actual guest photos
   - Update image URLs in the `guests` array in `script.js`
   - Recommended image size: 400x300px for guest cards

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors */
}
```

### Content
- **Guests**: Edit the `guests` array in `script.js`
- **Testimonials**: Edit the `testimonials` array in `script.js`
- **Text**: Edit content directly in `index.html`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- Replace placeholder images with actual photos for production
- Update social media links with your actual URLs
- Configure form submission endpoint in `script.js` (currently just logs to console)
- Add your actual brand logos/images in the brands section

## 🎯 Key Sections

1. **Hero Section** - Main introduction with host info
2. **About Section** - What Raw Talks is about
3. **Guests Section** - Grid of podcast guests
4. **Spotify Section** - Audio podcast promotion
5. **Testimonials** - Viewer feedback
6. **Brands** - Past brand collaborations
7. **Contact Form** - Collaboration inquiry form

## 🔧 Future Enhancements

- Add actual image assets
- Integrate with YouTube API for dynamic content
- Add blog/news section
- Implement newsletter signup
- Add search functionality
- Create admin panel for content management

## 📄 License

This project is created for Raw Talks With VK.

---

**Built with ❤️ for Raw Talks With VK**
