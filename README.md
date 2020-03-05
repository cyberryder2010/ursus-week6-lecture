# Ursus Week 4 Live Session

Welcome to Week 6, where we explore JavaScript with the jQuery library for DOM manipulation. We went over how to source jQuery into your project, what it means for the `document` to be ready, and how we interact with elements.

**JavaScript Topics:**

1. Sourcing in jQuery - we absolutely must load jQuery before our JavaScript file so that `$` will be available in our JavaScript
  - [physical file](https://jquery.com/download/)
  - [CDN source](https://developers.google.com/speed/libraries#jquery)
  - What happens if we try to use `$` and our jQuery was sourced in after our JavaScript?
1. document ready - we leverage `$(document).ready()` to ensure that all of our DOM content has loaded
  - What happens if we try to grab an element with `$('#jsAddFruit')` outside of our `readyNow` function?

  ```js
  console.log($('#jsAddFruit'));

  function readyNow() {
    console.log($('#jsAddFruit'));
  }
  ```

1. event listeners - waits for an event / action to happen (like a button click) and then calls to an event handler function

  ```js
  function readyNow() {
    // EVENT LISTENER
    $('#jsAddFruit').on('click', clickAddFruit);
  }
  ```

1. event handlers - a function that responds to or handles the execution of an event / action then performs some task based on that action

  ```js
  ```
