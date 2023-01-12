import { LitElement, html } from 'lit';
import { CheckboxElement } from './checkbox/checkbox.js';
import { LabelElement } from './label/label.js';

export class HeaderElement extends LitElement {

	static properties = {
		data: { type: Array },
		filteredData: { type: Array },
		foodGroups: { type: Object },
		label: { type: String },
		checked: { type: Object },
	}

	constructor() {
		super();

		this.data = [];
		this.filteredData = [];
		this.foodGroups = {};
		this.checked = {};
		this.label = '';

		this.addEventListener('checked-event', (e) => {
			this.checked[e.detail.filter.attributes.for.textContent] = e.detail.filter.checked;
			// example output { vegetable: true, dairy: false }

			this.filtered();
		});
	}

	filtered() {
		this.filteredData = this.data.filter(item => this.checked[item.type]);

		const options = {
			detail: {
				filteredData: this.filteredData,
			},
			bubbles: true,
			composed: true
		};

		this.dispatchEvent(new CustomEvent('filter-data', options))
	}

	getFoodGroups() {
		let foodGroups = {};
		this.data.forEach((food) => foodGroups[food.type] = true);
		return Object.keys(foodGroups);
	}

	willUpdate(changedProperties) {
		this.foodGroups = this.getFoodGroups();
	}

	render() {
		return html`
			${
				this.foodGroups.map((group) => {
					return html`
					<checkbox-element for="${ group }"></checkbox-element>

					<label-element .label="${ group }"></label-element>

					<br />
					`
			})}
		`;
	}
};

customElements.define('header-element', HeaderElement);
