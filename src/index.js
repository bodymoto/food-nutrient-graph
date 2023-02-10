import { MatrixElement } from '../components/matrix/matrix.js';
import { HeaderElement } from '../components/header/header.js';
import { ArticleElement } from '../components/article/article.js';
import { data } from '../data.js';

const header = document.createElement('header-element');
const matrix = document.createElement('matrix-element');
const article = document.createElement('article-element');

matrix.data = data;

document.body.appendChild(header);
document.body.appendChild(matrix);
document.body.appendChild(article);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values