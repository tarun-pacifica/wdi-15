
// I've left the regular JS DOM API code in as comments above my fancy jQuery.

// Create the array of links
// var linkTags = document.querySelectorAll('a');
var $linkTags = $("a");

// Iterate through the array of links
// for (var i = 0; i < linkTags.length; i++) {
$linkTags.each(function() {

        // Store the current link in a variable
        // var link = linkTags[i];
        var $link = $(this);

        // Get the current value of the href attribute of that link
        // var linkUrl = link.getAttribute('href');
        var linkUrl = $link.attr("href");

        // Use the youtube javasript library to generate a thumbnail using that href
        // var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
        var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);

        // The next two statements we're going to chain together...
        // Create an image and store the object in a variable
        // var thumbnailImage = document.createElement('img');
        // Set that image's src attribute
        // thumbnailImage.setAttribute('src', thumbnailUrl);
        var $thumbnailImage = $("<img>").attr("src", thumbnailUrl);

        // Append that image as a child of the current link in the collection.
        // link.appendChild(thumbnailImage);
        $link.append($thumbnailImage);
// };

// NOTE: We could have written the entire block in this one liner, but it's extremely difficult to follow what's going on:

        // $(this).append($("<img>").attr("src", youtube.generateThumbnailUrl($(this).attr("href"))));

});
