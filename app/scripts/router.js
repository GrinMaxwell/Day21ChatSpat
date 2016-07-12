import $ from 'jquery';
import User from './user.js';
import allUsers from './allusers.js';
import session from './session.js';
import chatRender from './chatroom.js';



function router() {
    let hash = location.hash;
    if (hash === '#login' || hash === ''){
        loginRender();
    } else if (hash === '#chatroom') {
      chatRender();
    // } else if (hash === '#chatroom') {
    //   render one user's messages
    }




}


function loginRender() {
    let $loginHTML = $(`<section class="login">
        <h4>Flame War Central</h4>
        <h4>Login here:</h4>
        <input type="text" class="login-input" name="name" placeholder="Press Enter When Done"/>
      </section>`);

    $('.container').empty().append($loginHTML);
    console.log('login showing');

    $('html').on('keyup', function(evt) {
      var loginEntry = $('.login-input').val();
      if (evt.keyCode === 13 && loginEntry) {
        session.logIn(loginEntry);
      }
    });
}

function messageRender(message) {
    $('.chat-page').append(message);
    $('.chat-page').append(message.sender);
    $('.chat-page').append(message.timestamp);
}



export default router;
