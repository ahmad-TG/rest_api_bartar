const express = require('express');
const router = express.Router();
const axios = require('axios');
const media = require('./handler/media')

/* GET users listing. */
router.get('/all', media.create);
router.get('/', media.medias);
// router.get("/", (req, res, next) => {
 
//   axios.get("http://localhost:8000/users")
//      .then(data => res.send('suksess'))
//      .catch(err => res.send(err));
// })

module.exports = router;
