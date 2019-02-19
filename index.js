const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const router = require('./router');
console.log(process.env.NODE_ENV);
const data = {
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', router)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', { data }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
