import { DisplayElement } from '../components/display.js';
import { data } from '../data.js';

const display = document.createElement('display-element');
display.data = data;
document.body.appendChild(display);

// http://localhost:8000/index.html

// comment out devtools for production in webpack config