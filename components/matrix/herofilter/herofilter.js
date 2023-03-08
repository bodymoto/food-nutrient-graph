import { LitElement, html, css } from 'lit';
import { FilterGroupElement } from './filtergroup/filtergroup.js';

export class HeroFilterElement extends LitElement {

	static get properties() {
		return {
			data: { type: Array },
			foodGroups: { type: Array },
			checked: { type: Object },
			filteredData: { type: Array }
		};
	}

	constructor() {
		super();

		this.data = [];
		this.foodGroups = [];
		this.checked = {};
		this.filteredData = [];

		this.addEventListener('groups-event', (event) => {
			const category = event.detail.filter.label; // 'vegetable'
			const selected = event.detail.filter.checked; // true

			this.checked[category] = selected; // { vegetable: true, dairy: false }
			this.filtered();
		});
	}

	async filtered() {
		this.filteredData = this.data.filter(item => this.checked[item['Group']]);

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
		if (changedProperties.has('foodGroups')){
			this.foodGroups = this.getFoodGroups();
		}
	}

	getFoodGroups() {
		let foods = {};
		this.data.forEach((item) => foods[item['Group']] = true);
		return Object.keys(foods).sort();
	}

	static styles = css`
		:host {
			margin: 20px;
			height: 200px;
			display: flex;
			flex-wrap: wrap;
			gap: 2px;
			align-content: center;
			justify-content: center;
			border-top: 1px solid black;
			padding-top: 20px;
			border-radius: 5px;
		}
	`;

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

customElements.define('hero-filter-element', HeroFilterElement);
