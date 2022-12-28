import { LitElement, html } from 'lit';

export class TableElement extends LitElement {

	static properties = {
		data: { type: Array },
	};

	render() {
		return html`
			<p>my table element data:</p>

			<p>${ JSON.stringify(this.data) }</p>
		`;
	}
};

customElements.define('table-element', TableElement);

// Reactive properties
// Treat objects and arrays as immutable. For example, to remove an item from myArray, construct a new array:
// this.myArray = this.myArray.filter((_, i) => i !== indexToRemove);