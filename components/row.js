import { LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";


export class Row extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
            <li>
                <p>${this.item}</p>
            </li>
        `;
    }
}

customElements.define('my-row', Row);