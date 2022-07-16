// Import Model
const { Blog } = require('../models');

// Create Seed Data
const blogData = [
    {
        blog_title: 'One Post For All',
        blog_content: 'Testing My First Post, what does it look like',
        blog_post_date: '2022-03-25',
        user_id: 1,
    },
    {
        blog_title: 'Two is the new me',
        blog_content: 'It takes Thu to keep the moment going',
        blog_post_date: '2022-03-24',
        user_id: 2,
    },
    {
        blog_title: 'Theety the Bird',
        blog_content: 'Three Theeties are besties',
        blog_post_date: '2022-03-25',
        user_id: 1,
    },
]

const seedBlogs = () => Blog.bulkCreate(blogData);

// Export
module.exports = seedBlogs;