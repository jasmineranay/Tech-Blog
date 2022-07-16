# 14-MVC-Homework
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents 📑
- [14-MVC-Homework](#14-mvc-homework)
  - [Table of Contents 📑](#table-of-contents-)
  - [Description](#description)
  - [Application Preview](#application-preview)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Links](#links)
  - [Criteria](#criteria)
  - [Technologies](#technologies)
  - [Questions](#questions)
  - [License](#license)

## Description
Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

## Application Preview
<p align="center">
    <img alt="Site Preview" src="./public/images/SitePreview.png">
</p>

## Installation
- Copy the repository to your system
- Create .env file
    - SET DB_NAME to 'tech_blog'
    - SET DB_USER to 'YOUR-MYSQL-USERNAME'
    - SET DB_PASSWORD to 'YOUR-MYSQL-PASSWORD'
- npm install
- Load schema.sql via MySQL command line:
    - source schema.sql
- npm run seed
- node server.js


## Usage
- Create a User
- Login
- Browse Posts
- Add Comments to Posts
- Create, Edit, Delete your own Posts

## Links
-   Github Repository:
    - https://github.com/brianalegre/14-MVC-Techblog
-   Heroku Deployed:
    - https://alegre-techblog.herokuapp.com/

## Criteria
- Deployed to Heroku
- Handlebars {{{}}}
- Home Page
    - Nav links for Homepage, Dashboard and Login/Logout
    - Displays existing blogs posts
        - Post Title
        - Date Created
- Login Page
    - Sign Up
        - Create Username and Password
    - Sign In
        - Use Username and Password

- Click on Blog Post
    - Post Title
    - Content
    - Poster's Username
    - Date Created
    - Option to leave a comment
    - Submit Button
    - Post is updated with the comment
        - Commenter's Username and Date Posted
- Dashboard Page
    - Display Blog Posts, I have created
    - Option to add a new Blog Post
    - Clicking on previous Blog Posts
        - Able to Update or Delete

- Create New Post Button
    - Prompt to enter Title and Content
    - Button to create/submit new post
    - Title and Contents are saved - redirected to Dashboard
    - Newly created Post displayed on the Dashboard

- Logout
    - Logs user out
    - Set idle session timeout time

## Technologies
- MySQL2
- Sequelize
- dotenv
- Handlebars

## Questions
Questions? Concerns?  Contact Me Below:
- Github Username: jasmineranay
- Github Link: https://github.com/jasmineranay
- Email: brialegre@yahoo.com

## License
- Copyright 2022 Brian Alegre
- Licensed under the: [MIT License](https://opensource.org/licenses/MIT) 
