/*
 * Exercise: Colorify Starter Code
 *
 * Implements the functionality of the Colorify webpage to randomly
 * change the page's background color whenever the "colorify" button
 * is clicked and display the result hexidecimal color code.
 *
 * We've given this scaffolding for you to focus on writing the functionality of the colorify
 * behavior while also showing two new ways to update elements on the webpage
 *
 *   1. document.body.style.backgroundColor: accesses the body's CSS style for background-color
 *     * For example, if we want to change the body's background color to #3e3e3e, we can use:
 *         document.body.style.backgroundColor =  "#e3e3e3"; // must be a string
 *
 *   2. element.innerText: changes the text content of a page element (e.g. a tag)
 *     * For example, if we want to change the text of a paragraph tag with the id of "message"
 *       we can use:
 *         document.getElementById("message").innerText = "Hello world!";
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    // TODO: Set up necessary button event listener
  }

  /*
   * Changes the background color of the page to random color, displaying
   * the result hexidecimal color code on the page.
   */
  function changeBackgroundColor() {
    // TODO: Write code to generate a random hexidecimal CSS color

    // TODO: Set body's background color to randomly-generated CSS color

    // TODO: Replace "???" with your random color code
    document.getElementById("mycolor").innerText = "Your Color is ???!";
  }

})();