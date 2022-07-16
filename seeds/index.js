// Import Modules
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');
const seedComments = require('./comment-seeds')

// Add Seed Data
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--- DB SYNCED! ---');

    await seedUsers(); 
    console.log('--- USERS SEEDED! ---');

    await seedBlogs();
    console.log('--- Blogs SEEDED! ---');

    await seedComments();
    console.log('--- Comments SEEDED! ---');

    process.exit(0);
};

seedAll();