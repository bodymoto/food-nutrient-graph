import { LitElement, html } from 'lit';

export class TableElement extends LitElement {

	static get properties() {
		return {
			filteredData: { type: Array }
		};
	}

	constructor() {
		super();
		this.filteredData = [];
	}

	render() {
		return html`
			<table>
				<thead>
					<tr>
						${
							Object.keys(this.filteredData[0]).map((key) => html`<th>${key}</th>`)
						}
					</tr>
				</thead>
				<tbody>
					${
						this.filteredData.map((e) => {
							return html`
							<tr>
								<td>${e.type}</td>
								<td>${e.name}</td>
								<td>${e.calories}</td>
							</tr>
							`;
					})}
				</tbody>
			</table>
		`;
	}
};

customElements.define('table-element', TableElement);