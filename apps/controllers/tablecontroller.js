const express = require('express');
const router = express.Router();

// Route để render trang tables.ejs
router.get('/tables', (req, res) => {
    res.render('admin/table/tables');
});

router.get('/datatables', (req, res) => {
    res.render('admin/table/datatables');
});
module.exports = router;
