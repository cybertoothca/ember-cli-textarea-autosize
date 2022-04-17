import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    submitForm() {
      this.set('submitCount', this.submitCount + 1);
      this.controller.set('submitMessage', `Submit Count: ${this.submitCount}`);
    },
  },
  submitCount: 0,
});
