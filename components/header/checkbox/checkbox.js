import { LitElement, html } from 'lit';

export class CheckboxElement extends LitElement {
	
	static properties = {
		checked: { type: Boolean },
		label: { type: String },
	}

	render() {
		return html`
			<input @click="${ this.handleChecked }" type="checkbox" for="${ this.label }">
		`;
	}

	handleChecked(event) {
		this.checked = event.target.checked;
		
		const options = {
			detail: {
				filter: this,
			},
			bubbles: true,
			composed: true
		};

		this.dispatchEvent(new CustomEvent('checked-event', options));
	}
};

customElements.define('checkbox-element', CheckboxElement);