[![log-enhancer](https://github.com/tech-mojo/log-enhancer/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/tech-mojo/log-enhancer/actions/workflows/npm-publish.yml)
![NPM](https://img.shields.io/npm/l/log-enhancer)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/log-enhancer)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/tech-mojo/log-enhancer)
![GitHub repo size](https://img.shields.io/github/repo-size/tech-mojo/log-enhancer)
![npm](https://img.shields.io/npm/dw/log-enhancer)

# log-enhancer

log-enhancer is a JavaScript class that provides a simple, customizable logging interface for your Node.js applications. It allows you to specify the theme and style of your logs, and supports multiple styles including colored text, emojis, labels, and more.

## Installation

To use `log-enhancer` in your Node.js project, install it via npm:

```bash
npm install log-enhancer
```

## Usage

Import the `log-enhancer` class and create a new instance, passing in the desired theme and style (optional, defaults to 'default' theme and 'colors' style).

```javascript
import { logger } from 'log-enhancer';
const myLogger = new logger('default', 'colors');
myLogger.log('Hello, world!');
```

### Themes

`log-enhancer` comes with a set of pre-defined color themes that you can use to customize the look of your logs. The available themes are:

* arctic
* aurora
* autumn
* beach
* burgundy
* celestial
* cinnamon
* citrus
* coral
* cosmic
* default
* desert
* ember
* enchanted
* galaxy
* inferno
* ivory
* jungle
* lavender
* midnight
* navy
* neon
* ocean
* oceanic
* orchid
* rainbow
* rose
* ruby
* sage
* sandstorm
* silver
* skyline
* subtle
* sunburst
* sunset
* teal
* twilight
* volcano
* winter

To set the theme for a logger instance, call the `setTheme` method and pass in the theme name as a string:

```javascript
myLogger.setTheme('ocean');
```

### Styles

`log-enhancer` supports multiple styles for your logs, including colored text, emojis, labels, and more. The available styles are:

* animals
* circles
* colors
* emojis
* flowers
* hands
* hearts
* labels
* smileys
* squares
* symbols
* unicode
* weather

To set the style for a logger instance, call the `setStyle` method and pass in the style name as a string:

```javascript
myLogger.setStyle('emojis');
```

### Methods

`log-enhancer` provides several logging methods that correspond to the different log levels (log, warn, info, success, and error). Each method takes one or more arguments to be logged.

```javascript
myLogger.log('This is a log message');
myLogger.warn('This is a warning message');
myLogger.info('This is an info message');
myLogger.success('This is a success message');
myLogger.error('This is an error message');
```

### Override Console.log

You can also override the existing `console.log` with log-enhancer.

```javascript
import { logger } from 'log-enhancer';
const console = logger;

console.setTheme('beach');
console.setStyle('labels');

console.log('test');
```

### Example

You can check examples in `example.js`

## License

log-enhancer is licensed under the MIT License.
