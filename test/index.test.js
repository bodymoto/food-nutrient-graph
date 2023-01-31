import { expect, fixture, html } from '@open-wc/testing';
import '../src/index.js';

it('can render the dom', async () => {
	const display = document.createElement('display-element');
	document.body.appendChild(display);
	expect(display).dom.to.equal('<display-element></display-element>');

	const element = await fixture(display);
	expect(element).dom.to.equal('<display-element></display-element>');
	expect(element).shadowDom.to.equal('<header-element></header-element><table-element></table-element');
});

it('can set data attribute', async () => {
	const display = document.createElement('display-element');
	display.data = [{test: 'test'}];
	const element = await fixture(display);

	expect(element.data).to.deep.equal([{test: 'test'}]);
});