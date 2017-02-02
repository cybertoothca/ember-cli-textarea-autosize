import Ember from 'ember';
import layout from '../templates/components/ctrl-enter-submits';

export default Ember.Component.extend({
  actions: {
    submit() {
      this.$('span.label-submit-event-triggered')
        .toggleClass('label-success');
      setTimeout(() => {
        this.$('span.label-submit-event-triggered')
          .removeClass('label-success');
      }, 1000);
    }
  },
  layout
});
