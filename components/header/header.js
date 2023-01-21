import { LitElement, html } from 'lit';
import { FilterGroupElement } from './filtergroup/filtergroup.js';

export class HeaderElement extends LitElement {

	static get properties() {
		return {
			data: { type: Array },

			foodGroups: { type: Object },

			checked: { type: Object },	
			label: { type: String },
		};
	}

	constructor() {
		super();

		this.foodGroups = {};
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

	getFoodGroups() {
		let foodGroups = {};
		this.data.forEach((item) => foodGroups[item.group] = true);
		return Object.keys(foodGroups);
	}

	willUpdate(changedProperties) {
		this.foodGroups = this.getFoodGroups();
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
