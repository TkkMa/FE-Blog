  // Check loggedin status
  let queryParams = getQueryParams();
  let authUser = isLoggedIn(queryParams);

  if (!authUser.isAuth) {
    window.location.href = './index.html';
  };

  let blog = JSON.parse(localStorage.getItem(`blog_${queryParams.blog}`));

  $('head title').text(blog.title)
  $('.content').remove();
  let domElement = $('.attach-data').clone();
  $(domElement).find('.template-content').css('display', '').removeClass('template-content').addClass('content');
  $(domElement).find('.content-header h1').text(blog.title);
  $(domElement).find('.content-header p').html(`${moment(blog.timeStamp).format('ddd MMM D YYYY')}
                                                | <i class="fas fa-user"></i>
                                                <a href='./user.html?userAuth=${queryParams.userAuth}&user=${blog.author}'>${blog.author}</a>`);
  // | <i class="fas fa-comments"></i> <a href='#'>Leave a comment</a>`);
  $(domElement).find('.content-image img').attr('src', blog.image);
  $(domElement).find('.content-desc').html(blog.content);
  $(domElement).find('.content-tags span').empty();
  blog.tags.forEach(function(tag) {
    $(domElement).find('.content-tags span').append(`<button>${tag}</button>`)
  })

  // Find the blog ids for previous and next ------------------
  let blogRetrieve = getData('desc', 'blog')

  let loc = blogRetrieve.map(function(e) {
    return e.id;
  }).indexOf(queryParams.blog);
  let blogPrevId, blogNextId;
  if (loc === 0) {
    blogPrevId = null;
    blogNextId = blogRetrieve[loc + 1].id;
    $(domElement).find('.content-footer-links-prevNext li:first-child')
      .css('visibility', 'hidden');
  } else if (loc === blogRetrieve.length - 1) {
    blogPrevId = blogRetrieve[loc - 1].id;
    blogNextId = null;
    $(domElement).find('.content-footer-links-prevNext li:last-child')
      .css('visibility', 'hidden');
  } else {
    blogPrevId = blogRetrieve[loc - 1].id;
    blogNextId = blogRetrieve[loc + 1].id;
  }
  $(domElement).find('.content-footer-links-prevNext li:first-child a')
    .attr('href', `./post.html?userAuth=${queryParams.userAuth}&blog=${blogPrevId}`);
  $(domElement).find('.content-footer-links-prevNext li:last-child a')
    .attr('href', `./post.html?userAuth=${queryParams.userAuth}&blog=${blogNextId}`);
  $(domElement.html()).appendTo('.attach-data');