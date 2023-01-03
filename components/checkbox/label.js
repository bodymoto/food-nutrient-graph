import { LitElement, html } from 'lit';
import { CheckboxElement } from './checkbox.js';

export class LabelElement extends LitElement {

	static properties = {
		type: { type: String },
	}

	constructor() {
		super();
		this.label = '';
	}

	render() {
		// this.renderRoot.host.label
		return html`
			<checkbox-element for="${ this.label }"></checkbox-element>

			<label for="${ this.label }">${ this.label }</label>
		`;
	}
};

customElements.define('label-element', LabelElement);