import { get } from '@ember/object';
import Mixin from '@ember/object/mixin';
/* global autosize */
import { isPresent } from '@ember/utils';

/**
 * A mixin for attaching autosize to a component's element.  Is also capable of reading the `min-height` and
 * `max-height` property to initialize the extents of the component's height.
 * @see http://www.jacklmoore.com/autosize/
 */
export default Mixin.create({
  /**
   * Once this textarea is being destroyed let's help clean up the DOM by removing the autosize binding.
   * @see http://www.jacklmoore.com/autosize/
   */
  willDestroyElement() {
    autosize.destroy(this.$());
  },

  /**
   * Once this textarea is inserted in the DOM initialize on autosize.
   * @see https://github.com/jackmoore/autosize
   */
  didInsertElement() {
    autosize(this.$());
    this._setCss('min-height');
    this._setCss('max-height');
  },

  /**
   * Set the css property `propertyName` with the component property `propertyName`, e.g. `min-height`.
   * @param propertyName the css property.
   * @private
   */
  _setCss(propertyName) {
    if (isPresent(get(this, propertyName))) {
      this.element.style[propertyName] = get(this, propertyName);
    }
  },
});
