// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'public/js/app.js')
    .sass("src/app.sass","public/css/app.css").setPublicPath('public');