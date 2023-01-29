import { LitElement, html } from 'lit';
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
			this.selectedCategory = event.detail.selected;

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

		this.filteredData.sort(compare);
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

		this.filteredData.sort(compare);
	}

	render() {
		return html`
			<table>

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