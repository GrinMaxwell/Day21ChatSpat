import $ from 'jquery';
import User from './user.js';
import session from './session.js';
import messagesFunctions from './message.js';

let bob = new User('Bob');
let allUsers = [];



$(document).ready(function() {
  session.loginRender();

  $.ajax({
    url: 'https://tiny-za-server.herokuapp.com/collections/jcsjchat',
    type: 'GET',
    dataType: 'json',
    success: (response) => {
      allUsers = response;
      console.log(allUsers);
    }
  });

  $('html').on('keyup', function(evt) {
    var loginEntry = $('.login-input').val();
    if (evt.keyCode === 13 && loginEntry) {
      session.logIn(loginEntry);
      console.log(loginEntry);

    }
});

});//end docready


export default allUsers;
