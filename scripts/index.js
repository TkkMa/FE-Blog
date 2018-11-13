let authUser;
let queryParams;

$(document).ready(function() {
  populateData('desc', 'blog'); //-- populate data stored in local storage onto index.html
})

// Populate main section
function populateData(filter, dataType) {
  if (localStorage) {
    // Retrieve data from local Storage via looping
    let blogRetrieve = getData(filter, dataType);
    queryParams = getQueryParams();
    authUser = isLoggedIn(queryParams);
    //-- Remove any existing blogs on html and replaced with sorted blogs
    $('.item').remove();
    //-- Clone HTML hidden template in index.html and manipulate as JQuery object
    let domSegment = $('.attach-data').clone();
    $(domSegment).find('.template-item').css('display', '').removeClass("template-item").addClass("item");
    blogRetrieve.forEach(function(blog) {
      $(domSegment).find('.item .col-sm-4 img').attr("src", blog.image);
      $(domSegment).find('.description h1').text(blog.title);
      $(domSegment).find('.description .content').html(`${blog.content.substring(0,250)}...`);
      if (authUser.isAuth) {
        $(domSegment).find('.description .read-more a')
          .attr('href', `./post.html?userAuth=${queryParams.userAuth}&blog=${blog.id}`);
        $(domSegment).find('.description h4').html(`${moment(blog.timeStamp).format('ddd MMM D YYYY')} submitted by
                                                    <a href="./user.html?userAuth=${queryParams.userAuth}&user=${blog.author}">${blog.author}</a>`);
      } else {
        $(domSegment).find('.description .read-more a').attr('href', "javascript:void(0)")
          .attr('onclick', 'authMessage()');
        $(domSegment).find('.description h4').html(`${moment(blog.timeStamp).format('ddd MMM D YYYY')}
                                                  submitted by <a onclick="authMessage();" href="javascript:void(0)">${blog.author}</a>`);
      }
      $(domSegment).find('.description .tags').empty();
      blog.tags.forEach(function(tag) {
        $(domSegment).find('.description .tags').append(`<button>${tag}</button>`);
      });
      //-- Append to DOM in index.html
      $(domSegment.html()).appendTo('.attach-data');
    });
  }
}

//-- Add post - only logged in users can add post
$('#new-post').on('submit', function(e) {
  e.preventDefault();
  if (authUser.isAuth) {
    $('#new-post').attr('action', `./addPost.html?userAuth=${queryParams.userAuth}`);
    window.location.href = `./addPost.html?userAuth=${queryParams.userAuth}`;
  } else {
    $('#new-post').removeAttr('action');
    $('#auth-message').css('display', 'block');
  }
})

//-- Search blog via search bar and populate main section
$('.fa-search').click(function() {
  let searchParam = new RegExp(escapeRegex($('.side-item input').val()), 'gi');
  populateData(searchParam, 'blog');
})

//-- Enable 'enter' key to submit search in search bar
$('.side-item input').keypress(function(e) {
  if (e.key === "Enter") {
    let searchParam = new RegExp(escapeRegex($('.side-item input').val()), 'gi');
    populateData(searchParam, 'blog');
  }
})

//-- Display unauthorized access message when read-more/post is clicked
function authMessage() {
  $('#auth-message').css('display', 'block');
}

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); //escape special chars
};