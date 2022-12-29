import { LitElement, html } from 'lit';

export class CheckboxElement extends LitElement {

	static properties = {
		checkbox: { type: Boolean },
	};

	constructor() {
		super();
		this.checkbox = false;
	}

	render() {
		return html`
			<input
			@click="${ () =>
				(this.checkbox = !this.checkbox)
			}"
			type="checkbox"
			value="checkbox"
			>

			<label
			for="checkbox"
			>my checkbox element: ${ this.checkbox }</label>
		`;
	}
};

customElements.define('checkbox-element', CheckboxElement);