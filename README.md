# JavaScript Project

## Background
The JavaScript project will be a lite variation of vertical scrolling arcade games. This version will include a jet/plane (user controlled object), and randomly obstacles throughout for the user to avoid and destroy. As the game progresses, obstacle evasion will gradually become more difficult by increasing the speed at which the scrolling occurs. Scoring is based upon the length of time the user is able to avoid the obstacles and also obstacles destroyed.

## Functionality & MVP
A functional version of the game will include:
+ A welcome screen
+ Start and pause game options
+ Score and Lives display
+ Sound effects to compliment game actions

## Wireframes

![JSP-Wireframe](/Users/adefarquhar/app_academy/jsp/JSP - Wireframe.jpg)

## Technologies and Structure
This game will be created with the subsequent technologies:
+ `Vanilla JavaScript` - structure and logic.
+ `Easel.js` - interaction with canvas to render the game and create objects.
+ `Webpack` - bundling and loading files within the program.

File structure will be based on the following:
+ `game.js`: scoring, game start, pause, end check.
+ `field.js`: main game play area, handle movement logic.
+ `plane.js`: logic for jet/plane.
+ `obstacle.js`: logic for generating obstacles.

## Implementation Schedule
**Day1:** Setup the foundation for development, including an entry file, webpack bundle, package installation. Learn `Easel.js` basics to at least render an object.

**Day2:** Create field display, obstacles, plane objects and methods. Do logic for scoring, and player lives.

**Day3:** Inputs, audio, object interactions e.g. plane and obstacles.

**Day4:** Fix bugs, polish game display.

## Bonus Features
+ Leaderboard with high scores.
+ Option to chose different styled planes.
