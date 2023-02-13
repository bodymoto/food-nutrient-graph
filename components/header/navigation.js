import { LitElement, html, css } from 'lit';

export class NavElement extends LitElement {
	static properties = {}

	constructor() { super(); }

	static styles = css`
		:host {
			display: flex;
			align-content: center;
			justify-content: center;
			font-family: 'Raleway', sans-serif;
			height: 50px;
		}
		nav {
			display: flex;
			margin: auto;
		}
		nav div {
			padding: 0 20px;
		}
		div {
			margin: auto;
		}
	`;

	render() {
		return html`
			<div>
				<nav>
					<div>application</div>
					<div>about</div>
				</nav>
			</div>
			<div>KETOMOTO</div>
			<div>&copy;2023</div>
		`;
	}
};

customElements.define('nav-element', NavElement);