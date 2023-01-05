import { LitElement, html } from 'lit';

import { TableElement } from '../components/table/table.js';
import { HeaderElement } from './header/header.js';

export class DisplayElement extends LitElement {

	static properties = {
		data: { type: Array },
		label: { type: String },
		checked: { type: Boolean },
		filteredData: { type: Array },
	};

	constructor() {
		super();

		this.data = [];
		this.filteredData = [];
		this.checked = false;
		this.label = '';

		this.addEventListener('checked-event', (e) => {
			this.checked = e.detail.checked; // boolean value
			this.label = e.detail.label;
			this.filtered();
		});
	}

	filtered() {
		if (this.checked === true) {
			this.filteredData = this.data.filter((item) => {
				return item.type === this.label;
			});
		} else { this.filteredData = this.data };
	}


	render() {
	//render child components
		return html`
			<header-element .data=${ this.data }></header-element>

			<table-element .data=${ this.data } .filteredData=${ this.filteredData }>
			</table-element>
		`;
	}
};

customElements.define('display-element', DisplayElement);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values