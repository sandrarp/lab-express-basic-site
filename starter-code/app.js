const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
  
app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });