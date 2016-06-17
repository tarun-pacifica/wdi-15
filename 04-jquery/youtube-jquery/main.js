
// Create a function to generate thumbnails for YouTube links.
var thumbnailify = function ($videoLink) {
    var linkUrl = $videoLink.attr('href');
    var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
    var thumbnailImg = $('<img>');
    thumbnailImg.attr('src', thumbnailUrl);
    $videoLink.append(thumbnailImg);

    // Add an event handler that listens for the 'click' event on the element
    $videoLink.on('click', function (event) {
        // By default, the browser will try to open the YouTube URL. We want to "PREVENT" that "DEFAULT" behaviour.
        event.preventDefault();
        // Instead, we want to create a new iframe element.
        var videoEmbed = $('<iframe>');
        // And get the embed URL for the video using the generateEmbedUrl method from the youtube JS library.
        videoEmbed.attr( 'src', youtube.generateEmbedUrl(linkUrl) );
        // Set the height and widths of the iframe element
        videoEmbed.attr( 'width', 500 );
        videoEmbed.attr( 'height', 400 );
        // Select the element we added to the HTML to house our video watcher (which we gave the ID of "video-watcher")
        var $videoWatcher = $('#video-watcher');
        // Hide the element to hide any video that was playing before
        $videoWatcher.hide();
        // Change the HTML of the element to be our new iframe
        $videoWatcher.html( videoEmbed );
        // Fade it in!
        $videoWatcher.fadeIn(300);
    });
};

// Create a new collection - all the links on the page.
var $videoLinks = $('a');

// Instead of using a for loop, we're going to use jQuery's .each method.

// Loop through each of the links in our collection of links and...
$videoLinks.each(function() {
    // We use $(this) in place of the array[i] we're familiar with in for loops.
    // Call the thumbnailify function, passing in the current element in our loop
    thumbnailify($(this));
});
