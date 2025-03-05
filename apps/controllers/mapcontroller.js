const express = require('express');
const router = express.Router();

// Route để render trang tables.ejs
router.get('/googlemaps', (req, res) => {
    res.render('admin/map/googlemaps');
});

router.get('/jsvectormap', (req, res) => {
    res.render('admin/map/jsvectormap');
});
module.exports = router;
