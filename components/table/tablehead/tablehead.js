import { LitElement, html } from 'lit';

export class TableHeadElement extends LitElement {

	static properties = {
		category: { type: String }
	}

	constructor() {
		super();
		this.category = '';
	}

	async handleClick(event) {
		console.log(event);
		const options = {
			detail: {	selected: this.category },
			bubbles: true,
			composed: true
		};

		await this.updateComplete;
		this.dispatchEvent(new CustomEvent('selected-category', options));
	}

	render() {
		return html`
		<span @click=${this.handleClick}>${this.category}</span>
		`;
	}
};

customElements.define('table-head-element', TableHeadElement);