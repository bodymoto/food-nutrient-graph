import { LitElement, html, css } from 'lit';

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

	static styles = css`
		:host {
			display: flex;
			align-content: center;
			justify-content: center;
		}
		label {
			font-family: "Gill Sans", sans-serif;
			letter-spacing: 1px;
			margin: auto;
			padding: 0 5px;
			font-size: 24px;
			text-transform: capitalize;
		}
		input[type="checkbox"] {
			cursor: pointer;
			appearance: none;
			width: 48px;
			height: 48px;
			border: 2px solid black;
			background-clip: content-box;
			padding: 6px;
			border-radius: 6px;
			transition: .5s;
		}
		input[type="checkbox"]:checked {
			background-color: orange;
			border-radius: 50%;
		}
	`;

	render() {
		return html`
			<input @change=${this.handleChecked} type="checkbox" for=${this.label}>
			<label for=${this.label}>${this.label}</label>
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
		this.dispatchEvent(new CustomEvent('groups-event', options));
	}
};

customElements.define('filter-group-element', FilterGroupElement);