var express = require('express');
var router = express.Router();


const animation = {"Events":[{"splashEventId":"7000","splashAnimationVersionTimeStamp":"2024-12-17","splashEventStartDate":"2024-12-17T09:00:00-05:00","splashEventEndDate":"2025-01-06T16:30:00-05:00","splashAnimationUrl":"https://assets.contentstack.io/v3/assets/blt8b7c282c86b582f7/bltcec9ac40eb0e3376/6787fe54ee0f423d18519ff5/Boxing2024_en.json","splashAnimationDurationMills":"1000", "splashAnimationVideoUrl" : "https://assets.contentstack.io/v3/assets/blt8b7c282c86b582f7/blte073d1921bb91aab/678e9a5fa5499b9a1e14b8a2/splash.mp4"}]};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(200, animation);
});


router.get('/2', function(req, res, next) {
  res.send(200, animation);
});

module.exports = router;
