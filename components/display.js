import { LitElement, html } from 'lit';
import { LabelElement } from '../components/checkbox/label.js';
import { CheckboxElement } from '../components/checkbox/checkbox.js';
import { TableElement } from '../components/table/table.js';

export class DisplayElement extends LitElement {

	static properties = {
		data: { type: Array },
		checked: { type: Boolean },
		filteredData: { type: Array },
		foodTypes: {},
	};

	constructor() {
		super();

		this.data = [];
		this.filteredData = [];
		this.foodTypes = {};

		this.addEventListener('checked-event', (e) => {
			this.checked = e.detail.checked; // boolean value
			this.filtered();
		});
	}

	filtered() {
		if (this.checked === true) {
			this.filteredData = this.data.filter((item) => {
				return item.type === 'fruit';
			});
		} else { this.filteredData = this.data };
	}

	getFoodTypes() {
		let foodTypes = {};
		this.data.forEach((food) => foodTypes[food.type] = true);
		return Object.keys(foodTypes);
	}

	willUpdate(changedProperties) {
		// console.log(changedProperties);
		this.foodTypes = this.getFoodTypes();
	}

	render() {
	//render child components
		return html`

			${this.foodTypes.map((type) => {
				return html`
				<label-element .label=${ type }></label-element>
				<br />
				`
			})}

			<table-element .data=${ this.data } .filteredData=${ this.filteredData }>
			</table-element>
		`;
	}
};

customElements.define('display-element', DisplayElement);

// Your render() method should follow these guidelines:
// Avoid changing the component's state
// Avoid producing any side effects
// Use only the component's properties as input
// Return the same result when given the same property values