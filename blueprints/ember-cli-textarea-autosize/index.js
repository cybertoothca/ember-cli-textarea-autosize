/* eslint-env node */
module.exports = {
  name: 'ember-cli-textarea-autosize',
  description: '',
  normalizeEntityName: function () {
  },
  afterInstall: function (/*options*/) {
    return this.addAddonsToProject([{name: 'ember-cli-text-support-mixins'}]).then(() => {
      return this.addPackagesToProject([{name: 'autosize'}])
    });
  }
};
