# ISS Tracker

This is a webapp use to track satellite orbiting the Earth such as the International Space Station (ISS):

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

The Satellite Tracker app track the I.S.S and other satelites by fetching the latitude and longitude api from wheretheiss.at. The locations are then mapped in realtime using Mapbox GL JS.

### The challenge

- Structure webpage with bootstrap 5
- Fetching API and get data
- Mapping location of ISS with Mapbox GL JS

### Screenshot

[I.S.S Tracker]("./assets/screenshot.png")

### Links

- [github url]: (https://github.com/francisphamsd/satellite-tracker.git)
- [live site url]: (https://francisphamsd.github.io/satellite-tracker/)

## My process

First, I have to think about the component I need on the website, this include the logo, the youtube live video, the map, and the location statistic. To get the latitude and longitude from the api, I use api.wheretheiss.at website. Then plot it with Mapbox GL JS map. The map then track the I.S.S in realtime. wheretheiss.at can also track the velocity and altitude of the I.S.S, these statistic are also shown in realtime in the website.

### Built with

- Semantic HTML5 markup
- Bootstrap 5
- Valnila Javascript
- api.wheretheiss.at
- Mapbox GL JS

### What I learned

Through this project, I got more practice with bootstrap. I also learn how to fetch api online and use that data to work with a map database like Mapbox GL JS

### Continued development

In the future, I might add more option to the map such as:

- Convert unit from metric to imperial
- Adding more theme like light and dark mode
- Adding more satelite other than the ISS like Hubble and James Webb space telescope

### Useful resources

- [I.S.S location api](https://wheretheiss.at/w/developer) - This doc show me how to get the api and integrate it with JS

- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/) - This is a doc for Mapbox GL JS. They have reference on how to set the marker and zoom the map

- [Bootstrap doc]() - bootstrap documentation help me with building the component for the webapp

-[Dummy image api](https://dummyimage.com) - This api allow me to quickly add placeholder image to the component I plan to use later

## Author

- Website - [Frank Pham](https://www.franciswebdev.com)
- Github - [francisphamsd](https://github.com/francisphamsd)

## Acknowledgments
