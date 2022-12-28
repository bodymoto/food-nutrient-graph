import { LitElement, html } from 'lit';
import { CheckboxElement } from '../components/checkbox/checkbox.js';
import { TableElement } from '../components/table/table.js';

export class DisplayElement extends LitElement {

	static properties = {
		data: { type: Array },
	};

	constructor() {
		super();
		this.data = [];
	}

	render() {
	//render child components
		return html`
			<checkbox-element>
			</checkbox-element>

			<table-element
			.data=${ this.data }
			></table-element>
		`;
	}
};

customElements.define('display-element', DisplayElement);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values