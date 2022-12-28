import { DisplayElement } from '../components/display.js';
import { data } from '../data.js';

const display = document.createElement('display-element');
display.data = data;
document.body.appendChild(display);

// npm run build
// python3 -m http.server 3000
// http://localhost:3000/index.html