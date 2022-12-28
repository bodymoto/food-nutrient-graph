export class Parent extends LitElement {

  static get properties() {
    return {
      data: {type: Array}
    }
  };

  constructor() {
    super();
    this.data = data;
  }

  //render appends nodes to dom and only updates parts of the html template that have been changed
  render() {
    return html`
      <ul>
      ${this.data.map(
        (item, index) => {
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

  static get properties() {
    return {
      data: {type: Array}
    }
  };

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

  static get properties() {
    return {
      data: {type: Array}
    }
  };

  render() {
    //2 define a property for checkbox and bind it to a value
      return html`
          <input type="checkbox"
          checked=${this.showCompleted}
          @changed=${this.toggleCompleted}>
      `;
  }
}

customElements.define('my-box', Checkbox);
 //3
// Next, you'll need to create a function to handle the change event for the checkbox input. In this function, you can update the value of the checkbox property and re-render the component. For example:
// Copy code
// toggleCompleted(event) {
//   this.showCompleted = event.target.checked;
//   this.requestUpdate();
// }

//4
// In your template, use a loop to iterate over the data and render each item. Within the loop, you can use an if statement to check the value of the checkbox property and only render items that meet the desired criteria. For example:
// Copy code
// <template is="dom-repeat" items=${this.items}>
//   <template is="dom-if" if=${item.completed === this.showCompleted}>
//     <div>${item.name}</div>
//   </template>
// </template>
// This will only render items with the completed property set to the value of the checkbox input.

// I hope this helps! Let me know if you have any questions or need further assistance.