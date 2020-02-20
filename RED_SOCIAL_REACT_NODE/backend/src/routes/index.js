const { Router } = require('express');
const router = Router();

const { getUsers, createUser, getUserById, deleteUserById, updateUser } = require('../controllers/inicio');

router.get('/user', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUserById);


module.exports = router;