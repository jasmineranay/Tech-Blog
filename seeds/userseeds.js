// Import Model
const { User } = require('../models');

// Create Seed Data
const userData = [
    {
        username: 'userOne',
        user_email: 'UserONe@test.com',
        user_password: 'test1234',
        // blog_id: 1,
    },
    {
        username: 'userTwo',
        user_email: 'UserTwo@test.com',
        user_password: 'test1234',
        // blog_id: 2,
    },
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

// Export
module.exports = seedUsers;