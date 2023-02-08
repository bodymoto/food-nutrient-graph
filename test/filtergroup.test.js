import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../components/matrix/header/filtergroup/filtergroup.js';

describe('FilterGroupElement', () => {

  it('has default values for each property', async () => {
    const element = await fixture(html`<filter-group-element></filter-group-element>`);
    expect(element.label).to.equal('');
    expect(element.checked).to.equal(false);
  });

  it('can set label attribute', async () => {
    const label = 'test';
    const element = await fixture(html`<filter-group-element label=${label}></filter-group-element>`);
    expect(element.label).to.equal(label);
  });

  it('can set checked property', async () => {
    const element = await fixture(html`<filter-group-element .checked=${true}></filter-group-element>`);
    expect(element.checked).to.equal(true);
  });

  it('toggled checked when checked is clicked', async () => {
    const element = await fixture(html`<filter-group-element></filter-group-element>`);
    expect(element.checked).to.equal(false);

    element.shadowRoot.querySelector('input').click();
    expect(element.checked).to.equal(true);

    element.shadowRoot.querySelector('input').click();
    expect(element.checked).to.equal(false);
  });

  it('dispatch an event when checkbox is clicked', async () => {

    const element = await fixture(html`<filter-group-element></filter-group-element>`);
    const listener = oneEvent(element, 'groups-event');

    element.shadowRoot.querySelector('input').click();

    const { detail } = await listener;
    expect(detail.filter).to.equal(element);
  });
});

//https://open-wc.org/docs/testing/testing-package/