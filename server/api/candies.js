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

// GET /api/allCandies/:candyId
router.get('/:candyId', async (req, res, next) => {
  try {
    const candyId = req.params.candyId
    const candy = await Candy.findById(candyId)
    res.json(candy)
  }
  catch (error) {
    next(error)
  }
})

module.exports = router;
