import { LitElement, html } from 'lit';

export class TableElement extends LitElement {

	static properties = {
		data: { type: Array },
		filteredData: { type: Array },
		checked: { type: Boolean },
		label: { type: String },
		
		count: { type: Number },
	};

	constructor() {
		super();

		this.count = 1;
	}

	render() {
		
		return html`
			<p>TableElement:</p>
			<p>${ JSON.stringify(this.filteredData) }</p>
			<p>${ this.filteredData.length }</p>

			<input @click="${this.handleClick}" type="checkbox" value="checkbox">

			<table>
				<thead>
					<tr>
						${Object.keys(this.data[0]).map((key) => html`<th>${key}</th>`)}
					</tr>
				</thead>
				<tbody>
					${this.filteredData.map((e) => {
						return html`
						<tr>
							<td>${e.type}</td>
							<td>${e.name}</td>
							<td>${e.calories}</td>
						</tr>
						`
					})}
				</tbody>
			</table>
		`;
	}

	handleClick(e) {
		this.filteredData = this.filteredData.concat([this.count]);
		// console.log(this.filteredData);
		this.count += 1;
		// trigger a render here
		//this.requestUpdate();
	}
};

customElements.define('table-element', TableElement);

// Reactive properties
// Treat objects and arrays as immutable. For example, to remove an item from myArray, construct a new array:
// this.myArray = this.myArray.filter((_, i) => i !== indexToRemove);