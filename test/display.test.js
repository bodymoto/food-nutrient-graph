import { expect, fixture, html } from '@open-wc/testing';
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

	it('converters data property', async () => {
		const data = [{test: 'test'}, {test: 'test2'}];
		const element = await fixture(html`<display-element></display-element>`);

		element.data = data;
		expect(element.data).to.deep.equal(data);
	});

  it('can trigger the event listener', async () => {
    const element = await fixture(html`<display-element></display-element>`);

    const options = {
      detail: {
        filteredData: [{ group: 'test' }]
      }
    };

    element.dispatchEvent(new CustomEvent('filter-data', options));
    expect(element.filteredData).to.deep.equal([{ group: 'test' }]);
  });
});