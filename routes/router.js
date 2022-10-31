const express = require('express');
const router = express.Router();
const restaurants = require('../database/restaurants');

router.get('/', async function(req, res, next) {
  try {
    res.json(await restaurants.getAllRestaurants(req.query.page));
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
});

router.post('/compare', async function(req, res, next) {
  try {
    res.json(await restaurants.compare(req.body));
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

router.delete('/remove', async function(req, res, next) {
  try {
    res.json(await restaurants.remove(req.body));
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
});

router.delete('/remove-all', async function(req, res, next) {
  try {
    res.json(await restaurants.removeAll());
  } catch (err) {
    console.error(`Error: `, err.message);
    next(err);
  }
});

module.exports = router;