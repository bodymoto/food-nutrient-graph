import { LitElement, html, css } from 'lit';

export class ArticleElement extends LitElement {
	static properties = {}

	constructor() { super(); }

	static styles = css`
		div {
			height: 600px;
			border: 1px solid black;
		}
	`;

	render() {
		return html`
			<div>
			// We are not (yet) perfect.
				Not seeing a food listed?
				Provide support and help make the world better.

			<br/>

			// What's in store for the future of Ketomoto?
				Describe why keto is so important and how building out better tools will enable others (by being easier to adopt change) to better themselves. If the project continues to gain traction, new tools will role out, possible blog/articles, but ultimately would like to innovate in the space avoiding previous methods of mass articles and buzzwords.

			<br/>

			// Show your support.
				Provide a way for people to donate. Set a goal. Show total donations for the previous month. And a mechanism to like, with a visible counter.

			<br/>

			// Add a footer element.

			</div>
		`;
	}
};

customElements.define('article-element', ArticleElement);