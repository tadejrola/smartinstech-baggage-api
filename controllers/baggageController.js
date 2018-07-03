const express = require('express');
const router = express.Router();
var mysql = require('../dbHelper/connection.js').pool;

router.get('/', async (req, res) => {
    mysql.getConnection(function (err, conn) {
        conn.query("select * from user", function (err, rows) {
            res.json(rows);
        })
        conn.release();
    })
});

router.get('/:referenceNumber', async (req, res, next) => {
    const id = req.params.referenceNumber;
    mysql.getConnection(function (err, conn) {
        conn.query("select * from insurance where referenceNumber='" + id + "'", function (err, rows) {
            let baggageLocation = {
                status: "Na prevzemnem mestu"
            };
            res.json(baggageLocation);
        })

    })
});

router.get('/baggagesForTenant/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);

});

router.get('/baggagesForOwner/:id', async (req, res, next) => {
    const id = parseInt(req.params.id);

});

router.get('/objectbaggage/:objectID', async (req, res, next) => {

});

router.post('/', (req, res, next) => {

});

router.put('/:id', (req, res, next) => {
});

router.delete('/:id', async (req, res, next) => {
});

module.exports = router;