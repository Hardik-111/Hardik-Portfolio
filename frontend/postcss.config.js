module.exports = {
  plugins: {
    // Tailwind CSS for utility-first CSS
    tailwindcss: {
      // Optional: Pass options like config path if not in default location
      config: './tailwind.config.js',
    },
    // Autoprefixer for vendor prefixes
    autoprefixer: {
      // Optional: Customize browserslist or other options
      overrideBrowserslist: ['last 2 versions', '> 1%'],
    },
    // Example: Add another PostCSS plugin (e.g., postcss-import)
    'postcss-import': {}, // Uncomment if you install postcss-import via `npm install postcss-import`
  },
};