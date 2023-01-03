import { LitElement, html } from 'lit';

export class CheckboxElement extends LitElement {

	static properties = {
		checked: { type: Boolean },
	};

	constructor() {
		super();
		this.checked = false;
	}

	render() {
		return html`
			<input @click="${this.handleChecked}" type="checkbox" value="checkbox">

			<label for="checkbox">
				Filter my data when true: ${this.checked} 
			</label>
		`;
	}

	handleChecked(event) {
		// when clicked capture boolean value and send it up
		this.checked = !this.checked;
		let myChecked = this.checked;
		const options = {
			detail: { myChecked },
			bubbles: true,
			composed: true
		};
		this.dispatchEvent(new CustomEvent('checked-event', options));
	}


};

customElements.define('checkbox-element', CheckboxElement);