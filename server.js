const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.use(function (req, res, next) {
  res.render('maintenance.hbs' {
    pageTitle: 'Maintenance Page',
    userName: 'Anish Raparla'
  });
});

app.get('/', function(req, res) {
  res.send({
    name: 'Anish',
    likes: [
      'Food',
      'Programming',
      'Basketball'
    ]
  });
});

app.get('/about', function(req, res) {
  res.render('about.hbs', {
    pageTitle: 'About page',
    userName: 'Anish Raparla'
  });
});

app.get('/bad', function(req, res) {
  res.send('Error');
})

app.listen(3000, function() {
  console.log('Server is up on port 3000');
});
