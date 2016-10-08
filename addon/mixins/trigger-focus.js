import Ember from 'ember';

/**
 * This ensures that focus is placed into an input or textarea should the autofocus property exist.
 * Why?  Because when Ember RETURNS to a template for a second or more time, the element with autofocus does not
 * seem to trigger.
 * This fixes that.
 */
export default Ember.Mixin.create({
  _triggerFocus: Ember.on('didInsertElement', function () {
    if (this.get('autofocus')) {
      this.$().trigger('focus');
    }
  })
});
