# Introduction to JavaScript

## Overview of the mod
* Learning a second language; gaining another superpower
  * Schedule
  * Week 1 - Becoming a front-end developer
  * Week 2 - Becoming a better front-end developer & understanding JS fundamentals
  * Week 3 - Project week & shiny new JS

  * Three essential pillars of front-end web programming
    - HTML: Structure and content of our website 
    - CSS: Aesthetics && UI/UX
    - JS: Interactivity with our website 

    * Three essential pillars of JS
      - DOM Manipulation: What does the user see on our website
      - Events: How to handle user/browser events
      - Communication with a server: Send to/Get from a server 

      When an X event happens,
      We want to Y Fetch
      Manipulate the DOM Z way

## What can I do with JavaScript

    https://patatap.com/
    https://bellwoods.xyz/
    http://www.fallingfalling.com/
    http://eelslap.com/
    http://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html
    https://theuselessweb.com/

## DOM questions
* What is the DOM and why do I care about it?
* What does it mean that the DOM is a tree?
* What are the key parts of an HTML tag?
  * What is an attribute?
  * What is an ID?
* How do I:
  * Find an existing DOM element
    * inside of an existing DOM element?!?!?!?
  * What can I do with a DOM element?
  * Create a new DOM element (and slap it on the DOM)?
  * Remove a DOM element?
* Where do I write my actual JS and how do I make my HTML know about it?
* Which of the 5 ways to find an element is the best one?

## Manipulating the DOM with JavaScript Chart

| Selector name                      | Return shape   | Return type    | Live? | Reference             | can i call forEach? |
| ---------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `document.getElementById()`        | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `element.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `element.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `element.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `element.querySelectorAll()`       | Collection     | NodeList       | No    | https://goo.gl/vTfXza | Yes      |

---

## External Resources:

- [MDN Article on the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Article on CSS Class Selectors][mdn-css-class]
- [MDN Article on CSS ID Selectors][mdn-css-id]
- [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
- [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
- [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [When are Selected HTML Elements Live](https://stackoverflow.com/questions/28163033/when-is-nodelist-live-and-when-is-it-static)
- [Difference Between the DOM and the BOM](https://stackoverflow.com/questions/4416317/what-is-the-dom-and-bom-in-javascript)


[mdn-css-class]: https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors
[mdn-css-id]: https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors
