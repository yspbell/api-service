var express = require('express');
var router = express.Router();


const animation = {"Events":[{"splashEventId":"7000","splashAnimationVersionTimeStamp":"2024-12-17","splashEventStartDate":"2024-12-17T09:00:00-05:00","splashEventEndDate":"2025-01-06T16:30:00-05:00","splashAnimationUrlEN":"https://assets.contentstack.io/v3/assets/blt8b7c282c86b582f7/blt94629a2659295fb7/67abbcbcf17848128a2bb06b/splash_en.json","splashAnimationUrlFR":"https://assets.contentstack.io/v3/assets/blt8b7c282c86b582f7/blt787b9bbd8fe04e40/67abbcbca76cfc6c6ef7577f/splash_fr.json","splashAnimationDurationMills":"1000", "splashAnimationVideoUrl" : "https://assets.contentstack.io/v3/assets/blt8b7c282c86b582f7/blte073d1921bb91aab/678e9a5fa5499b9a1e14b8a2/splash.mp4"}]};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(200, animation);
});


router.get('/2', function(req, res, next) {
  res.send(200, animation);
});

module.exports = router;
