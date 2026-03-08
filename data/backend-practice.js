const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send(); // Asynchronous: Send the Request but it does not wait for the response to comeback.

// A backend only supports a certain set of URL paths
// If we send a request to URL path that is not supported, the backend will respond with an error

/*
Status Code:

   Starts with 4 or 5 (400,404,500) = failed
   Start with 4 means "Our problem"
   Start with 5 means "Backend problem"  like Backend Crash

   Starts with 2 (200,201,204) = Successful
*/

/*
How  do we know which URL paths are Supported or not?
  Some Backends do Provice a Documentation Page.
    - Lists that URL paths are that supported and also works on the response that they give.
    - It means the Backend API.
*/

/*
The backend can respond with different types of data:
  - Text
  - JSON(JavaScript Object Notation): This allows us to send JavaScript Objects across the Internet, to the backend
  - HTML
  - Image
*/

// When we type a URL in the browser, it actually sends a GET request. Using the browser making a GET request.