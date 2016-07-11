import $ from 'jquery';
import User from './user.js';

function allMessages() {
  activeUser.messages.forEach(messageRender);
}

function messageRender(message, i, messages) {
  $('.chat-page').append(message);
  $('.chat-page').append(message.sender);
  $('.chat-page').append(message.timestamp);
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
  messageRender(chat, (this.messages.length-1), this.messages);
};
