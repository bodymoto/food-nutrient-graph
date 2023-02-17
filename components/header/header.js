import { LitElement, html, css } from 'lit';
import { NavElement } from './navigation.js';

export class HeaderElement extends LitElement {
	static properties = {}

	constructor() { super(); }

	static styles = css`
		:host {
			display: block;
			font-family: 'Raleway', sans-serif;
			height: 860px;
		}
		.headline {
			padding: 80px;
		}
		h1 {
			font-size: 80px;
			line-height: 50px;
			letter-spacing: -.028px;
			color: #1e1e1e;
		}
		.headline p {
			font-style: italic;
			font-weight: 700;
			max-width: 460px;
			line-height: 20px;
			letter-spacing: 1px;
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

		.grid {
			display: grid;
			position: absolute;
			margin: 0 80px;
			max-height: 260px;
			grid-template-columns: repeat(2, 1fr);
		}
		.one {
			height: 260px;
			padding-left: 80px;
			margin-right: -90px;
			line-height: 28px;
		}

		.two {
			width: 360px;
			position: relative;
			top: -440px;
			left: 260px;
		}
		img {
			width: 100%;
			border: 1px solid black;
			border-radius: 50px;
		}
	`;

	render() {
		return html`
		<nav-element></nav-element>
		<div class="headline">
			<h1>KETO GRAPH</h1>
			<h2>A keto dieting graph to aid in planning your diet.</h2>
			<p>The ketogenic diet is gaining popularity for its numerous health benefits, including weight loss, improved insulin sensitivity, increased energy, and enhanced brain function. By limiting carbohydrate intake and increasing healthy fat consumption, the body enters a state of ketosis where it burns fat for energy, resulting in these benefits. However, accurately tracking and managing carbohydrate intake can be difficult and time-consuming. Our goal is to simplify this process and make it easier for everyone to achieve a happier, healthier, & more sustainable lifestyle.
			</p>
		</div>

		<div class="grid">
			<div class="one">
				<h3>How to use this food graph:</h3>
				<ol>
					<li>
						Search by food group.
					</li>
					<li>
						Peruse a food, checkout the serving-size (SS) and total net carbs (NET CARBS).
					</li>
					<li>
						Overtime, level up your instinct by becoming better familiar with your foods of choice.
					</li>
					<li>
						Profit by enriching both mind and body.
					</li>
				</ol>
			</div>
			<div class="two">
				<img src="../components/header/citrus-fruits_monicore.jpg" alt="A freshly cut lemon on top a basket of oranges and limes" />
			</div>
		</div>
		`;
	}
};

customElements.define('header-element', HeaderElement);