$(document).ready(function () {

  var settings = {
    currentPage: 1,
    endReached: false,
    requestInProgress: false
  };

  var searchFlickr = function () {

    console.log(settings);

    if (settings.endReached) { return; }

    var query = $('#query').val();

    var flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

    settings.requestInProgress = true;

    console.log('searching flickr for', query, 'current page', settings.currentPage);

    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json',
      page: settings.currentPage++
    }).done(function (info) {
      if (info.photos.page >= info.photos.pages) {
        settings.endReached = true;
      }
      _.each(info.photos.photo, function (p) {
        var url = generateURL(p);
        var $img = $('<img>', {
          src: url
        }).appendTo('#results');
      });
      settings.requestInProgress = false;
    });
  };

  var generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change this for different sizes
    ].join('');
  };

  $('#search').on('click', function () {
    settings.endReached = false;
    settings.currentPage = 1;
    $('#results').empty();
    searchFlickr();
  });

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    if (settings.requestInProgress === false &&
        scrollTop + windowHeight > 0.8 * documentHeight) {
      searchFlickr();
    }

  });
});
