import $ from 'jquery';


let allUsers = [];



$.ajax({
  url: 'https://tiny-za-server.herokuapp.com/collections/jcsjchat',
  type: 'GET',
  dataType: 'json',
  success: (response) => {
    allUsers = response;
    console.log(allUsers);
  }
});
console.log('all users', allUsers);

export default allUsers;
