import Ember from 'ember';

/**
 *
 */
export default Ember.Mixin.create({
  keyDown(event) {
    if (event.ctrlKey && (event.keyCode === KeyEvent.DOM_VK_ENTER || event.keyCode === KeyEvent.DOM_VK_RETURN)) {
      Ember.Logger.debug("Ctrl-Enter was pressed inside a focused user interface control.");
      event.preventDefault();
      const $form = this.$().closest('form');  // this.form does not work because component is wrapped
      if ($form) {
        $form.submit();
      } else {
        Ember.Logger.warn("Ctrl-Enter was pressed inside a focused user interface control, however the control was not inside a form and therefore nothing was submitted.");
      }
    }
  }
});
