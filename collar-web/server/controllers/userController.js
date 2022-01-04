const { User } = require('./../models');
const { signToken } = require('../utils/auth');

const userController = {
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err)
                res.json(err)
            });
    },
    //will be used to assign employees, or update names, passwords, change location, etc
    updateEmployee({ body, params }, res) {
        User.findOneAndUpdate(
            { employeeId: params.userId },
            body,
            { new: true }
        )
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err))
    },

    async findAllUsers(req, res) {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    },

    async findSingleUser({ params }, res) {
        const singleUser = await User.findOne({ employeeId: params.userId})
        res.status(200).json(singleUser)
    },

    async login({ body }, res) {
        const user = await User.findOne({ email: body.email });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
    
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user, message: "You're logged in!" });
      },

    async deleteEmployee({ params }, res){
        const deletedEmployee = await User.findOneAndDelete({ employeeId: params.userId})
        if(!deletedEmployee) {
            return res.status(400).json({ message: "Employee not found"})
        }
        res.status(200).json({ message: "Employee deleted"})
    }

};

module.exports = userController;