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
			width: 200px;
			height: 50px;
		}
		label {
			border: 2px solid black;
			border-radius: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			user-select: none;
			width: 100%;
			height: 100%;
			cursor: pointer;
			font-family: "Gill Sans", sans-serif;
			letter-spacing: 1px;
			font-size: 24px;
			transition: .5s;
			text-transform: capitalize;
		}
		input[type="checkbox"] {
			display: none;
		}
		input[type="checkbox"]:checked + label {
			background-color: #eee;
		}
	`;

	render() {
		return html`
			<input @change=${this.handleChecked} type="checkbox" ?checked=${this.checked} for=${this.label}>
			<label @click=${this.handleClick} for=${this.label}>${this.label}</label>
		`;
	}

	async handleClick() {
		this.checked = !this.checked;

		const options = {
			detail: {	filter: this },
			bubbles: true,
			composed: true
		};

    await this.updateComplete;
		this.dispatchEvent(new CustomEvent('groups-event', options));
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