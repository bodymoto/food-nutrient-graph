import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { CheckboxElement } from '../components/header/checkbox/checkbox.js';

describe('CheckboxElement', () => {

  // it('can instantiate an element', async () => {
  //   const el = await fixture(html` <checkbox-element for="${'vegetable'}"></checkbox-element> `);
  //   expect(el.getAttribute('for')).to.equal('vegetable');
  // });


  it('can await an event', async () => {

    const el = await fixture(html` <checkbox-element></checkbox-element> `);

    const listener = oneEvent(el, 'checked-event');

    el.shadowRoot.querySelector('input').click();

    const { detail } = await listener;

    expect(detail.filter).to.equal(el);
  });
});

//https://open-wc.org/docs/testing/testing-package/