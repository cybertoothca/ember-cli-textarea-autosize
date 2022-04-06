'use strict';

module.exports = {
  name: 'ember-cli-textarea-autosize',
  options: {
    nodeAssets: {
      autosize: {
        vendor: {
          srcDir: 'dist',
          destDir: 'ember-cli-textarea-autosize',
          include: ['autosize.js']
        }
      }
    }
  },
  included: function (app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/ember-cli-textarea-autosize/autosize.js');
  }
};
