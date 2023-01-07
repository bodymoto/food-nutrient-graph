import { LitElement, html } from 'lit';
import { TableElement } from './table/table.js';
import { HeaderElement } from './header/header.js';

export class DisplayElement extends LitElement {

	static get properties() {
		return {
			data: { type: Array },
			filteredData: { type: Array }
		};
	};

	constructor() {
		super();

		this.data = [];
		this.filteredData = [];

		this.addEventListener('filter-data', (e) => {
			this.filteredData = e.detail.filteredData;
		});
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('data')) {
			this.filteredData = this.data;
		}
		if (!this.filteredData.length) {
			return this.filteredData = this.data;
		}
	}

	render() {
		return html`
			<header-element .data=${ this.data }></header-element>

			<table-element .filteredData=${ this.filteredData }></table-element>
		`;
	}
};

customElements.define('display-element', DisplayElement);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values