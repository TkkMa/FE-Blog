const queryParams = getQueryParams();
const authUser = isLoggedIn(queryParams);
if (!authUser.isAuth) {
  window.location.href = './index.html';
};

//-- Retrieve user and blog arrays
const userRetrieve = getData(null, 'user');
const blogRetrieve = getData('desc', 'blog');

//-- Find index in the user object array where the element's username matches the user
const loc = userRetrieve.map(function(e) {
  return e.username;
}).indexOf(queryParams.user);
const user = userRetrieve[loc];
const blogs = blogRetrieve.filter(blog => blog.author === queryParams.user);
let link;

$('.sidebar').remove();
$('.content').remove();
//-- Populate DOM element with user profile data from user object
let domElement = $('.attach-data').clone();
$(domElement).find('.template-sidebar').css('display', '').removeClass('template-sidebar').addClass('sidebar');
$(domElement).find('.template-content').css('display', '').removeClass('template-content').addClass('content');
$(domElement).find('.sidebar-picture img').attr('src', user.avatar);
$(domElement).find('.sidebar-description #date').text(`Date joined: ${moment(user.timeStamp).format("DD/MM/YYYY")}`);
$(domElement).find('.sidebar-description #name').text(`Name: ${user.firstname} ${user.lastname}`);
$(domElement).find('.sidebar-description #email').text(`Email: ${user.email}`);
$(domElement).find('.content-title h1').text(`${user.username} profile`);
$(domElement).find('.content-description p').text(`${user.description}`);
$(domElement).find('.content-entries h1').html(`<i class="fas fa-angle-down"></i>Entries Created(${blogs.length})`)
blogs.forEach(function(blog) {
  link = `?userAuth=${queryParams.userAuth}&blog=${blog.id}`;
  $(domElement).find('.content-list').append(`<li><a href='./post.html${link}'>${blog.title} (${moment(blog.timeStamp).format('DD/MM/YYYY')})</a></li>`);
  $(domElement).find('.content-list').append(`<p>${blog.content.substring(0,80)}...</p>`);
});
$(domElement.html()).appendTo('.attach-data');

//-------------------

$(".fa-angle-down").on('click', function() {
  $(this).toggleClass("rotate");
  $(this).parent().siblings().slideToggle('slow');
})

//-- Hide user profile Edit button if authenticated user !== user profile viewed
if (authUser.isAuth && queryParams.user !== authUser.value.username) {
  $("button#edit-userProf-btn").css('display', 'none');
} else if (authUser.isAuth && queryParams.user === authUser.value.username) {
  $("button#edit-userProf-btn").css('display', '');
}

//-- Treatment to prevent removal of query parameters upon button submission in form
$("button#edit-userProf-btn").on('click', function() {
  window.location.href = `./addUserDesc.html?userAuth=${queryParams.userAuth}&user=${queryParams.user}`;
})