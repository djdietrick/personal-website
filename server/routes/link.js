const express = require('express');
const Link = require('../models/link');
const router = express.Router();

router.get('/links', async(req, res) => {
    const secret = req.query.secret;
    if(!secret || secret !== process.env.LINK_SECRET) {
        return res.status(500).send('Must send correct secret');
    }

    const links = await Link.find();
    res.send(links);
});

router.post('/links', async(req, res) => {
    try {
        const secret = req.query.secret;
        if(!secret || secret !== process.env.LINK_SECRET) {
            return res.status(500).send('Must send correct secret');
        }

        const newLink = await new Link(req.body).save();
        res.send(newLink);
    } catch(e) {
        console.log(e);
        res.status(500).send(e);
    }
});

module.exports = router;