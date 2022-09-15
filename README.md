# The TrybeTunes Project :musical_note:


### Introduction

Project developed in the Front-end Module at the [Trybe](https://www.betrybe.com/) course.

The goal of this project was to develop a website that user can listen to music previews provided by iTunes API. User can serach by artist, choose between albuns and save a favorites playlist, that is saved in `localstorage`.

### Applied Skills
In this project I could apply the following skills:<br>
* Make requests and consume data from an `API`
* Use React component `lifecycles`
* Use `setState` function to ensure that a given code is only executed after the state is updated
* Use the `BrowserRouter` component correctly
* Create routes, mapping the URL path with the corresponding component using `Route`
* Use the the `React Router Switch`
* Use the `Redirect` component to redirect to a specific route
* Create navigation links with the Link component

### Applied Tools 🛠️
* React
* React Router
* React Testing Library

### Requirements:

- 1 - Create the necessary routes for the application using `BrowserRouter`;

- 2 - Create a Login `form`, rendered on route `/`;

- 3 - Create a `Header` component, rendered on routes `/search`, `/album/:id`, `/favorites`, `/profile` and `/profile/edit`;

- 4 - Create navigation links inside the `header` component to search, favorites and profile pages;

- 5 - Create a `form` to search artists inside `Search` component, rendered on route `/Search`;

- 6 - Make the API request and list the returned albums. Each album must redirect to the route `/album/:id`;

- 7 - Create the music list for selected album inside the `Album` component, and render it on route `/album/:id`;

- 8 - Create inputs to add songs to favorites;

- 9 - Favorites songs must be tagged when entering an album;

- 10 - Refresh favorite musics playlist when a song is add to it;

- 11 - Add a feature to remove song from favorites;

### After downloading the project:

```
npm i
npm start
```

> :heavy_exclamation_mark: CSS not implemented yet. :heavy_exclamation_mark:

All [Trybe](https://www.betrybe.com/) projects use `linters`, `Git` and `GitHub`.
