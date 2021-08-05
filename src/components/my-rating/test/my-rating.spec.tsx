import { newSpecPage } from '@stencil/core/testing';
import { MyRating } from '../my-rating';

describe('my-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyRating],
      html: `<my-rating></my-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <my-rating>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-rating>
    `);
  });
});
