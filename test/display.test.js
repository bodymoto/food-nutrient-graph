import { expect, fixture, html } from '@open-wc/testing';
// import component for testing

describe('my-test', () => {
  it('works', async () => {
    const el = await fixture(html` <my-element></my-element> `);
  });
});

//https://open-wc.org/docs/testing/testing-package/