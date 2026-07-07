# Moda5ar - موضع

A modern, full-featured multilingual web application with complete support for Arabic (العربية) and English, featuring beautiful UI, responsive design, and RTL/LTR automatic support.

## 🌟 Features

✨ **Multilingual Support** - Seamless Arabic/English language switching
🌍 **RTL/LTR Support** - Automatic layout adjustment for both languages  
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
🎨 **Beautiful UI** - Modern gradient design with smooth animations
⚡ **Fast Performance** - Optimized React application
🔒 **Secure** - Enterprise-level security practices
💾 **Persistent Language** - Saves language preference to localStorage

## 📦 Project Structure

```
moda5ar/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── Header.js             # Header with nav and language switcher
│   │   ├── Hero.js               # Hero section
│   │   ├── Features.js           # Features showcase
│   │   ├── Services.js           # Services section
│   │   ├── Testimonials.js       # Testimonials section
│   │   ├── Contact.js            # Contact form
│   │   └── Footer.js             # Footer
│   ├── context/
│   │   └── LanguageContext.js    # Language context provider
│   ├── locales/
│   │   ├── en.json               # English translations
│   │   └── ar.json               # Arabic translations
│   ├── App.js                    # Main app component
│   ├── App.css                   # Global styles
│   └── index.js                  # Entry point
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/galal119/moda5ar.git

# Navigate to project directory
cd moda5ar

# Install dependencies
npm install

# Start development server
npm start
```

The app will automatically open at `http://localhost:3000`

## 🎯 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject configuration (one-way operation)
npm eject
```

## 🌐 Language Support

### English
- Default language
- LTR (Left-to-Right) layout
- Full translations for all sections

### Arabic (العربية)
- RTL (Right-to-Left) layout
- Complete Arabic translations
- Automatic layout adjustments

## 📝 Sections

1. **Header** - Navigation and language switcher
2. **Hero** - Main call-to-action section
3. **Features** - 6 key features showcase
4. **Services** - 4 main services with descriptions
5. **Testimonials** - Client reviews and feedback
6. **Contact** - Contact form for inquiries
7. **Footer** - Links, contact info, and copyright

## 🎨 Customization

### Adding New Translations

1. Add keys to both `en.json` and `ar.json`:

```json
{
  "section": {
    "key": "Your English text"
  }
}
```

2. Use in components:

```javascript
const { t } = useLanguage();
<p>{t('section.key')}</p>
```

### Modifying Colors

Edit the gradient colors in `App.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🔗 Language Context API

The app uses a custom `LanguageContext` for global language management:

```javascript
const { language, changeLanguage, t } = useLanguage();

// Change language
changeLanguage('ar'); // or 'en'

// Translate text
const text = t('app.title');
```

## 📱 Responsive Design

- **Desktop**: Full layout with all sections visible
- **Tablet**: Optimized spacing and font sizes
- **Mobile**: Single column layout, touch-friendly buttons

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🛠 Technology Stack

- **React 18** - UI library
- **React DOM** - React rendering
- **CSS3** - Styling with flexbox and grid
- **Context API** - State management
- **LocalStorage** - Persistent preferences

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Moda5ar** - Making multilingual web apps simple and beautiful! 🚀
