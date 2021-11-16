const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		employeeId: Int
		firstName: String
		lastName: String
		email: String
		admin: Boolean
		company: Company
		jobs: [Job]
		phoneNumber: Int
		location: Location
	}
	type Job {
		title: String
		description: String
		time: Int
		address: String
		form: Form
		jobNumber: Int
		employee: User
	}
	type Company {
		name: String
		address: String
		employees: [User]
		businessNumber: Int
	}
	type Admin {
		employees: [User]
	}
	type Query {
		me: User
		employee(employeeId: Int!): User
		employees: [User]
		job(jobNumber: Int!): Job
		jobs: [Job]
		company(businessNumber: Int!): Company
		companies: [Company]
		<COMMENT> add location
	}
	type Auth {
		token: ID!
		user: User
	}
	type Mutation {
		login(email: String!, password: String!): Auth
		createUser(
			employeeId: Int!
			firstName: String!
			lastName: String!
			email: String!
			admin: Boolean!
			company: Company!
			phoneNumber: Int!å
		): Auth
		updateEmployee(
			_id: ID!
			firstName: String!
			lastName: String!
			username: String!
			email: String!
			admin: Boolean!
			company: Company!
			phoneNumber: Int!
		): User
		assignEmployee(employeeId: Int!, _id: ID!): User
		removeEmployee(employeeId: Int!, _id: ID!): Job
		deleteEmployee(employeeId: Int!, _id: ID!): Company
		createJob(
			_id: ID!
			title: String!
			description: String!
			time: Int!
			address: String!
			jobNumber: Int!
			employee: User!
		): Job
		updateJob(
			_id: ID!
			title: String!
			description: String!
			time: Int!
			address: String!
			jobNumber: Int!
			employee: User!
		): Job
		deleteJob(_id: ID!): Job
		addImage(url: String!, alt: String!, _id: ID!): Roadtrip
		deleteImage(_id: ID!, imageId: ID!): Roadtrip
		addStop(lat: String!, lon: String!, _id: ID!): Roadtrip
		deleteStop(_id: ID!, stopId: ID!): Roadtrip
		addPlaylist(playlist: String!, roadtripId: ID!): Roadtrip
		deletePlaylist(_id: ID!): Roadtrip
	}
`;

// Expense / Image / Roadtrip / Stop / User /  Me / Auth /
// Query ( me, user, users, roadtrip, roadtrips )
// Mutation (login, createUser, addUser, removeUser, addRoadtrip, deleteRoadtrip, addExpense, updateExpense, deleteExpense, addImage, deleteImage, addStop, deleteStop)

module.exports = typeDefs;
