module.exports = {
  content: ["./**/*.html", "./scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        "fel-black": "#1f1f1f",
        "fel-white": "#f9f8f4",
        "fel-yellow": "#fffc46",
        "fel-blue": "#3431D7",
        "fel-red": "#db294b",
      },
      backgroundImage: {
        hero: 'url("../images/hero.png")',
        "paper-red": "url('../images/redpaper.png')",
        "paper-blue": "url('../images/bluepaper.png')",
      },
      fontSize: {
        h1: "222px",
        h2: "137px",
        h3: "52px",
        h4: "32px",
        normal: "20px",
      },
      gridTemplateColumns: {
        items: "70px repeat(3, minmax(0,1fr))",
      },
    },
  },
  plugins: [],
};
