const router = require('express').Router();
const { createUser, updateEmployee } = require('./../controllers/userController');

router
    .route('/')
    .post(createUser);

router
    .route('/:userId')
    .put(updateEmployee)


module.exports = router;