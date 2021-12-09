const { User } = require('./../models');

const userController = {
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err)
                res.json(err)
            });
    },

    updateEmployee({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            body,
            { new: true }
        )
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    // login(req, res) {

    // },

    // logout(req, res) {

    // },

    // assignEmployee(req, res) {

    // },

    // updateEmployee(req, res) {

    // },

    // deleteEmployee(req, res) {

    // },
};

module.exports = userController;