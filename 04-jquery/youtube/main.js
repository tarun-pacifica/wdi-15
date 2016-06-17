
// Create the array of links
var linkTags = document.querySelectorAll('a');

// Iterate through the array of links
for (var i = 0; i < linkTags.length; i++) {
    // Store the current link in a variable
    var link = linkTags[i];
    // Get the current value of the href attribute of that link
    var linkUrl = link.getAttribute('href');
    // Use the youtube javasript library to generate a thumbnail using that href
    var thumbnailUrl = youtube.generateThumbnailUrl( linkUrl );
    // Created an image and store the object in a variable
    var thumbnailImage = document.createElement('img');
    // Set that image's src attribute
    thumbnailImage.setAttribute('src', thumbnailUrl);
    // Append that image as a child of the current link
    link.appendChild(thumbnailImage);
}
