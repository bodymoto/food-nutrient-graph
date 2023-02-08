import { LitElement, html, css } from 'lit';

export class HeaderElement extends LitElement {
	static properties = {}

	constructor() { super(); }


	static styles = css`
		:host {
			font-family: 'Raleway', sans-serif;
		}
		div {
			margin: 20px 100px;
		}
		h1 {
			font-size: 50px;
			line-height: 50px;
			letter-spacing: -.028px;
			color: #1e1e1e;
		}
		span {
			font-size: 62px;
		}
		p {
			max-width: 380px;
		}
	`;


	render() {
		return html`
		<div>
			<h1>KETOMOT<span>&#8709;</span> Dieting Technology</h1>
			<p>The keto diet has become increasingly popular due to its numerous health benefits, including weight loss and improved insulin sensitivity. By drastically reducing carbohydrate intake and increasing the consumption of healthy fats, the body enters a state of ketosis where it burns stored fat for energy, leading to the aforementioned benefits. Adopting a ketogenic lifestyle can also improve overall health and prevent chronic diseases. Embracing the keto diet is a step towards a healthier and more sustainable future.
			</p>
		</div>
		`;
	}
};

customElements.define('header-element', HeaderElement);