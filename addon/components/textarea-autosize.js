import Ember from 'ember';
import layout from '../templates/components/textarea-autosize';

export default Ember.TextArea.extend({
  layout,
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
