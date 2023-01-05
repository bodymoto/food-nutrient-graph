import { LitElement, html } from 'lit';

export class LabelElement extends LitElement {

	static properties = {
		label: { type: String },
	}

	render() {
		// this.renderRoot.host.label
		return html`
			<label for="${ this.label }">${ this.label }</label>
		`;
	}
};

customElements.define('label-element', LabelElement);