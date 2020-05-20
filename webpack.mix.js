let mix = require("laravel-mix");
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
    };
});

mix.js("src/js/main.js", "dist/js/main.js")
    .copy('src/images/', 'dist/images/')
    .copy('src/fonts/', 'dist/fonts/')
    .sass("src/scss/main.scss", "dist/css/main.css")
    .options({
        postCss: [
            tailwindcss('tailwind.config.js'),
          ],
        processCssUrls: false
    });