import { expect, fixture, html } from '@open-wc/testing';
import { LabelElement } from '../components/header/label/label.js';
// import component for testing

describe('LabelElement', () => {
  it('can instantiate an element', async () => {
    const el = await fixture(html` <label-element for="${ 'vegetable' }"> ${ 'vegetable' } </label-element> `);
    expect(el.getAttribute('for')).to.equal('vegetable');
  });
});

//https://open-wc.org/docs/testing/testing-package/