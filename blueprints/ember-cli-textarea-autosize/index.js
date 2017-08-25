/* eslint-env node */
module.exports = {
  name: 'ember-cli-textarea-autosize',
  description: '',
  normalizeEntityName: function () {
  },
  afterInstall: function (/*options*/) {
    return this.addPackagesToProject([{name: 'autosize'}]);
  }
};
