# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

## Project goals:

* create an index displaying all hog tiles
* render each hog name and picture in a tile
* show the hog's details upon a user's click
* filter the hogs that are greased
* sort the hogs based on name
* sort the hogs based on weight 

* BONUS: allow users to hide hogs (not delete them, just hide them from view!)
* BONUS: bring in pig gifs from an API
* BONUS: implement [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog

## Project requirements:

* functional and container components (at least one of each, likely you'll have several of each)
* components using state and props
* re-renders based on client-side events

## What we have so far:

* a file containing all our hog data imported into App.js
* a folder of hog images
* a functional nav component rendered in our App.js

## Trying to figure out where to start?

There are lots of ways to build this project, and while some ways are better than others, there is no 'right' way! Start by thinking about which components you'll be building and whether they'll be presentational or container components.

Once you've decided on your components, use the MVP (minimum viable product) approach. What's the simplest thing we can render to the page? Perhaps a paragraph tag displaying each hog's name? Which components would this involve?

When building your filter and sort functionalities, consider what you want to store in state and where that state should be stored. How can a child component pass information up to its parent component? Think about what needs to happen upon each index rerender. What if a user filters out ungreased pigs, and then wants the remaining pigs sorted by weight?

Be sure to use good programming practices, such as clear variable names and single responsibility functions. React apps can quickly become tangled and hard to debug if built without best practices!

## Trying to get the Hog image to render?

Importing relative images in React can be tricky. Here is an example: 

```
render(){
  let pigImage = require('../hog-imgs/piggy_smalls.jpg') //how can we dynamically generate the filename?
  return <img src={pigImage} />
}

```


## Styling

We've imported the Semantic library to keep your piggies looking pretty. To keep your hogs in columns, make sure their parent container has the class "ui grid container". The children in the columns should have class "ui eight wide column". (Semantic uses a grid with a default of 16 units wide, so 8-wide will make two columns and 4-wide will make 4 columns.) Semantic will take care of assigning the columns for you. You can also try implementing [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog.
