import { LitElement, html, css } from 'lit';
import { TableElement } from './table/table.js';
import { HeroFilterElement } from './herofilter/herofilter.js';

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

	static styles = css`
		div {
			font-family: 'Raleway', sans-serif;
			display: flex;
			align-content: center;
			justify-content: center;
			font-size: 26px;
			font-weight: 100;
			opacity: 0.6;
			margin-top: 48px;
		}
		h3 {
			margin-bottom: 0;
		}
	`;

	render() {
		return html`
			<div>
				<h3>
					The Food Matrix
				</h3>
			</div>

			<hero-filter-element .data=${ this.data }></hero-filter-element>

			<table-element .filteredData=${ this.filteredData }></table-element>
		`;
	}
};

customElements.define('matrix-element', MatrixElement);