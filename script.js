// Select the link
var link = document.querySelector('a');

// Add an event listener to the link
link.addEventListener('click', function(event) {
    // Prevent the link from being followed
    event.preventDefault();

    // Show an alert
    alert('You are about to visit the YouTube link of the song!');
});
