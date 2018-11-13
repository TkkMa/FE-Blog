$("#login-form").validate({
  rules: {
    username: "required",
    password: "required"
  },
  messages: {
    username: 'Please enter your username',
    password: 'Please enter your password'
  }
});

$('#login-form').on('submit', function(e) {
  if ($('#login-form').valid()) {
    let username = $('#username').val();
    let password = $('#password').val();

    let userRetrieve = getData(null, 'user');
    let foundUser = userRetrieve.find(function(user) {
      return user.username === username;
    });

    if (foundUser && foundUser.password === password) {
      foundUser.isLoggedIn = true;
      localStorage.setItem(`user_${foundUser.id}`, JSON.stringify(foundUser));
      $('#login-form').attr('action', `./index.html?userAuth=${foundUser.id.split('-')[4]}`);
    } else {
      $('.section-title p').css('display', 'block');
      return false;
    }
  }
})