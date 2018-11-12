/* eslint-env node */
module.exports = {
  name: 'ember-cli-textarea-autosize',
  description: '',
  normalizeEntityName: function () {
  },
  afterInstall: function (/*options*/) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-text-support-mixins', target: '~2.0.2' }
      ]
    }).then(() => {
      return this.addPackagesToProject([
        { name: 'autosize' }  // always install the latest ... that's trust baby
      ])
    });
  }
};
