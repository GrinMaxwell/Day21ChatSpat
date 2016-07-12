import $ from 'jquery';
import User from './user.js';
import allUsers from './allusers.js';
import session from './session.js';


let messagesFunctions = {

  allMessages: function () {
    $('.container').empty();
    allUsers.forEach(messagesFunctions.userMessages);
  },

  userMessages: function () {
    session.activeUser.messages.forEach(router.messageRender);
  }

};




function chatRender(username) {
  let messagePageHTML = $(`<section class="chat-page">
      <section class="message-container">
        <h4 class="message-header">Messages</h4>
        <section class="messages">

        </section>
        <input type="text" class="message-input" name="name" placeholder="Your sizzling zinger here!"/>
      </section>
      <aside class="users">
        <h3>Users:</h3>
        <a class="logout" href="#login">Logout</a>
      </aside>
    </section>`);

    $('.container').empty().append(messagePageHTML);
    $('.message-header').prepend(username + '\'s ');
    messagesFunctions.allMessages();
    console.log('chat showing');
}

export default chatRender;
