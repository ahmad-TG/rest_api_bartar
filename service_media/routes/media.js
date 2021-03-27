var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const data = [
        {
            'nama':'service media',
            'role':'admin',
            'branch':'pusat'
        },
        {
            'nama':'admin1',
            'role':'admin',
            'branch':'pusat'
        },
        {
            'nama':'admin1',
            'role':'admin',
            'branch':'pusat'
        }
    ]
 return res.send(data)
});

router.get('/medias', function(req, res, next) {
    const data = [
        {
            'nama':'service media',
            'role':'admin',
            'branch':'pusat'
        },
    ]
 return res.send(data)
});


module.exports = router;
