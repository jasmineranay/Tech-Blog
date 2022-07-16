// Import Model
const { Comment } = require('../models');

// Create Seed Data
const commentData = [
    {
        comment_content: 'FIRST COMMENT ON FIRST POST',
        comment_post_date: '2022-03-25',
        user_id: 2,
        blog_id: 1,
    },
    {
        comment_content: 'SECOND COMMENT, MAYBE FIRST ON SECOND POST',
        comment_post_date: '2022-03-25',
        user_id: 1,
        blog_id: 2,
    },
    {
        comment_content: 'THIRD COMMENT, WHERE AM I',
        comment_post_date: '2022-03-25',
        user_id: 1,
        blog_id: 1,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

// Export
module.exports = seedComments;