'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    nodeAssets: {
      autosize: {
        vendor: {
          srcDir: 'dist',
          destDir: 'ember-cli-textarea-autosize',
          include: ['autosize.js'],
        },
      },
    },
  },
  included: function (app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/ember-cli-textarea-autosize/autosize.js');
  },
};
