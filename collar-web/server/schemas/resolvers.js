const mongoose = require("mongoose");
const { AuthenticationError } = require("apollo-server-express");
const { User, Roadtrip, Image } = require("../models");
const { signToken } = require("../utils/auth");
//const cloudinary = require("cloudinary").v2;

// Query ( *me, *employee, *employees, *job, *jobs, *company, *companies, *location, *form )

const resolvers = {
};

module.exports = resolvers;
// Mutation (*login, *createUser, *updateEmployee,*assignEmployee, *removeEmployee, *deleteEmployee, *createJob, *updateJob, *deleteJob, *updateLocation, *createForm, *addQuestion, *addAnswer, *deleteQuestion, *deleteAnswer)
