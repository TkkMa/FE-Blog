//-- Function to retrieve blogs and users, returned as an array
function getData(filter, dataType) {

  if (dataType === 'blog') {
    let blogRetrieve = [];
    let keys = Object.keys(localStorage);
    keys.forEach(function(key) {
      if (key.substr(0, 4) === 'blog') {
        blogRetrieve.push(JSON.parse(localStorage.getItem(key)));
      }
    });

    //-- Sorting options: descending order, ascending order, today, weekly, most commented
    switch (filter) {
      case 'desc':
        blogRetrieve.sort(function(a, b) {
          return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()
        });
        break;
      case 'asc':
        blogRetrieve.sort(function(a, b) {
          return new Date(a.timeStamp).getTime() - new Date(b.timeStamp).getTime()
        });
        break;
      case 'today':
        blogRetrieve = blogRetrieve.filter(function(blog) {
          return moment(blog.timeStamp).format('YYYY MM DD') === moment(Date.now()).format('YYYY MM DD');
        });
        break;
      case 'week':
        blogRetrieve = blogRetrieve.filter(function(blog) {
          return moment(blog.timeStamp).isAfter(moment(Date.now()).subtract(7, 'days'));
        });
        blogRetrieve.sort(function(a, b) {
          return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()
        });
        break;
      default:
        blogRetrieve = blogRetrieve.filter(function(blog) {
          // .match() takes a regular expression
          return blog.content.match(filter) !== null || blog.title.match(filter) !== null;
        })
        blogRetrieve.sort(function(a, b) {
          return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()
        });
        break;
    }
    return blogRetrieve;
  } else if (dataType === 'user') {
    let userRetrieve = [];
    let keys = Object.keys(localStorage);
    keys.forEach(function(key) {
      if (key.substr(0, 4) === 'user') {
        userRetrieve.push(JSON.parse(localStorage.getItem(key)));
      }
    });
    return userRetrieve;
  }
}