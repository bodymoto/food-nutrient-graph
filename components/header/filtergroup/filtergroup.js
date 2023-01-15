import { LitElement, html } from 'lit';

export class FilterGroupElement extends LitElement {
	
	static properties = {
		checked: { type: Boolean },
		label: { type: String },
	}

	constructor() {
		super();
		this.checked = false;
		this.label = '';
	}

	render() {
		return html`
			<input @click=${ this.handleChecked } type="checkbox" for=${ this.label }>
			<label for=${ this.label }>${ this.label }</label>
		`;
	}

	async handleChecked(event) {
		this.checked = event.target.checked;
		
		const options = {
			detail: {	filter: this },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('checked-event', options));
	}
};

customElements.define('filter-group-element', FilterGroupElement);