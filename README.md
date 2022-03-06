# Dropdown Menu

A simple Javascript-powered dropdown menu. Can be activated by click or hover.

[Live demo](https://gregolive.github.io/dynamic-ui-design) 👈

## Prerequisites

For icons to display properly, please install [font-awesome](https://www.npmjs.com/package/font-awesome)

## Installation

On the command line run:

```
npm i @gregolive/dropdown
```

Import the function in your Javascript file with:

```
import dropdown from '@gregolive/dropdown';
```

## Usage

Pass three arguments into the dropdown function:

1. <code>title</code> string for the dropdown button
2. <code>links</code> object containing the text and href for the menu items
3. <code>hover</code> boolean that defaults to false

Examples:

```
const links = [
  { text: 'Hello there 👋', href: '#' },
  { text: "I'm a dropdown link 🔗", href: '#' },
  { text: 'Me too 🤙', href: '#' },
];

// Dropdown on click
dropdown('Click Me', links);

// Dropdown on hover
dropdown('Hover Me', links, true);
```

## License

MIT