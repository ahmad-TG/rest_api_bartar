const express = require('express');
const router = express.Router();
const axios = require('axios');
const users = require('./handler/users')

/* GET users listing. */
router.get('/', users.create);
// router.get("/", (req, res, next) => {
 
//   axios.get("http://localhost:8000/users")
//      .then(data => res.send('suksess'))
//      .catch(err => res.send(err));
// })

module.exports = router;
