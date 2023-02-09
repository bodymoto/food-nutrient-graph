import { LitElement, html, css } from 'lit';

export class HeaderElement extends LitElement {
	static properties = {}

	constructor() { super(); }


	static styles = css`
		:host {
			font-family: 'Raleway', sans-serif;
		}
		div {
			margin: 20px;
		}
		h1 {
			font-size: 60px;
			line-height: 50px;
			letter-spacing: -.028px;
			color: #1e1e1e;
		}
		p {
			max-width: 380px;
		}

		.container {
			display: flex;
			align-content: center;
			justify-content: center;
			flex-wrap: wrap;
			width: 100%;
			height: 100%;
		}

		.block {
	    width: 25px;
	    height: 25px;
	    background: #eee;
	    border: 1px solid black;
	    opacity: 1;
	    transition: transform .2s ease;
		}
	`;

	create(blocks = 171) {
		const container = document.createElement('div');
		container.classList.add('container');
		
		for (let i = 0; i < blocks; i++) {
			const newBlock = document.createElement('div');
			newBlock.classList.add('block');
			this.shadowRoot.appendChild(container).appendChild(newBlock);
		}

		// ${this.create()}
	}

	render() {
		return html`
		<div>
			// WORK ON HELLOEVAN EFFECT
			<h1>KETOMOTO Dieting Technology</h1>
			<p>The keto diet has become increasingly popular due to its numerous health benefits, including weight loss and improved insulin sensitivity. By drastically reducing carbohydrate intake and increasing the consumption of healthy fats, the body enters a state of ketosis where it burns stored fat for energy, leading to the aforementioned benefits. Adopting a ketogenic lifestyle can also improve overall health and prevent chronic diseases. Embracing the keto diet is a step towards a healthier and more sustainable future.
			</p>
		</div>
		`;
	}
};

customElements.define('header-element', HeaderElement);