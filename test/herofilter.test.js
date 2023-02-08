import { expect, fixture, html } from '@open-wc/testing';
import '../components/matrix/herofilter/herofilter.js';

describe('HeroFilterElement', () => {

	it('has default values for each property', async () => {
		const element = await fixture(html`<hero-filter-element></hero-filter-element>`);
		expect(element.data).to.deep.equal([]);
		expect(element.foodGroups).to.deep.equal([]);
    expect(element.filteredData).to.deep.equal([]);
		expect(element.checked).to.deep.equal({});
	});

  it('can set data attribute', async () => {
    const data = [{ test: 'test' }];
    const element = await fixture(html`<hero-filter-element .data=${data}></hero-filter-element>`);
    expect(element.data).to.equal(data);
  });

  it('filters data based on value of checked', async () => {
    let data = [{'Group': 'test'}, {'Group': 'test2'}, {'Group': 'test3'}];
    let checked = { test: true, test2: false, test3: false };
    const element = await fixture(html`<hero-filter-element .data=${data} .checked=${checked}></hero-filter-element>`);

    element.filtered();
    expect(element.data).to.equal(data);
    expect(element.checked).to.equal(checked);
    expect(element.filteredData).to.deep.equal( [{'Group': 'test'}] );

    element.checked = { test: true, test2: true, test3: false };
    element.filtered();
    expect(element.filteredData).to.deep.equal( [{'Group': 'test'}, {'Group': 'test2'}] );
  });

  it('can trigger the event listener', async () => {
    const checked = { test: true };
    const data = [{ 'Group': 'test' }];
    const element = await fixture(html`<hero-filter-element .checked=${checked} .data=${data}></hero-filter-element>`);

    const options = {
      detail: {
        filter: {
          label: 'test',
          checked: true
        }
      }
    };

    element.dispatchEvent(new CustomEvent('groups-event', options));
    expect(element.filteredData).to.deep.equal([{ 'Group': 'test' }]);
  });
});