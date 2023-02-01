import { DisplayElement } from '../components/display.js';

const display = document.createElement('display-element');
document.body.appendChild(display);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values