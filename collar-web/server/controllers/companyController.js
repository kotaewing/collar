const { Company } = require('../models')

const companyController = {
    createCompany({ body }, res) {
        Company.create(body)
            .then(dbCompanyData => res.json(dbCompanyData))
            .catch(err => {
                console.log(err)
                res.json(err)
            });
    },

    updateCompany({ body, params }, res) {
        Company.findOneAndUpdate(
            { businessNumber: params.businessNumber },
            body,
            { new: true }
        )
            .select('-__v')
            .then(dbCompanyData => res.json(dbCompanyData))
            .catch(err => res.json(err))
    },

    async findAllCompanies(req, res) {
        const addCompanies = await Company.find()
        res.status(200).json(addCompanies)
    },

    async findSingleCompany({ params }, res) {
        const singleCompany = await Company.findOne({ businessNumber: params.businessNumber})
        res.status(200).json(singleCompany)
    },

    async deleteCompany({ params }, res){
        const deletedCompany = await Company.findOneAndDelete({ businessNumber: params.businessNumber})
        if(!deletedCompany) {
            return res.status(400).json({ message: "Business not found"})
        }
        res.status(200).json({ message: "Business deleted"})
    }

};

module.exports = companyController;