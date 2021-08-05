import { newE2EPage } from '@stencil/core/testing';

describe('my-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-rating></my-rating>');

    const element = await page.find('my-rating');
    expect(element).toHaveClass('hydrated');
  });
});
