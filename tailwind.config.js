module.exports = {
    mode: "jit",
    content: [   
        './public/**/*.html',    './src/**/*.{js,jsx,ts,tsx,vue}', 
     ],
    theme: {},
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
      ]
};
