import { expect, fixture, html } from '@open-wc/testing';
import '../components/matrix/table/table.js';

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

  it('can trigger the event listener', async () => {
    const selectedCategory = 'test';
    const filteredData = [{test: 'test'}];
    const element = await fixture(html`<table-element .selectedCategory=${selectedCategory} .filteredData=${filteredData}></table-element>`);

    const options = {
      detail: {
        selected: 'test'
      }
    };

		expect(element.store).to.deep.equal({test: 0});

    element.dispatchEvent(new CustomEvent('selected-category', options));
    expect(element.store).to.deep.equal({test: 1});
    // note: calls sortAscending() here, tested separately below
    expect(element.selectedCategory).to.equal('');

    element.dispatchEvent(new CustomEvent('selected-category', options));
    expect(element.store).to.deep.equal({test: 0});
    // note: calls sortDescending() here, tested separately below
    expect(element.selectedCategory).to.equal('');
  });

  it('can sort columns into correct order when event triggers', async () => {
  	const selectedCategory = 'test';
  	const filteredData = [{test: 89},{test: 20},{test: 3},{test: 43},{test: 0.5},{test: null}];
    const element = await fixture(html`<table-element .selectedCategory=${selectedCategory} .filteredData=${filteredData}></table-element>`);

    const options = {
      detail: {
        selected: 'test'
      }
    };

    element.dispatchEvent(new CustomEvent('selected-category', options));
    expect(element.store).to.deep.equal({test: 1});
    expect(element.filteredData).to.deep.equal([{test: null},{test: 0.5},{test: 3},{test: 20},{test: 43},{test: 89}]);
		expect(element.selectedCategory).to.equal('');

		element.dispatchEvent(new CustomEvent('selected-category', options));
    expect(element.store).to.deep.equal({test: 0});
    expect(element.filteredData).to.deep.equal([{test: 89},{test: 43},{test: 20},{test: 3},{test: 0.5},{test: null}]);
    expect(element.selectedCategory).to.equal('');
  });

  it('returns the correct value of 0 when sortAscending() is called on matching values', async () => {
  	const selectedCategory = 'test';
  	const filteredData = [{test: 89},{test: 89}];
    const element = await fixture(html`<table-element .selectedCategory=${selectedCategory} .filteredData=${filteredData}></table-element>`);

    const options = {
      detail: {
        selected: 'test'
      }
    };

    element.dispatchEvent(new CustomEvent('selected-category', options));
    expect(element.filteredData).to.deep.equal([{test: 89},{test: 89}]);
  });

  it('returns the correct value of 0 when sortDescending() is called on matching values', async () => {
  	const selectedCategory = 'test';
  	const filteredData = [{test: 89},{test: 89}];
    const element = await fixture(html`<table-element .selectedCategory=${selectedCategory} .filteredData=${filteredData}></table-element>`);

    const options = {
      detail: {
        selected: 'test'
      }
    };

    element.store = {test: 1};
    element.dispatchEvent(new CustomEvent('selected-category', options));
    expect(element.filteredData).to.deep.equal([{test: 89},{test: 89}]);
  });

  it('can sort by descending order when values are not pre-sorted in ascending order', async () => {
  	const selectedCategory = 'test';
  	const filteredData = [{test: 89},{test: 20},{test: 43},{test: null}];
    const element = await fixture(html`<table-element .selectedCategory=${selectedCategory} .filteredData=${filteredData}></table-element>`);

    const options = {
      detail: {
        selected: 'test'
      }
    };

    element.store = {test: 1};
		element.dispatchEvent(new CustomEvent('selected-category', options));
    expect(element.filteredData).to.deep.equal([{test: 89},{test: 43},{test: 20},{test: null}]);
  });
});