# Moda5ar - موضع

A modern, multilingual web application supporting Arabic and English languages with RTL/LTR support.

## Features

✨ **Multilingual Support** - Seamless switching between Arabic and English
📱 **Responsive Design** - Works perfectly on all devices
⚡ **Fast Performance** - Optimized for speed
🔒 **Secure** - Enterprise-level security
🌍 **RTL/LTR Support** - Full support for right-to-left and left-to-right text

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/galal119/moda5ar.git

# Navigate to the project directory
cd moda5ar

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the development server
npm start

# The app will open at http://localhost:3000
```

## Project Structure

```
moda5ar/
├── public/
│   ├── index.html          # Main HTML file
│   └── styles.css          # Global styles
├── src/
│   ├── locales/
│   │   ├── en.json         # English translations
│   │   └── ar.json         # Arabic translations
│   ├── App.js              # Main app component
│   ├── i18n.js             # i18n configuration
│   └── index.js            # Entry point
├── package.json            # Dependencies
└── README.md              # This file
```

## Language Support

### English
- Default language
- LTR (Left-to-Right) layout

### Arabic (العربية)
- Full RTL (Right-to-Left) support
- Automatic layout adjustment
- Complete Arabic translations

## Technology Stack

- **React 18** - UI framework
- **i18next** - Internationalization framework
- **react-i18next** - React i18n plugin
- **CSS3** - Styling with RTL support

## Usage

### Switching Languages

Click the language buttons in the top-right corner:
- **EN** - Switch to English
- **العربية** - Switch to Arabic

The selected language is automatically saved to localStorage and persists across sessions.

### Adding New Translations

1. Add new keys to `src/locales/en.json` and `src/locales/ar.json`
2. Import translations in your components
3. Use the `useTranslation` hook:

```javascript
const { t } = useTranslation();

return <div>{t('your.translation.key')}</div>;
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or suggestions, please open an issue on GitHub.

---

**Moda5ar** - Making multilingual apps simple and accessible.
