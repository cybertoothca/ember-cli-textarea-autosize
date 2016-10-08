import Ember from 'ember';

/**
 * When focusing on an element that includes this mixin, the text within is selected.
 */
export default Ember.Mixin.create({
  focusIn() {
    if (this.$().is(':text, textarea')) {
      this.$().trigger('select');
    }
  }
});
