import { LitElement, html } from 'lit';

export class TableElement extends LitElement {

	static get properties() {
		return {
			filteredData: { type: Array }
		};
	}

	willUpdate(changedProperties) {
		console.log(changedProperties);
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
								<td>${e.group}</td>
								<td>${e.name}</td>
								<td>${e.fdcid}</td>
								<td>${e.portion}</td>
								<td>${e.netCarbs}</td>
								<td>${e.water}</td>
								<td>${e.protein}</td>
								<td>${e.carbs}</td>
								<td>${e.fiber}</td>
								<td>${e.sugars}</td>
								<td>${e.glucose}</td>
								<td>${e.lactose}</td>
								<td>${e.ca}</td>
								<td>${e.fe}</td>
								<td>${e.mg}</td>
								<td>${e.p}</td>
								<td>${e.k}</td>
								<td>${e.na}</td>
								<td>${e.vitaminC}</td>
								<td>${e.vitaminB6}</td>
								<td>${e.cholesterol}</td>
							</tr>
							`;
					})}
				</tbody>
			</table>
		`;
	}
};

customElements.define('table-element', TableElement);