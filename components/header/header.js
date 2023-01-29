import { LitElement, html } from 'lit';
import { FilterGroupElement } from './filtergroup/filtergroup.js';

export class HeaderElement extends LitElement {

	static get properties() {
		return {
			data: { type: Array },
			foodGroups: { type: Array },
			checked: { type: Object },	
		};
	}

	constructor() {
		super();

		this.data = [];
		this.foodGroups = [];
		this.checked = {};

		this.addEventListener('groups-event', (event) => {

			this.checked[event.detail.filter.label] = event.detail.filter.checked;
			// example output { vegetable: true, dairy: false }
			this.filtered();
		});
	}

	async filtered() {
		this.filteredData = this.data.filter(item => this.checked[item.group]);

		const options = {
			detail: {
				filteredData: this.filteredData,
			},
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('filter-data', options));
	}

	willUpdate(changedProperties) {
		this.foodGroups = this.getFoodGroups();
	}

	getFoodGroups() {
		let foods = {};
		this.data.forEach((item) => foods[item.group] = true);
		return Object.keys(foods);
	}

	render() {
		return html`
			${
				this.foodGroups.map((item) => {
					return html`
					<filter-group-element label=${item}></filter-group-element>
					`
				}
			)}
		`;
	}
};

customElements.define('header-element', HeaderElement);