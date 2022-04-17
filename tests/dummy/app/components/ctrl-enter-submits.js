import Component from '@ember/component';
import layout from '../templates/components/ctrl-enter-submits';

export default Component.extend({
  actions: {
    submit() {
      window.alert("The text-area's parent form had the submit event triggered with the Ctrl+Enter keystroke.");
    },
  },
  layout,
});
