const router = require('express').Router();
const { createCompany, updateCompany, findAllCompanies, findSingleCompany, deleteCompany } = require('../controllers/companyController');

router.route('/').post(createCompany)

router.route('/:businessNumber').put(updateCompany)

router.route('/').get(findAllCompanies)

router.route('/:businessNumber').get(findSingleCompany)

router.route('/:businessNumber').delete(deleteCompany)

module.exports = router;