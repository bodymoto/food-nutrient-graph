import { MatrixElement } from '../components/matrix/matrix.js';
import { HeaderElement } from '../components/header/header.js';
import { data } from '../data.js';

const header = document.createElement('header-element');
const matrix = document.createElement('matrix-element');
matrix.data = data;
document.body.appendChild(header);
document.body.appendChild(matrix);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values