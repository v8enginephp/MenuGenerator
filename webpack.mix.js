// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'js/app.js')
    .sass("src/app.sass", "css/app.css").setPublicPath('public');