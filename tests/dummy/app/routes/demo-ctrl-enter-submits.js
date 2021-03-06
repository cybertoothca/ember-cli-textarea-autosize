import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitForm() {
      this.set('submitCount', this.get('submitCount') + 1);
      this.get('controller').set('submitMessage', `Submit Count: ${this.get('submitCount')}`);
    }
  },
  submitCount: 0
});
