import { MatrixElement } from '../components/matrix/matrix.js';
import { HeaderElement } from '../components/header/header.js';
import { ArticleElement } from '../components/article/article.js';
import { FooterElement } from '../components/footer/footer.js';
import { data } from '../data.js';

const header = document.createElement('header-element');
const matrix = document.createElement('matrix-element');
const article = document.createElement('article-element');
const footer = document.createElement('footer-element');

matrix.data = data;
matrix.id = 'application';
article.id = 'about';

document.body.appendChild(header);
document.body.appendChild(matrix);
document.body.appendChild(article);
document.body.appendChild(footer);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values