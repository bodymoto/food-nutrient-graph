import { LitElement, html } from 'lit';
import { CheckboxElement } from './checkbox/checkbox.js';
import { LabelElement } from './label/label.js';

export class HeaderElement extends LitElement {

	static properties = {
		data: {type: Array},
		checked: { type: Boolean },
		label: { type: String },
		foodTypes: {},
	}

	constructor() {
		super();
		// listen for checked-event and dispatch filtered data

		this.data = [];
		this.checked = false;
		this.label = '';
		this.foodTypes = {};
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
		return html`
		${this.foodTypes.map((type) => {
			return html`
			<checkbox-element .checked="${ this.checked }" for="${ type }"></checkbox-element>

			<label-element .label="${ type }"></label-element>

			<br />		`
		})}
		`;
	}
};

customElements.define('header-element', HeaderElement);
