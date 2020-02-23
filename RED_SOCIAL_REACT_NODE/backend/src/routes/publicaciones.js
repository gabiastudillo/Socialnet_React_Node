const { Router } = require('express');
const router = Router();
const {getPublications, createPublication, getPublication, updatePublication, deletePublication} =require('../controllers/publications.controller');

router.route('/')
    .get(getPublications)
    .post(createPublication)

router.route('/:id')
    .get(getPublication)
    .put(updatePublication)
    .delete(deletePublication);

module.exports = router;