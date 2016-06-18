// I want to do a few things here:

    // 1. I want to create thumbnails for the videos (CREATE, MANIPULATE, INJECT). I'll use the youtube library's 'generateThumbnailUrl' for this.
    // 2. I want to add a youtube player to  my page. I'll make an iframe element for this (CREATE) and, back in my HTML file, I'll add a div in which to place my iframe.
    // 3. Once I've create the iframe, I want to get the URL I need to play the video in the iframe and use that in the appropriate attribute of the iframe (MANIPULATE)
    // 4. When a user clicks on a video (EVENT HANDLER), I want that video to be displayed in my iframe (INJECT).

// To follow the logic of this code through, you'll need to jump down to line 41 - that's where it all starts.


// Create a function to generate thumbnails for YouTube links.
var thumbnailify = function ($videoLink) {
    var linkUrl = $videoLink.attr('href');
    var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
    var thumbnailImg = $('<img>');
    thumbnailImg.attr('src', thumbnailUrl);
    $videoLink.append(thumbnailImg);

    // Add an event handler that listens for the 'click' event on the element
    $videoLink.on('click', function (event) {
        // Since our video thumbnails are going to be INSIDE an <a> tag, if we click a thumbnail, by default the browser will try to open the YouTube URL. But we don't wnt that to happen - we want the video to be displayed in our video player. So, we want to "PREVENT" that "DEFAULT" behaviour.
        event.preventDefault();
        // And instead, we want to create a new iframe element for our player.
        var videoEmbed = $('<iframe>');
        // Then get the embed URL for the video using the generateEmbedUrl method from the youtube JS library.
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
