const express = require('express');
const Link = require('../models/link');
const router = express.Router();

router.get('/links', async(req, res) => {
    const links = await Link.find();
    res.send(links);
});

router.post('/links', async(req, res) => {
    try {
        const newLink = await new Link(req.body).save();
        res.send(newLink);
    } catch(e) {
        res.status(500).send(e);
    }
});

module.exports = router;