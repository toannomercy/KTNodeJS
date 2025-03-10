const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const homeRoutes = require('./apps/controllers/homecontroller');
const adminRoutes = require('./apps/controllers/admincontroller');
const tableRoutes = require('./apps/controllers/tablecontroller');
const mapRoutes = require('./apps/controllers/mapcontroller');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/admin', adminRoutes);

app.use("/static", express.static(__dirname + "/public"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'apps/views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/admin', (req, res) => {
    res.render('admin/adminPage')
});

app.get('/tables', (req, res) => {
    res.render('admin/tables')
});

app.get('/maps', (req, res) => {
    res.render('admin/maps')
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
