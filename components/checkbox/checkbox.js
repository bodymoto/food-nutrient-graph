import { LitElement, html } from 'lit';

export class CheckboxElement extends LitElement {

	static properties = {
		active: { type: Boolean, reflect: true },
	};

	constructor() {
		super();
		this.active = false;
	}

	render() {
		return html`
			<input
			@click="${ () =>
				(this.active = !this.active)
			}"
			type="checkbox"
			value="checkbox"
			></input>

			<label
			for="checkbox"
			>my checkbox element: ${ this.active }</label>
		`;
	}
};

customElements.define('checkbox-element', CheckboxElement);