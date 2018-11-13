// Retrieve data from local Storage via looping
const blogRetrieve = getData('desc', 'blog');
const blogs = blogRetrieve.filter(blog => blog.author === 'tma');

const queryParams = getQueryParams();
const authUser = isLoggedIn(queryParams);
let link;
$('.content-entries h1').html(`<i class="fas fa-angle-down"></i>Entries Created (${blogs.length})`)
$('#blog-entry-list').empty();
blogs.forEach(function(blog) {
  if (authUser.isAuth) {
    link = `?userAuth=${queryParams.userAuth}&blog=${blog.id}`;
    $('#blog-entry-list').append(`<li><a href='./post.html${link}'>${blog.title} (${moment(blog.timeStamp).format('DD/MM/YYYY')})</a></li>`);
  } else {
    $('#blog-entry-list').append(`<li>${blog.title} (${moment(blog.timeStamp).format('DD/MM/YYYY')})</li>`);
  }
  $('#blog-entry-list').append(`<p>${blog.content.substring(0,80)}...</p>`)
});

$(".fa-angle-down").on('click', function() {
  $(this).toggleClass("rotate");
  $(this).parent().siblings().slideToggle('slow');
})