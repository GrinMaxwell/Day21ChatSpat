import $ from 'jquery';
import allUsers from './allusers.js';
import router from './router';


function User (username) {
  this.username = username;
  this.loginStatus = false;
  this.messages = [];
}

User.prototype.newMessage = function(message) {
  var chat = {};
  chat.timestamp = new Date();
  chat.sender = this;
  chat.text = message;
  $.ajax({
      url: 'https://tiny-za-server.herokuapp.com/collections/jcsjchat',
      type: 'PUT',
      data: JSON.stringify(this),
      contentType: 'application/json',
      success: (response) => {
        console.log('new message!');
        this._id = response._id;
      }
  });
  this.messages.push(chat);
  router.messageRender(chat);
};

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
  router.chatRender();
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


export default User;
