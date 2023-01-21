import { LitElement, html } from 'lit';
import { HeadElement } from './head/head.js';

export class TableElement extends LitElement {

	static get properties() {
		return {
			filteredData: { type: Array },
			columns: { type: Array },
			selectedCategory: { type: String },
			sorted: { type: Boolean }
		};
	}

	constructor() {
		super();
		this.filteredData = [];
		this.columns = [];
		this.selectedCategory = '';
		this.sorted = false;

		this.addEventListener('selected-category', (event) => {
			this.selectedCategory = event.detail.selected; // example 'name' or 'grams'
			this.sorted = !this.sorted;
			this.sorted ? this.sortAscending() : this.sortDescending();
		});
	}

	willUpdate(changedProperties) {
		// console.log("checking:", changedProperties);
		this.columns = Object.keys(this.filteredData[0]);
	}

	sortAscending() {
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
		this.filteredData = this.filteredData.sort(compare);
	}

	sortDescending() {
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
		this.filteredData = this.filteredData.sort(compare);
	}

	render() {
		return html`
			<table>

				<thead>
					<tr>
						${this.columns.map((column) => html`
							<th>
								<head-element category=${column}></head-element>
							</th>
						`)}
					</tr>
				</thead>

				<tbody>
					${
						this.filteredData.map((object) => {
							return html`
							<tr>
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