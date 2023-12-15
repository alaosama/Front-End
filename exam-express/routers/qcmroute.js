const express = require('express');
const router = express.Router();

const {
    displayQcms,
    displayFormQcm,
    createNewForm,
    displayQcmJson,
    displayQcmDetailed,
} = require('../controllers/qcms');

router.get('/', displayQcms);
router.get('/new', displayFormQcm); // This line is added
router.post('/new', createNewForm);
router.get('/:qcmid', displayQcmDetailed);
router.get('/json', displayQcmJson);

module.exports = router;
