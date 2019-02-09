const router = require('express').Router();
const Candy = require('../db/models/Candy');

// GET /api/allCandies
router.get('/', async(req, res, next)=>{
  try {
    const allCandies = await Candy.findAll();
    res.json(allCandies)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
