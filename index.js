import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './components/search.js';


const data = [
  {
      name: 'spinach',
      net: 1,
      total: 3.5,
      fiber: 2.5,
  },
  {
      name: 'avocado',
      net: 2,
      total: 9,
      fiber: 7,
  },
  {
      name: 'tomato',
      net: 3,
      total: 4,
      fiber: 1,
  },
];

export class Parent extends LitElement {

  // static properties = {
  //   data: {}
  // };

  constructor() {
    super();
    this.data = data
  }

  //render appends nodes to dom and only updates parts of the html template that have been changed
  render() {
    return html`
      <ul>
      ${this.data.map((item, index) => {
        return html`
          <my-row .data=${this.data[index].name}></my-row>
        `;}
      )}
      </ul>
    `;
  }

};

customElements.define('my-parent', Parent);


export class Row extends LitElement {

  // static properties = {
  //   data: {}
  // };

  render() {
      return html`
          <li>
              <p>${this.data}</p>
          </li>
      `;
  }
}

customElements.define('my-row', Row);


export class Checkbox extends LitElement {

  static properties = {
    data: {}
  };

  render() {
      return html`
          <li>
              <p>${this.data}</p>
          </li>
      `;
  }
}

customElements.define('my-box', Checkbox);