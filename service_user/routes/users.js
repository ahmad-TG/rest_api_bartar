var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user-service', function(req, res, next) {
 return res.json({'users':'service_user'})
});


module.exports = router;
