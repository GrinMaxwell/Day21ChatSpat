# Day 21 Assignment: Basic Chat with modular code


## Notes


## Build order
1. Get the scaffold all set up and working
2. Some basic styles to test connectivity (set up the header with a flame effect)
3. Set up the different js modules and basic imports
4. get ahead of myself writing new constructors and methods and whatnot without really thinking about build order (and come into the readme to start thinking about it . . . So here we are)
5. She wants:
- Models (write constructors for these):
  - Session, for keeping track of information about the application's user. It should have a username property.
  - Message, for keeping track of individual messages. It should have timestamp, sender, and body properties. It should have a save and delete method on its prototype.
- Views (write at least a render function for each of these):
  - Login, for rendering the login page and handling any user events that occur on the login page
  - Chat, for rendering the chat room page and handling any user events that occur on the chat page
  - Message, for rendering a single message to the chat area, and handling any user events that can occur for a single message.
6. So I made
  - an `entry.js` that runs the primary js (initial render, etc.) and imports the relevant stuff all the others
  - a `user.js` that makes the user constructor
  - a `session.js` that handles all logins, logouts, etc. including making a new user when their login doesn't match known users
  - a `message.js` that handles all the different message render functions (single message, one user's messages, and all the messages) and the method to add new messages to a user
7. getting them all to speak to one another properly was a little difficult. I had to import something from each one into almost every other one (including a key variable from `entry.js`), but it's working well so far
8.
