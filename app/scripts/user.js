import $ from 'jquery';
import allUsers from './entry.js';


function User (username) {
  this.username = username;
  this.loginStatus = false;
  this.messages = [];
}



export default User;
