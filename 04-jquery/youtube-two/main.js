
// Create the array of links
var $linkTags = $("a");

// Iterate through the array of links
$linkTags.each(function() {
    var $link = $(this);
    var linkUrl = $link.attr("href");
    var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
    var $thumbnailImage = $("<img>").attr("src", thumbnailUrl);
    $link.append($thumbnailImage);
    // UN-sexy one-line version:
    // $(this).append($("<img>").attr("src", youtube.generateThumbnailUrl($(this).attr("href"))));
});



// Less un-sexy for-loop that doesn't take advantage of jQuery's .each().
// for (var i = 0; i < $linkTags.length; i++) {
//     var $link = $linkTags.eq(i);
//     var linkUrl = $link.attr("href");
//     var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
//     var $thumbnailImage = $("<img>");
//     $thumbnailImage.attr("src", thumbnailUrl);
//     $link.append($thumbnailImage);
// }
