const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
let request = require('request');
const cookieParser = require('cookie-parse');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('public', express.static(path.join(__dirname, 'fapclone')));
app.set('view engine', 'ejs');

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.setStatus(401);
    }
}


app.get('/', (req, res) => {
    res.render('login');
});

app.post('/go', (req, res) => {
    let cookieFap = null;
    let formData = {
        title: req.body.title,
        body: req.body.body
    }
    cookieFap = request.post({
        url: 'http://fap.fpt.edu.vn/',
        form: formData
    }, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log('Upload successful! Server responded with:');
        cookieFap = (' x ' + processCookie(httpResponse.rawHeaders[7])).slice(1);
        console.log(cookieFap);
        return "cccc";

    });
    console.log("out" + cookieFap);
    console.log("out222");
    res.cookie('ASP.NET_SessionId', cookieFap);
    res.redirect('/');
});

function processCookie(cookieRaw) {
    const words = cookieRaw.split(' ');
    const cookie = words[0];
    console.log(words[0]);
    const finalCookie = cookie.substring(18, cookie.length - 1);
    return finalCookie;
}

app.get('/failed', (req, res) => {
    res.send('You failed to log in');
});

app.get('/good', isLoggedIn, (req, res) => {
    console.log(req.user.emails + ' ' + req.user.displayName + req.user.accessToken);
    res.send('Welcome to fast fap');
});



app.get('/logout', (req, res) => {
    req.session = null;
    req.logOut();
    res.redirect('/');
});

app.listen(3000);