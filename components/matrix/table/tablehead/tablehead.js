import { LitElement, html, css } from 'lit';

export class TableHeadElement extends LitElement {

	static properties = {
		category: { type: String },
		enabled: { type: Boolean}
	}

	constructor() {
		super();
		this.category = '';
	}

	async handleClick(event) {
		const options = {
			detail: {	selected: this.category },
			bubbles: true,
			composed: true
		};

		await this.updateComplete;
		this.dispatchEvent(new CustomEvent('selected-category', options));
	}

	static styles = css`
		span {
			cursor: pointer;
		}
	`;

	render() {
		return html`
		<span @click=${this.handleClick}>${this.category}</span>
		`;
	}
};

customElements.define('table-head-element', TableHeadElement);