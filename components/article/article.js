import { LitElement, html, css } from 'lit';

export class ArticleElement extends LitElement {
	static properties = {}

	constructor() { super(); }

	static styles = css`
		section {
			font-family: 'Raleway', sans-serif;
			padding: 80px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
		h3 {
			font-size: 28px;
		}
		p {
			padding: 10px 80px;
			font-size: 18px;
			width: 520px;
			letter-spacing: .7px;
			line-height: 24px;
		}
		.image {
			margin: auto;
			width: 540px;
		}
		img {
			width: 100%;
			border-radius: 40px;
		}
	`;

	render() {
		return html`
			<section>
			<div>
				<h3>Why build a food graph?</h3>
				<p>
					Food graphs, or food lists, are prevalent throughout the keto community, but often distributed throughout "top food" articles, hidden behind questionaires, or simply require a lot of research to connect the dots. My objective was to simplify and consolidate this effort into a single, straightforward graph.
				</p>

				<h3>Source: USDA FoodData Central.</h3>
				<p>
					The information provided here is sourced from the <a href="https://fdc.nal.usda.gov/">USDA website</a>. To learn more about a specific food, simply copy the FDCID number listed in Ketomoto's food graph and search by the FDCID on the USDA <a href="https://fdc.nal.usda.gov/">website</a>.
				</p>
			</div>
			<div class="image">
				<div>
					<img src="../components/article/cropland_tom-fisk.jpg" alt="">
				</div>
			</div>
			</section>
		`;
	}
};

customElements.define('article-element', ArticleElement);