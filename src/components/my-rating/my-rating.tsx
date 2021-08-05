import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-rating-star',
  styleUrl: 'my-rating.css',
  shadow: true,
})
export class MyRating {

  render() {
    return (
      <Host>
        <span class="rating">&#x2605;</span>
        <span class="rating">&#x2605;</span>
        <span class="rating">&#x2605;</span>
        <span class="rating">&#x2606;</span>
        <span class="rating">&#x2606;</span>
        <span class="rating">&#x2606;</span>
      </Host>
    );
  }

}
