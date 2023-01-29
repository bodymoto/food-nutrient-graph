import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../components/display.js';

describe('DisplayElement', () => {

	it('has default values for properties', async () => {
		const element = await fixture(html`<display-element></display-element>`);
		
		expect(element.data).to.deep.equal([]);
		expect(element.filteredData).to.deep.equal([]);
	});

	it('can set data attribute', async () => {
		const data = [{ group: 'test', name: 'test', carbs: 101 }];
		const element = await fixture(html`<display-element .data=${data}></display-element>`);

		expect(element.data).to.equal(data);
	});
});