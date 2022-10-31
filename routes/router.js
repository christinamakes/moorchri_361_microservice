const express = require('express');
const router = express.Router();
const restaurants = require('../database/restaurants');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await restaurants.getAllRestaurants(req.query.page));
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
});

router.post('/add', async function(req, res, next) {
    try {
      res.json(await restaurants.create(req.body));
    } catch (err) {
      console.error(`Error: `, err.message);
      next(err);
    }
  });

module.exports = router;