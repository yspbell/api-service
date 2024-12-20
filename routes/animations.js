var express = require('express');
var router = express.Router();


const animation = {"Events":[{"splashEventId":"7000","splashAnimationVersionTimeStamp":"2024-12-17","splashEventStartDate":"2024-12-17T09:00:00-05:00","splashEventEndDate":"2025-01-06T16:30:00-05:00","splashAnimationUrl":"/appassets/images/MBM/Animation/Boxing2024_en.json","splashAnimationDurationMills":"1000"}]};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(200, animation);
});


router.get('/2', function(req, res, next) {
  res.send(200, animation);
});

module.exports = router;
