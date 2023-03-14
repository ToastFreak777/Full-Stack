# Full Stack React Blog Application

---

## Technologies

- FrontEnd

  - TypeScript
  - React
  - Axios
  - Bootstrap
  - SASS/SCSS
  - Vite

- Backend

  - TypeScript
  - Express
  - Bcrypt
  - Dotenv
  - JWT
  - MongoDB & Mongoose
  - Morgan
  - Multer
  - Sharp

## Project Description

This is a full stack react project. A blog where users can register and begin chatting and interacting with the community. The project has basic CRUD functionality, the app fetches the lastes posts, users can create new posts, update existing posts, and delete them as well. Users can also register, login, and update their own profiles. To summarize the app a bit, it's basically a social media website or a twitter/facebook clone

## Login Register Logout

This project has authentication implemented, users can view posts and look at a specific users posts without logging in and authenticating themselves but any other action is route protected. Users will have to register to create posts and get full access to the site. In the backend the users password is hashed using Bcrypt then a JWT token will be generated and sent to the client. The client will generate a new token whenever the user logs in and then either store the token in local storage or sessions storage. When a user logs out the token will be deleted.

## Post CRUD

Once logged in users will be able to do basic crud functions with posts

## Mongo

Mongo is the database used for this project and in it we store the users data and the users posts.

## Viewing profiles

Users can click and view a specific post or they can view all posts created by a single user
