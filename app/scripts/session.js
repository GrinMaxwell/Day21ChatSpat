import $ from 'jquery';
import User from './user.js';
import messagesFunctions from './message.js';
import allUsers from './entry.js';



User.prototype.logMeIn = function(username) {
  this.loginStatus = true;
  var attempt;
  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/jcsjchat',
    type: 'PUT',
    data: JSON.stringify(this),
    contentType: 'application/json',
    success: (response) => {
      console.log('login successful!');
    }
  });
  session.chatRender();
  console.log(this);
};

User.prototype.newUser = function(username) {
  this.loginStatus = true;
  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/jcsjchat',
    type: 'POST',
    data: JSON.stringify(this),
    contentType: 'application/json',
    success: (response) => {
      console.log('new user!');
      this._id = response._id;
      allUsers.push(this);
      console.log(this);
      console.log(allUsers);
    }
  });
};

function loginRender() {
  $('.login-page').show();
  $('.chat-page').hide();
  console.log('login showing');
}

function chatRender(username) {
  $('.chat-page').show();
  $('.login-page').hide();
  $('.message-header').prepend(username+'\'s ');
  console.log('chat showing');
}

function logIn(username) {
  var nameStr = String(username);
  allUsers.forEach(function (user, i, arr) {
    if (user.username === nameStr) {
      user.logMeIn();
      chatRender(username);
    } else {
      username = new User(nameStr);
      username.newUser(nameStr);
      chatRender(username);
      console.log(username);
      console.log(nameStr);
    }
  });
  // currentUser = username;
}

function logOut() {
  allUsers.forEach(function(user) {
    user.loginStatus = false;
  });
  session.loginRender();
}

let session = {
  activeUser: '',
  loginRender: loginRender,
  chatRender: chatRender,
  logIn: logIn,
  logOut: logOut,

};

export default session;
