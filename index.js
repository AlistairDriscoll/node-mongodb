require('./models/db');

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const { engine } = require('express-handlebars');  // ⬅️ changed this
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bodyParser = require('body-parser');

const studentController = require('./controllers/studentController');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to Students Database!</h2>
        <h3>Click here to get access to the <b><a href="/student/list">Database</a></b></h3>`)
});

// views folder
app.set('views', path.join(__dirname, '/views/'));

// view engine setup (fixed)
app.engine('hbs', engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: '.hbs',                    // note the dot
    defaultLayout: 'MainLayout',
    layoutsDir: path.join(__dirname, '/views/layouts')
}));

app.set('view engine', 'hbs');          // ⬅️ make sure this is set

app.use('/student', studentController);

app.listen(3000, () => {
    console.log('Server started at port 3000');
});
