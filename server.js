const express = require('express');
const hbs = require('hbs');

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
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

app.listen(port, function() {
  console.log(`Server is up on port ${port}`);
});
