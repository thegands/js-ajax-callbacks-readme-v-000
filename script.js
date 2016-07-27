// We should wait for the page to load before running our ajax request
$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("this_doesnt_exist.html", function(data) {
  // This will not be called because the .html file request doesn't exist
    doSomethingGood();
  }).fail(function(error) {
    // This is called when an error occurs
    debugger;
    console.log('Something went wrong: ' + error);
  });
});
