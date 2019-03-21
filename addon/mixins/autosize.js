/* global autosize */
import { isPresent } from '@ember/utils';
import Mixin from '@ember/object/mixin';

/**
 * A mixin for attaching autosize to a component's element.  Is also capable of reading the `min-height` and
 * `max-height` property to initialize the extents of the component's height.
 * @see http://www.jacklmoore.com/autosize/
 */
export default Mixin.create({
  /**
   * Once this textarea is inserted in the DOM initialize on autosize.
   * @see https://github.com/jackmoore/autosize
   */
  didInsertElement() {
    this._super(...arguments);
    autosize(this.element);
    this._setCss('min-height');
    this._setCss('max-height');
  },

  /**
   * Once this textarea is being destroyed let's help clean up the DOM by removing the autosize binding.
   * @see http://www.jacklmoore.com/autosize/
   */
  willDestroyElement() {
    this._super(...arguments);
    autosize.destroy(this.element);
  },

  /**
   * Set the jquery css property `propertyName` with the component property `propertyName`.
   * @param propertyName the css property.
   * @private
   */
  _setCss(propertyName) {
    if (isPresent(this.get(propertyName))) {
      this.element.style[propertyName] = this.get(propertyName);
    }
  }
});
