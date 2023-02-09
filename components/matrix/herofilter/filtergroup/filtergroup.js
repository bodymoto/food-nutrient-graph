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
			width: 480px;
			height: 36px;
		}
		label {
			border-radius: 5px;
			background-color: rgba(238, 238, 238, 0.6);
			border: none;
			box-shadow: 2px 2px 2px black;
			display: flex;
			align-items: center;
			justify-content: center;
			user-select: none;
			width: 100%;
			height: 100%;
			cursor: pointer;
			font-family: "Gill Sans", sans-serif;
			letter-spacing: 1px;
			font-size: 16px;
			transition: .3s ease;
			text-transform: capitalize;
		}
		input[type="checkbox"] {
			display: none;
		}
		input[type="checkbox"]:checked + label {
			background-color: #fff;
			border: 1px solid black;
			box-shadow: none;
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