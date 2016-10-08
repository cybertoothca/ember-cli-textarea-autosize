import Ember from 'ember';

/**
 * A mixin for attaching autosize to a component's element.  Is also capable of reading the `min-height` and
 * `max-height` property to initialize the extents of the component's height.
 * @see http://www.jacklmoore.com/autosize/
 */
export default Ember.Mixin.create({
  /**
   * Once this textarea is being destroyed let's help clean up the DOM by removing the autosize binding.
   * @see http://www.jacklmoore.com/autosize/
   */
  _removeAutosize: Ember.on('willDestroyElement', function () {
    autosize.destroy(this.$());
  }),
  /**
   * Once this textarea is inserted in the DOM initialize on autosize.
   * @see https://github.com/jackmoore/autosize
   */
  _initializeAutosize: Ember.on('didInsertElement', function () {
    autosize(this.$());
    if (Ember.isPresent(this.get('min-height'))) {
      this.$().css('min-height', this.get('min-height'));
    }
    if (Ember.isPresent(this.get('max-height'))) {
      this.$().css('max-height', this.get('max-height'));
    }
  })
});
