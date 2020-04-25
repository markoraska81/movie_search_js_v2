

var movies = [
  {
    img: "shawshank.png",
    name: "The Shawshank Redemption",
    rate: " 9,2/10",
    year: 1994
  },
  {
    img: "shindlers-list.png",
    name: "Schindler's List",
    rate: " 8,9/10",
    year: 1993
  },
  {
    img: "lock-stock.png",
    name: "Lock, Stock and Two Smoking Barrels",
    rate: " 8,2/10",
    year: 1998
  },
  {
    img: "snatch.png",
    name: "Snatch",
    rate: " 8,3/10",
    year: 2000
  },
  {
    img: "no-country-for-old-man.png",
    name: "No Country for Old Men",
    rate: " 8,1/10",
    year: 2007
  },
  {
    img: "full-metal-jacket.png",
    name: "Full Metal Jacket",
    rate: " 8,3/10",
    year: 1987
  },
  {
    img: "django.png",
    name: "Django Unchained",
    rate: " 8,4/10",
    year: 2012
  },
  {
    img: "pulp-fiction.png",
    name: "Pulp Fiction",
    rate: " 8,8/10",
    year: 1994
  },
  {
    img: "once-upon-time.png",
    name: "Once Upon A Time In The West",
    rate: " 8,5/10",
    year: 1968
  },
  {
    img: "magnificent-seven.png",
    name: "The Magnificent Seven",
    rate: " 7,7/10",
    year: 1960
  },
  {
    img: "prestige.png",
    name: "The Prestige",
    rate: " 8,5/10",
    year: 2006
  },
  {
    img: "city-of-god.png",
    name: "City Of God",
    rate: " 8,6/10",
    year: 2002
  },
  {
    img: "fight-club.png",
    name: "Fight Club",
    rate: " 8,8/10",
    year: 1999
  },
  {
    img: "godfather.png",
    name: "The Godfather",
    rate: " 9,1/10",
    year: 1972
  },
  {
    img: "few-dollars.png",
    name: "For A Few Dollars More",
    rate: " 8,3/10",
    year: 1965
  },
  {
    img: "fistfull-dollars.png",
    name: "A Fistful of Dollars",
    rate: " 8,0/10",
    year: 1964
  },
  {
    img: "good-bad-ugly.png",
    name: "The Good, The Bad And The Ugly",
    rate: " 8,9/10",
    year: 1966
  },
  {
    img: "lord-of-the-ring.png",
    name: "The Lord of the Rings: The Fellowship of the Ring",
    rate: " 8,8/10",
    year: 2001
  },
  {
    img: "inglourios-basterds.png",
    name: "Inglourious Basterds",
    rate: " 8,3/10",
    year: 2009
  },
  {
    img: "green-miles.png",
    name: "The Green Mile",
    rate: " 8,5/10",
    year: 1999
  },
  {
    img: "forrest-gump.png",
    name: "Forrest Gump",
    rate: " 8,8/10",
    year: 1994
  },
  {
    img: "space-odyssey.png",
    name: "2001: A Space Odyssey",
    rate: " 8,3/10",
    year: 1968
  },
  {
    img: "clockwork-orange.png",
    name: "A Clockwork Orange",
    rate: " 8,3/10",
    year: 1971
  },
  {
    img: "saving-private-ryan.png",
    name: "Saving Private Ryan",
    rate: " 8,6/10",
    year: 1998
  },
  {
    img: "vendeta.png",
    name: "V For Vendeta",
    rate: " 8,2/10",
    year: 2005
  },
  {
    img: "trainspotting.png",
    name: "Trainspotting",
    rate: " 8,1/10",
    year: 1996
  },
  {
    img: "river-kwai.png",
    name: "The Bridge On The River Kwai",
    rate: " 8,1/10",
    year: 1957
  },
  {
    img: "gran-torino.png",
    name: "Gran Torino",
    rate: " 8,1/10",
    year: 2008
  },
  {
    img: "big-lebowski.png",
    name: "Big Lebowski",
    rate: " 8,1/10",
    year: 1998
  },
  {
    img: "million-dollar.png",
    name: "Million Dollar Woman",
    rate: " 8,1/10",
    star: "star.png",
    year: 2004
  }
];

// var searchBar = document.querySelector('#searchInput');
// searchBar.addEventListener('keyup', searchMovie);


function searchMovieApp() {
  var header = document.querySelector('header');
  header.appendChild(onHeader())

  movies.forEach(function(movie, i) {
    var movieList = document.querySelector('#movie-container');
    movieList.appendChild(createMovie(movie));
  })
}

function onHeader() {

  var headerElements = document.createElement('div');
  headerElements.classList.add('header-container');


  var list = '<ul>';
  var logo = '<li><img src="img/logo.png" /></li>';
  var home = '<li><a  class="active" href="#">' + 'Home' + '</a></li>';
  var movie = '<li><a href="#">' + 'Filmovi' + '</a></li>';
  var series = '<li><a href="#">' + 'Serije' + '</a></li>';
  var cartoon = '<li><a href="#">' + 'Crtani' + '</a></li>';
  var search = '<li><div class="search-container"><form action=""><input id="searchInput" onkeyup="movieSearch()" type="text" keyup="movieSearch()" name="search" placeholder="search movie..." /></form></div></li>';
  var listAgain = '</ul>';

  headerElements.innerHTML = list + logo  + home + movie + series + cartoon + search + listAgain;
  return headerElements;
}

function createMovie(movie) {
  var movieData = document.createElement('div');
  movieData.classList.add('movie');

  var img = '<img src="img/' + movie.img + '" alt="" />';
  var title = '<h4>' + movie.name + '</h4>';
  var info = '<p class="info-container"><span class="rate"><i class="fa fa-star-o"></i>' + ' ' +movie.rate + '</span><span class="year"><i class="fa fa-calendar"></i>' + ' ' + movie.year + '</span></p>'

  movieData.innerHTML = img + title + info;
  return movieData;
}

function movieSearch() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toLowerCase();
  var divId = document.getElementById('movie-container');
  var div = divId.getElementsByTagName('div');

  for (var i = 0; i < div.length; i++) {
    var title = div[i].getElementsByTagName('h4')[0];
    var textValue = title.textContent || title.innerText;
    if (textValue.toLowerCase().indexOf(filter) > -1) {
      div[i].style.display = "block";
    } else {
      div[i].style.display = "none";
    }
  }
}

searchMovieApp();
