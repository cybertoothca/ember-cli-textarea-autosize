/*jshint node:true*/
module.exports = {
  description: 'The blueprint that adds the autosize bower library to the project.'

  afterInstall: function(options) {
    return this.addBowerPackageToProject('autosize');
  }
};
