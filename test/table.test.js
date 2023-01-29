import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../components/table/table.js';

describe('TableElement', () => {

	it('has default values for each property', async () => {
		const element = await fixture(html`<table-element></table-element>`);
		expect(element.filteredData).to.deep.equal([]);
		expect(element.columns).to.deep.equal([]);
		expect(element.selectedCategory).to.equal('');
		expect(element.store).to.deep.equal({});
	});

	it('can set filteredData attribute', async () => {
    const filteredData = [{ group: 'test', name: 'test', carbs: 101 }];
    const element = await fixture(html`<header-element .filteredData=${filteredData}></header-element>`);
    expect(element.filteredData).to.equal(filteredData);
  });
});