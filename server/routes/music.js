const express = require('express');
const router = express.Router();

router.get('/randomshow', async(req, res) => {
    const url = "http://phish.in/api/vi/random-show/";

    res.send("hey random show");

    // axios.get(url).then((data) => {
    //     res.send(data);
    // }).catch((err) => {
    //     res.status(500).send(err);
    // });
});

module.exports = router;