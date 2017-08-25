import Ember from 'ember';
import layout from '../templates/components/ctrl-enter-submits';

export default Ember.Component.extend({
  actions: {
    submit() {
      window.alert("The text-area's parent form had the submit event triggered with the Ctrl+Enter keystroke.");
    }
  },
  layout
});
