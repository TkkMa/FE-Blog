const queryParams = getQueryParams();
const authUser = isLoggedIn(queryParams);

if (!authUser.isAuth) {
  window.location.href = './index.html';
}

// Handling tags
$("#tags").keypress(function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
  if (e.key === " " || e.key === "Enter") {
    var inputTag = $(this).val().trim();
    $(this).val("");
    $('#tagLabels').append("<h3><span class='badge badge-pill badge-info'>" +
      inputTag + " <i class='fas fa-times fa-xs'></i></div></span></h3>");
  };
})

$('#tagLabels').on('mouseenter', 'i', function() {
  $(this).parent().css('background-color', '#117a8b')
});
$('#tagLabels').on('mouseleave', 'i', function() {
  $(this).parent().css('background-color', '#17a2b8')
});

$('#tagLabels').on('click', 'i', function() {
  $(this).parent().parent().remove();
});

// Validate form
$('#post-form').validate({
  rules: {
    title: "required",
    content: {
      required: true,
      minlength: 10
    }
  },
  messages: {
    title: "Please enter title of post",
    content: {
      required: "Please enter content of post",
      minlength: jQuery.validator.format("At least 10 characters are required!")
    }
  }
})

// ----------------------------------------------
// Add an event listener for form submissions
$('#post-form').on('submit', function(e) {
  e.preventDefault();
  if ($('#post-form').valid()) {
    // handling tags of post
    let tags = [];
    let tagCount = $('#tagLabels').children().length;
    for (let i = 0; i < tagCount; i++) {
      tags.push($(`#tagLabels h3:nth-child(${i+1}) span`).text().trim());
    }
    // generate post object
    let blogId = uuidv4();
    let newBlog = {
      id: blogId,
      title: $('#title').val(),
      image: $('#image').val(),
      content: $('#content').val().replace(/(\r\n|\n|\r)/g, "<br />"),
      tags,
      timeStamp: new Date(),
      author: authUser.value.username
    }
    // Save the name in localStorage.
    localStorage.setItem(`blog_${blogId}`, JSON.stringify(newBlog));
    window.location.href = `./index.html?userAuth=${queryParams.userAuth}`;
  }
});