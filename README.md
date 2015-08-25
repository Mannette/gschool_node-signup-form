# Node Signup Form

Let's create a basic Node/Express app that displays a signup form on the client-side and handles a form submission on the server side.

Start by scaffolding out a new Express app.

## Requirements

1. Create a route handler that sends (`res.send`) the following text when the user requests the main endpoint, `/`:

  ```html
  <form method="post" action="/submit">
    <input name="email" type="email" required>
    <input type="submit">
  </form>
  ```

  > Test this route out by running the server and ensuring the form is displayed when you request `/` in your browser.

1. Create a new route that handles a POST request (form submit) to `/submit`.

  > Make sure this route only handles POST requests. You should see a 404 error when you try to access the royre via GET request.

  Upon a successful form submission, redirect the user to `/success` via a `res.redirect`. This route should send a success message - `Success!`. This process POST (form submission), Redirect to new route, and GET is known as [POST/Redirect/GET](https://en.wikipedia.org/wiki/Post/Redirect/Get).

