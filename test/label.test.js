import { expect, fixture, html } from '@open-wc/testing';
import { LabelElement } from '../components/label/label.js';
// import component for testing

describe('my-test', () => {
  it('works', async () => {
    const el = await fixture(html` <label for="${ this.label }">${ this.label }</label> `);
    expect(el).dom.to.equal('<label for="${ this.label }">${ this.label }</label>')
  });
});

//https://open-wc.org/docs/testing/testing-package/