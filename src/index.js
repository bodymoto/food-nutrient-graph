import { DisplayElement } from '../components/display.js';
import { data } from '../data.js';

const display = document.createElement('display-element');
display.data = data;
document.body.appendChild(display);

// ***** COMMENT OUT DEVTOOLS FOR PRODUCTION IN WEBPACK CONFIG *****

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values