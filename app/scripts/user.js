import $ from 'jquery';

function User (username) {
  this.username = username;
  this.loginStatus = false;
  this.messages = [];
}

User.prototype.login = function(username) {
  var attempt;
  $.ajax({
    
  });
};

export default User;
