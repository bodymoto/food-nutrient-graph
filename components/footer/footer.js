import { LitElement, html, css } from 'lit';

export class FooterElement extends LitElement {
	static properties = {}

	constructor() { super(); }

	static styles = css`
		footer {
			display: flex;
			align-content: center;
			justify-content: center;
			font-family: 'Raleway', sans-serif;
			height: 220px;
			opacity: 0.7;
		}
		div {
			display: flex;
			align-content: center;
			justify-content: center;
			margin: auto;
		}
		h4 {
			font-size: 22px;
			margin-right: 20px;
		}
		p {
			font-size: 16px;
			margin: auto;
		}
	`;

	render() {
		return html`
		<footer>
			<div>
				<h4>KETO GRAPH</h4>
				<p>&copy;2023</p>
			</div>
		</footer>
		`;
	}
};

customElements.define('footer-element', FooterElement);