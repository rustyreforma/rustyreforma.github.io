let mix = require('laravel-mix');

mix.setPublicPath(path.normalize(''));

mix.js('src/app.js', 'dist/js')
   .sass('src/app.scss', 'dist/css/');