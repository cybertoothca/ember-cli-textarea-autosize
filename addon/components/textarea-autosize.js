import Ember from 'ember';
import layout from '../templates/components/textarea-autosize';

export default Ember.TextArea.extend({
  layout,
  /**
   * Once this textarea is inserted in the DOM initialize on autosize.
   * @see https://github.com/jackmoore/autosize
   */
  _initializeAutosize: Ember.on('didInsertElement', function () {
    autosize(this.$());
  })
});
