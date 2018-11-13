let userObj = {
  key: '',
  value: '',
  isAuth: false
}

//-- Obtain ALL query params from http address
function getQueryParams() {
  // Retrieve data from local Storage via looping
  let qArr = location.search.substring(1).split('&');
  let result = {};
  for (let i = 0; i < qArr.length; i++) {
    qArr[i] = qArr[i].split('=');
    result[qArr[i][0]] = decodeURIComponent(qArr[i][1]);
  }
  return result;
}

//-- Function to identify full user id from query param: user
function identifyUser(userId) {
  let keys = Object.keys(localStorage);
  return keys.find(function(key) {
    if (key.substr(0, 4) === 'user') {
      return key.substr(key.length - 12) === userId;
    }
  })
}

//-- Check if user is logged in and manipulate navbar labels
function isLoggedIn(paramObj) {
  //-- Check user ID in query param matches that (last 12 digits of user id) in local storage
  userObj.key = identifyUser(paramObj.userAuth);
  userObj.value = JSON.parse(localStorage.getItem(userObj.key));
  // console.log(foundUserKey, foundUserValue);
  if (userObj.key && userObj.value.isLoggedIn) {
    $('#login a').text(`Signed in as ${userObj.value.username}`).removeAttr('href');
    $('#signup a').text(`Logout`).attr('href', 'javascript:void(0);').attr('onclick', 'logout();');
    $('#home a').attr('href', `./index.html?userAuth=${paramObj.userAuth}`);
    $('#about a, .footer-menu li:nth-child(3) a').attr('href', `./about.html?userAuth=${paramObj.userAuth}`);
    $('.footer-menu li:first-child a').attr('href', `./terms.html?userAuth=${paramObj.userAuth}`);
    userObj.isAuth = true;
  } else {
    userObj.isAuth = false;
  }
  return userObj;
};

function deactivUser() {
  let queryParams = getQueryParams();
  let foundUserKey = identifyUser(queryParams.userAuth);
  let foundUserValue = JSON.parse(localStorage.getItem(foundUserKey));
  foundUserValue.isLoggedIn = false;
  localStorage.setItem(foundUserKey, JSON.stringify(foundUserValue));
}

//-- Log out and reset isLoggedIn to false.  Reset navbar labels
function logout() {
  deactivUser();
  $('#login a').text('Login').attr('href', './login.html');
  $('#signup a').text(`Sign Up`).removeAttr('onclick');
  $('#home a').attr('href', `./index.html`);
  $('#about a').attr('href', `./about.html`);
  window.location.href = './index.html';
  return false;
}

//--set isLoggedIn to false before browser tab is closed/redirected
// window.onbeforeunload = function() {
//   deactivUser();
//   return '';
// }