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
			border-bottom: 1px solid black;
			border-radius: 5px;
			padding: 5px;
		}
		caption {
			caption-side: bottom;
		}
		caption span {
			padding: 0 10px;
		}
		th {
			font-size: 14px;
			padding: 7px;
			border: 0.5px solid black;
			font-weight: 600;
		}
		tr:nth-child(even) {
			background-color: rgba(238, 238, 238, 0.5);
		}
		td:nth-child(1),
		td:nth-child(2) {
			text-transform: capitalize;
		}
		td {
			text-align: center;
			padding: 10px;
		}

		.fruit td:nth-child(-n+2) {
			background-color: rgba(175, 238, 238, 0.5);
		}
		.vegetable td:nth-child(-n+2) {
			background-color: rgba(0, 206, 209, 0.5);
		}
		.meat td:nth-child(-n+2) {
			background-color: rgba(220, 20, 60, 0.5);
		}
		.deli td:nth-child(-n+2) {
			background-color: rgba(221, 160, 221, 0.5);
		}
		.fish td:nth-child(-n+2) {
			background-color: rgba(210, 105, 30, 0.5);
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
		.drink td:nth-child(-n+2) {
			background-color: rgba(135, 206, 250, 0.5);
		}
		.lipids td:nth-child(-n+2) {
			background-color: rgba(255, 215, 0, 0.5);
		}
		.flour td:nth-child(-n+2) {
			background-color: rgba(222, 184, 135, 0.5);
		}
		.seasoning td:nth-child(-n+2) {
			background-color: rgba(255, 182, 193, 0.5);
		}
		.sauce td:nth-child(-n+2) {
			background-color: rgba(255, 99, 71, 0.5);
		}

		div {
			display: flex;
			justify-content: center; 
		}

		.key {
			font-size: 10px;
			padding: 0 0 10px 0;
			margin: auto;
		}
	`;

	render() {
		return html`
			<table>
				<caption>
				<p>Keto Dieting Matrix</p>
				</caption>
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

				<div>
					<span class="key">
						"g" = gram,
						"mg" = milligram,
						"ss" = serving size,
						"mu" = measurement,
						"wgt" = weight,
						"wat" = water,
						"prot" = protein,
						"carbs" = carbohydrates,
						"fib" = fiber,
						"sug" = sugar,
						"gluc" = glucose,
						"lact" = lactose,
						"ca" = calcium,
						"fe" = iron,
						"mg" = magnesium,
						"p" = phosphorus,
						"k" = potassium,
						"na" = sodium,
						"cl" = cholesterol
					</span>
				</div>
			</table>

		`;
	}
};

customElements.define('table-element', TableElement);