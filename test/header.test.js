import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../components/header/header.js';

describe('HeaderElement', () => {

	it('has default values for each property', async () => {
		const element = await fixture(html`<header-element></header-element>`);
		expect(element.data).to.deep.equal([]);
		expect(element.foodGroups).to.deep.equal([]);
    expect(element.filteredData).to.deep.equal([]);
		expect(element.checked).to.deep.equal({});
	});

  it('can set data attribute', async () => {
    const data = [{ test: 'test' }];
    const element = await fixture(html`<header-element .data=${data}></header-element>`);
    expect(element.data).to.equal(data);
  });

  it('filters data based on value of checked', async () => {
    let data = [{group: 'test'}, {group: 'test2'}, {group: 'test3'}];
    let checked = { test: true, test2: false, test3: false };
    const element = await fixture(html`<header-element .data=${data} .checked=${checked}></header-element>`);

    element.filtered();
    expect(element.data).to.equal(data);
    expect(element.checked).to.equal(checked);
    expect(element.filteredData).to.deep.equal( [{group: 'test'}] );

    element.checked = { test: true, test2: true, test3: false };
    element.filtered();
    expect(element.filteredData).to.deep.equal( [{group: 'test'}, {group: 'test2'}] );
  });

  it('can trigger the event listener', async () => {
    const checked = { test: true };
    const data = [{ group: 'test' }];
    const element = await fixture(html`<header-element .checked=${checked} .data=${data}></header-element>`);

    const options = {
      detail: {
        filter: {
          label: 'test',
          checked: true
        }
      }
    };

    element.dispatchEvent(new CustomEvent('groups-event', options));
    expect(element.filteredData).to.deep.equal([{ group: 'test' }]);
  });
});