import $ from 'jquery';
import session from './session.js';
import User from './user.js';
import allUsers from './entry.js';

let messagesFunctions = {

  allMessages: function functionName() {
    allUsers.forEach(messagesFunctions.userMessages);
  },

  userMessages: function () {
    $('.chat-page').empty();
    session.activeUser.messages.forEach(messagesFunctions.messageRender);
  },

  messageRender : function (message, i, messages) {
    $('.chat-page').append(message);
    $('.chat-page').append(message.sender);
    $('.chat-page').append(message.timestamp);
  }
};



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
  messageRender(chat, (this.messages.length-1), this.messages);
};


export default messagesFunctions;
