# Dropdown Menu

A simple Javascript-powered dropdown menu. Can be activated by click or hover.

[Live demo](https://gregolive.github.io/dynamic-ui-design/#dropdown-demo) 👈

[npm package](https://www.npmjs.com/package/@gregolive/dropdown) 📦

## Prerequisites

For icons to display, please install [font-awesome](https://www.npmjs.com/package/font-awesome).

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

Pass 2 or 3 arguments into the dropdown function:

1. <code>title</code> string for the dropdown button
2. <code>links</code> object containing the text and href for the menu items
3. <code>hover</code> boolean (optional, defaults to false)

Append to the DOM.

Examples:

```
const links = [
  { text: 'Hello there 👋', href: '#' },
  { text: "I'm a dropdown link 🔗", href: '#' },
  { text: 'Me too 🤙', href: '#' },
];

const clickDropdown = dropdown('Click Me', links);
document.body.appendChild(clickDropdown);

const hoverDropdown dropdown('Hover Me', links, true);
document.body.appendChild(hoverkDropdown);
```

Default styling (colors, padding, etc.) can be overridden by overriding the CSS variables in:

```
:root {
  ...
}
```

## License

ISC