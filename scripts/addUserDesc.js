const queryParams = getQueryParams();
const authUser = isLoggedIn(queryParams);

if (!authUser.isAuth && queryParams.user !== authUser.value.username) {
  window.location.href = `./user.html?userAuth=${queryParams.userAuth}&user=${queryParams.user}`;
};

$('#userDesc-form').on('submit', function(e) {
  e.preventDefault();

  // Retrieve data from local Storage via looping
  authUser.value.description = $('#content').val();
  localStorage.setItem(authUser.key, JSON.stringify(authUser.value));
  window.location.href = `./user.html?userAuth=${queryParams.userAuth}&user=${queryParams.user}`;
})

$('.col-sm-12 a').attr('href', `./user.html?userAuth=${queryParams.userAuth}&user=${queryParams.user}`)