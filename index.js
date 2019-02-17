const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const router = require('./router');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', router)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
