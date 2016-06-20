var body = document.getElementsByTagName('body')[0]; // Strip off the array wrapper
body.style.fontFamily = "Arial, sans-serif";

var nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade 420';

var favorites = document.getElementById('favorites');
favorites.innerHTML = 'Marx Bros, butterflies, getting crunk';

var hometown = document.getElementById('hometown');
hometown.innerHTML = 'Sydney';

var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
  items[i].className = 'listitem';
}

var img = document.createElement('img');
img.src = 'http://fillmurray.com/420/420';
body.appendChild(img);

var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L.gif',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    image: 'http://d.gr-assets.com/books/1295465264l/8884400.jpg',
    alreadyRead: true
  }
];

var ul = document.createElement('ul');
for (var i = 0; i < books.length; i++) {
  var li = document.createElement('li');
  li.innerHTML = books[i].title + ' by ' + books[i].author;
  var img = document.createElement('img');
  img.src = books[i].image;
  li.appendChild(img);

  if (books[i].alreadyRead) {
    li.className = 'read';
  }

  ul.appendChild(li);
}

body.appendChild(ul);
