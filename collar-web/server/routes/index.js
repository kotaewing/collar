const router = require('express').Router();
const userRoutes = require('./userRoutes');
const companyRoutes = require('./companyRoutes')

router.use('/users', userRoutes);

router.use('/companies', companyRoutes);

module.exports = router;