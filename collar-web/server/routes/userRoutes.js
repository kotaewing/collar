const router = require('express').Router();
const { createUser, updateEmployee, login, findAllUsers, deleteEmployee, findSingleUser } = require('../controllers/userController');

router.route('/').post(createUser);

router.route('/:userId').put(updateEmployee)

router.route('/').get(findAllUsers)

router.route('/:userId').get(findSingleUser)

router.route('/login').post(login)

router.route('/:userId').delete(deleteEmployee)


module.exports = router;