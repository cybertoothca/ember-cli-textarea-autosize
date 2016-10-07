/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-textarea-autosize',
  included: function (app) {
      this._super.included(app);
      app.import(app.bowerDirectory + '/autosize/dist/autosize.js');
    }
  };
