const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//     console.log(path.join(__dirname, 'static', 'index.html'));
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });

// app.post('/go', (req, res) => {
//     console.log(req.body);
// });

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.json({ success: true });
// })

app.get('/', (req, res) => {
    res.render('index1');
});

app.listen(3000);
