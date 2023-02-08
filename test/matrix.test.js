import { expect, fixture, html } from '@open-wc/testing';
import '../components/matrix/matrix.js';

describe('MatrixElement', () => {

	it('has default values for properties', async () => {
		const element = await fixture(html`<matrix-element></matrix-element>`);
		
		expect(element.data).to.deep.equal([]);
		expect(element.filteredData).to.deep.equal([]);
	});

	it('can set data attribute', async () => {
		const data = [{ group: 'test', name: 'test', carbs: 101 }];
		const element = await fixture(html`<matrix-element .data=${data}></matrix-element>`);

		expect(element.data).to.equal(data);
	});

  it('can trigger the event listener', async () => {
    const element = await fixture(html`<matrix-element></matrix-element>`);

    const options = {
      detail: {
        filteredData: [{ group: 'test' }]
      }
    };

    element.dispatchEvent(new CustomEvent('filter-data', options));
    expect(element.filteredData).to.deep.equal([{ group: 'test' }]);
  });
});