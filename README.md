Title of App: DevCity
 
Link to Live App: https://mighty-basin-96424.herokuapp.com/


<img width="1280" alt="Screen Shot 2020-11-11 at 14 45 21" src="https://user-images.githubusercontent.com/55896961/98873114-9b718080-242c-11eb-8706-4d56dcab8d05.png">

<img width="1280" alt="Screen Shot 2020-11-11 at 14 44 51" src="https://user-images.githubusercontent.com/55896961/98873115-9ca2ad80-242c-11eb-8b00-bfa0e126b7d8.png">

<img width="1280" alt="Screen Shot 2020-11-11 at 14 45 06" src="https://user-images.githubusercontent.com/55896961/98873121-9e6c7100-242c-11eb-8546-97ff19b042d1.png">

API: 
Summary: This API has a number of protected endpoints with authentication and verification using web tokens. The API connects to a MongoDB database and stores profiles, users, and login credentials to the database. Using the MongoDB models, the API uses the users login credentials in order to retrieve their individual profile information and allows them to edit, delete, and add information to their profile on the application. Also, the API targets other users under the profile section of the application allowing other developers to communicate with one another and review their profiles and skills as well. The API also allows for a new user to login and make a profile from scratch.

Endpoints: 

Posts: 
 
 @route    POST api/posts
 @desc     Create a post
 @access   Private
 
 @route    GET api/posts
 @desc     Get all posts
 @access   Private
 
 @route    GET api/posts/:id
 @desc     Get posts by ID
 @access   Private
 
 @route    DELETE api/posts/:id
 @desc     Delete a post 
 @access   Private
 
 @route   PUT api/posts/like/:id
 @desc     Like a post
 @access   Private
 
 @route   PUT api/posts/unlike/:id
 @desc     Like a post
 @access   Private
 
 @route    POST api/posts/comment/:id
 @desc     Comment on a post
 @access   Private
 
 @route    DELETE api/posts/comment/:id/:comment_id
 @desc     Delete a comment
 @access   Private
 
 Profile:
 
 @route GET api/profile/me
 @description Get current users profile
 @access Private
 
 @route GET api/profile
 @description Create/update user profile
 @access Private
 
 @route GET api/profiles
 @description Get all profiles
 @access Public
 
 @route GET api/profile/user/:user_id
 @description Get profile by user ID
 @access Public
 
 @route DELETE api/profile
 @description DELETE profile, user, and posts
 @access Private
 
 @route PUT api/profile/experience
 @description Add profile experience 
 @access Private
 
 @route DELETE api/profile/experience/:exp_id
 @description Delete experience from profile
 @access Private
 
 @route PUT api/profile/education
 @description Add profile education
 @access Private
 
 @route DELETE api/profile/education/:edu_id
 @description Delete education from profile
 @access Private
 
 @route GET api/profile/github/:username
 @description Get user repos from github
 @access Public
 
 Users: 
 
 @route POST api/users
 @description Register user
 @access Public
 
 

Description: This application is a social platform for developers. A user can register and build a profile with education and experience fields and connect with other developers. This application also allows the logged in user to have him/her github repos attatched to their profile for other developers to view. There is also a section to like, unlike, and comment on other developers post. Enjoy!!

Technologies Used on Server: NodeJS, MongoDB, Mocha

