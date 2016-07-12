import $ from 'jquery';
import User from './user';
import allUsers from './allusers.js';
import router from './router';

function logIn(username) {
  var nameStr = String(username);
  allUsers.forEach(function (user, i, arr) {
    if (user.username === nameStr) {
      user.logMeIn();

    } else {
      username = new User(nameStr);
      username.newUser(nameStr);
      console.log(username);
      console.log(nameStr);
    }
  });
  location.hash = '#chatroom';
  router();
  // currentUser = username;
}

function logOut() {
  allUsers.forEach(function(user) {
    user.loginStatus = false;
  });
  router.loginRender();
}

let session = {
  activeUser: '',
  logIn: logIn,
  logOut: logOut,

};

export default session;
