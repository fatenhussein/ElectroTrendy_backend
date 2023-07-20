const app = require('./../app');

const router = app.Router();

// get all products
router.route('/').get().post();

// get specific product
router.route('/:id').get().patch().delete();


module.exports = router ; 