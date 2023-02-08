import { LitElement, html, css } from 'lit';
import { TableElement } from './table/table.js';
import { HeaderElement } from './header/header.js';

export class MatrixElement extends LitElement {

	static properties = {
		data: { type: Array },
		filteredData: { type: Array }
	};

	constructor() {
		super();

		this.data = [];
		this.filteredData = [];

		this.addEventListener('filter-data', (event) => {
			this.filteredData = event.detail.filteredData;
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

customElements.define('matrix-element', MatrixElement);