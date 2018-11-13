$('#register-form').validate({
  rules: {
    email: {
      required: true,
      email: true
    },
    userName: {
      required: true,
      minlength: 3
    },
    password: function(element, errorClass) {
      if (!element.attr("value").match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?])[A-Za-z\d$@$!%*#?]{8,}$/gi)) {
        $('label').addClass(errorClass);
        $('input').addClass(errorClass);
      }
    },
  },
  messages: {
    email: 'Please provide a valid email address',
    userName: 'Please provide a username with a minimum of 3 characters',
    password: 'Password must have at least 8 characters including one letter, one number and one symbol'
  }
})

$('#register-form').on('submit', function(e) {
  if ($('#register-form').valid()) {
    let newUser = {
      id: uuidv4(),
      firstname: $('#firstName').val(),
      lastname: $('#lastName').val(),
      avatar: $('#avatar').val(),
      email: $('#email').val(),
      username: $('#userName').val(),
      password: $('#password').val(),
      timeStamp: new Date(),
      description: 'Enter your description...',
      isLoggedIn: true
    }

    const userRetrieve = getData(null, 'user');
    let found = userRetrieve.find(function(user) {
      return (user.username === newUser.username || user.email === newUser.email)
    })

    if (!found) {
      localStorage.setItem(`user_${newUser.id}`, JSON.stringify(newUser));
      $('#register-form').attr('action', `./index.html?userAuth=${newUser.id.split('-')[4]}`);
    } else {
      $('.section-title p').css('display', 'block');
      return false;
    }
  }
})