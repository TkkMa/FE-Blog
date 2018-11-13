let date1 = new Date();
date1.setDate(date1.getDate() - 3);
let date2 = new Date();
date2.setDate(date2.getDate() - 8);
let date3 = new Date();
let date4 = new Date();
date4.setDate(date4.getDate() - 14);

let blogArray = [{
    id: uuidv4(),
    title: 'The beautiful Sakuras',
    image: './images/arno-smit-88929-unsplash.jpg',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Sakura", "pink", "flowers"],
    timeStamp: date4,
    author: 'vcheng'
  },
  {
    id: uuidv4(),
    title: 'Canyon Journey',
    image: './images/ivana-cajina-728980-unsplash.jpg',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Canyon", "mountains", "hike"],
    timeStamp: date2,
    author: 'tma'
  },
  {
    id: uuidv4(),
    title: 'Local Storage',
    image: './images/samuel-zeller-118195-unsplash.jpg',
    content: "The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.↵↵It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page.",
    tags: ["local", "storage", "browser", "data"],
    timeStamp: date1,
    author: 'tma'
  },
  {
    id: uuidv4(),
    title: 'Question Mark',
    image: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f0a61f73dbc747e7d9907bbfa8a87c45&auto=format&fit=crop&w=1050&q=80',
    content: "Definition 1. A punctuation symbol (?) written at the end of a sentence or phrase to indicate a direct question. Also called interrogation point. 2. Something that is unknown, mysterious, or doubtful: Which players will still be on the team next year remains a question mark.",
    tags: ["question", "unknown", "lost"],
    timeStamp: date1,
    author: 'vcheng'
  },
  {
    id: uuidv4(),
    title: 'Blog Post vs Blog',
    image: 'https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=841c8eccb063d0b38e52adc64c2684ff&auto=format&fit=crop&w=967&q=80',
    content: `Let’s get this straight up front: I am now writing a blog post, not blogging a blog.<br />For many, using the word blog when you mean blog post is an understandable mistake. Most who make it are new to blogging, or aren’t fluent in the language of the Web. But over the last several months it’s become clear to me that the tendency to make this error has infected even some of the most Internet-savvy denizens of the Web. And it needs to stop.<br />I hit my breaking point a few weeks back with—who else?—Amanda Palmer. Of all the irritating things in her blog post about “A Poem for Dzhokhar,” the most irritating was the title: “A Blog About ‘A Poem for Dzhokhar.’ ” Palmer, of course, had not created a whole blog about her poem “A Poem for Dzhokhar.” (Even she’s not self-involved enough to do that.) Instead, she’d written a 2,000-word blog post about the poem.<br /><br />But it’s not just the frequently annoying who blunder in this way. Even the late great Roger Ebert, a terrific writer and one of the most popular bloggers on the Web, used to commit this faux pas all the time.  Sometimes I started to wonder whether he was joking.<br /><br />The problem goes all the way to the top. Arianna Huffington, founder of the megablog the Huffington Post, is known to introduce new blog posts as “my latest blog.”<br /><br />The reasons for avoiding this linguistic boner are pretty simple. The first, and perhaps most obvious, is that it can be confusing. No matter what dictionary you check—online, Urban, or otherwise—you will find no definition of blog that means blog post. Saying one to mean the other is like saying magazine when you mean article. The listener or reader may get your drift eventually, but only after they’ve been thrown for a loop.<br /><br />Second, it can undercut anything serious you have to say. The word blog is, even after all these years, a little funny-sounding, and this is magnified many fold when you use it incorrectly. You don’t want to undermine your own writing by calling your brilliant post a “blog.”<br /><br />And it’s not as if there aren’t an abundance of other, better options. In addition to blog post, there’s blog entry, or the increasingly interchangeable article (only advisable if you think the post is substantial enough to warrant such a description). A really substantive post could also be called a piece—or, if it has a narrative dimension, a story. If you’re into the whole brevity thing, you can avoid “blog” entirely by using the equally concise and more correct post.<br /><br />The No. 1 reason to make this change—and I’m not going to sugarcoat this—is that calling a post a blog makes you sound stupid. That may seem harsh, but I’m doing you a favor. Every time you make this mistake, it sounds like you don’t understand this newfangled thing, the World Wide Web. Even if you think all those who might judge you are just being superficial, that’s not going to stop them from judging you.<br /><br />To sum up: This is a blog post or a post or a blog entry. It is also a piece and an article. But it is not a blog.<br /><br />Trust me. I’m a blogger. I blog blogs all the time.<br /><br />Original source: <a href="http://www.slate.com/blogs/browbeat/2013/05/24/blog_post_vs_blog_this_blog_post_is_not_a_blog.html">This is a Blog Post.  It is Not a "Blog"</a>`,
    tags: ["blog", "post", "definition"],
    timeStamp: date3,
    author: 'tma'
  }
];

let userArray = [{
    id: uuidv4(),
    firstname: 'Terence',
    lastname: 'Ma',
    avatar: 'https://image.ibb.co/g5nuxo/Totoro_by_noodlecutie123_d3j76oj.png',
    email: 'tma@gsma.com',
    username: 'tma',
    password: 'password',
    timeStamp: date4,
    description: 'Enter your description...',
    isLoggedIn: false
  },
  {
    id: uuidv4(),
    firstname: 'Victor',
    lastname: 'Cheng',
    avatar: './images/avatars/camera.jpg',
    email: 'vcheng@gmail.com',
    username: 'vcheng',
    password: 'password',
    timeStamp: date3,
    description: 'Enter your description...',
    isLoggedIn: false
  }
]

function seedData() {
  if (localStorage) {
    window.localStorage.clear();

    for (let i = 0; i < blogArray.length; i++) {
      localStorage.setItem(`blog_${blogArray[i].id}`, JSON.stringify(blogArray[i]));
    }
    for (let i = 0; i < userArray.length; i++) {
      localStorage.setItem(`user_${userArray[i].id}`, JSON.stringify(userArray[i]));
    }
  }
}

seedData(); //-- Seed some base data as given above