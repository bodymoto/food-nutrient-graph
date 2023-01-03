import { LitElement, html } from 'lit';

export class CheckboxElement extends LitElement {

	static properties = {
		checked: { type: Boolean },
		label: { type: String },
	};

	constructor() {
		super();
		this.checked = false;
		this.label = '';
	}

	render() {
		//this.renderRoot.host.attributes.for.nodeValue
		return html`
			<input @click="${ this.handleChecked }" type="checkbox" value="${ this.label }">
		`;
	}

	handleChecked(event) {
		this.checked = event.target.checked;
		const options = {
			detail: { checked: this.checked },
			bubbles: true,
			composed: true
		};

		this.dispatchEvent(new CustomEvent('checked-event', options));
	}
};

customElements.define('checkbox-element', CheckboxElement);