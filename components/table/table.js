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
			padding: 5px;
		}
		caption {
			padding: 10px;
			caption-side: bottom;
		}
		thead {
			font-size: 14px;
		}
		tr:nth-child(even) {
			background-color: #eee;
		}
		th {
			padding: 7px;
			border: 1px solid black;
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
			background-color: #B0E0E6;
		}
		.vegetable td:nth-child(-n+2) {
			background-color: #7CFC00;
		}
		.meat td:nth-child(-n+2) {
			background-color: #FFA500;
		}
		.deli td:nth-child(-n+2) {
			background-color: #DDA0DD;
		}
		.fish td:nth-child(-n+2) {
			background-color: #FFA07A;
		}
		.shellfish td:nth-child(-n+2) {
			background-color: #00FFFF;
		}
		.dairy td:nth-child(-n+2) {
			background-color: #F0FFFF;
		}
		.nuts td:nth-child(-n+2) {
			background-color: #FFD700;
		}
		.beverages td:nth-child(-n+2) {
			background-color: #F5F5DC;
		}
		.fats td:nth-child(-n+2) {
			background-color: #FFFFE0;
		}
		.flour td:nth-child(-n+2) {
			background-color: #D2B48C;
		}
		.spices td:nth-child(-n+2) {
			background-color: #8FBC8F;
		}
		.dips td:nth-child(-n+2) {
			background-color: #FFC0CB;
		}
	`;

	render() {
		return html`
			<table>
				<caption>Keto dieting matrix</caption>
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
							<tr class=${object['Group'].replace(/ .*/,"")}>
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