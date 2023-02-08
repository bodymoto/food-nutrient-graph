import { LitElement, html, css } from 'lit';
import { TableHeadElement } from './tablehead/tablehead.js';

export class TableElement extends LitElement {

	static get properties() {
		return {
			filteredData: { type: Array },
			columns: { type: Array },
			selectedCategory: { type: String },
			store: { type: Object }
		};
	}

	constructor() {
		super();
		this.filteredData = [];
		this.columns = [];
		this.selectedCategory = '';
		this.store = {};

		this.addEventListener('selected-category', (event) => {
			this.selectedCategory = event.detail.selected; // clicked column, ie: "name" or "fdcid"

			this.store[this.selectedCategory] += 1;

			if (this.store[this.selectedCategory] === 1) {
				this.sortAscending();
				this.selectedCategory = '';
			}

			if (this.store[this.selectedCategory] === 2) {
				this.sortDescending();
				this.store[this.selectedCategory] = 0;
				this.selectedCategory = '';
			}
		});
	}

	willUpdate(changedProperties) {
		if (changedProperties.has('filteredData')){

			if(!this.filteredData.length){
				return;
			}
			this.columns = Object.keys(this.filteredData[0]);
			this.filteredData.forEach((object) => 
				this.columns.map((key) => this.store[key] = 0));
		};
	}

	sortAscending(...args) {
		const selectedCategory = this.selectedCategory;

		const compare = (a, b) => {
			if ( a[selectedCategory] < b[selectedCategory] ){
				return -1;
			}
			if ( a[selectedCategory] > b[selectedCategory] ){
				return 1;
			}
			return 0;
		};

		this.filteredData.sort(compare);
	}

	sortDescending(...args) {
		const selectedCategory = this.selectedCategory;

		const compare = (a, b) => {
			if ( a[selectedCategory] < b[selectedCategory] ){
				return 1;
			}
			if ( a[selectedCategory] > b[selectedCategory] ){
				return -1;
			}
			return 0;
		};

		this.filteredData.sort(compare);
	}

	static styles = css`
		:host {
			font-family: "Gill Sans", sans-serif;
		}
		table {
			table-layout: fixed;
			border: 2px solid black;
			border-radius: 5px;
			padding: 5px;
		}
		caption {
			padding: 10px;
			caption-side: bottom;
		}
		thead {
			font-size: 14px;
		}
		th {
			padding: 7px;
			border: 1px solid black;
		}
		tr:nth-child(even) {
			background-color: #F0F8FF;
		}
		td:nth-child(1),
		td:nth-child(2) {
			text-transform: capitalize;
		}
		td {
			text-align: center;
			padding: 10px;
		}

		.fruits td:nth-child(-n+2) {
			background-color: rgba(175, 238, 238, 0.5);
		}
		.vegetable td:nth-child(-n+2) {
			background-color: rgba(0, 206, 209, 0.5);
		}
		.meat td:nth-child(-n+2) {
			background-color: rgba(205, 92, 92, 0.5);
		}
		.deli td:nth-child(-n+2) {
			background-color: rgba(221, 160, 221, 0.5);
		}
		.fish td:nth-child(-n+2) {
			background-color: rgba(250, 128, 114, 0.5);
		}
		.shellfish td:nth-child(-n+2) {
			background-color: rgba(230, 230, 250, 0.5);
		}
		.dairy td:nth-child(-n+2) {
			background-color: rgba(255, 248, 220, 0.5);
		}
		.kernels td:nth-child(-n+2) {
			background-color: rgba(240, 230, 140, 0.5);
		}
		.beverages td:nth-child(-n+2) {
			background-color: rgba(248, 248, 255, 0.5);
		}
		.fats td:nth-child(-n+2) {
			background-color: rgba(255, 215, 0, 0.5);
		}
		.flour td:nth-child(-n+2) {
			background-color: rgba(222, 184, 135, 0.5);
		}
		.seasoning td:nth-child(-n+2) {
			background-color: rgba(255, 182, 193, 0.5);
		}
		.sauces td:nth-child(-n+2) {
			background-color: rgba(255, 99, 71, 0.5);
		}
	`;

	render() {
		return html`
			<table>
				<caption>Keto Dieting Matrix</caption>
				<thead>
					<tr>
						${this.columns.map((column) => html`
							<th>
								<table-head-element category=${column}></table-head-element>
							</th>
						`)}
					</tr>
				</thead>

				<tbody>
					${
						this.filteredData.map((object) => {
							return html`
							<tr class=${ object['Group'] }>
								${this.columns.map((property) => {
									return html`
									<td>${object[property]}</td>
								`})}
							</tr>
							`;
					})}
				</tbody>
			</table>
		`;
	}
};

customElements.define('table-element', TableElement);