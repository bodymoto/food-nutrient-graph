import { expect, fixture, html } from '@open-wc/testing';
import '../src/index.js';

it('can render the dom', async () => {
	const matrix = document.createElement('matrix-element');
	document.body.appendChild(matrix);
	expect(matrix).dom.to.equal('<matrix-element></matrix-element>');

	const element = await fixture(matrix);
	expect(element).dom.to.equal('<matrix-element></matrix-element>');
	expect(element).shadowDom.to.equal('<header-element></header-element><table-element></table-element');
});

it('can set data attribute', async () => {
	const matrix = document.createElement('matrix-element');
	matrix.data = [{test: 'test'}];
	const element = await fixture(matrix);

	expect(element.data).to.deep.equal([{test: 'test'}]);
});