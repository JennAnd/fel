module.exports = {
  content: ["./**/*.html", "./scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        "fel-black": "#1f1f1f",
        "fel-white": "#f9f8f4",
        "fel-yellow": "#fffc46",
        "fel-blue": "#2522ca",
        "fel-red": "#db294b",
      },
      backgroundImage: {
        hero: 'url("http://via.placeholder.com/1920x1080")',
      },
    },
  },
  plugins: [],
};
