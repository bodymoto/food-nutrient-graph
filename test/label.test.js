import { expect, fixture, html } from '@open-wc/testing';
import { LabelElement } from '../components/header/label/label.js';
// import component for testing

describe('my-test', () => {
  it('works', async () => {
    const el = await fixture(html` <label-element for="${ 'vegetable' }"> ${ 'vegetable' } </label-element> `);
    expect(el.getAttribute('for')).to.equal('vegetable');
    // expect(el).dom.to.equal('<label-element for="vegetable"> vegetable </label-element>')
  });
});

//https://open-wc.org/docs/testing/testing-package/