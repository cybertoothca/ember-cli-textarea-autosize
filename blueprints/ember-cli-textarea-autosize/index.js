/*jshint node:true*/
module.exports = {
  description: 'The blueprint that adds the autosize bower library to the project.',
  normalizeEntityName: function () {},
  afterInstall: function () {
    return this.addBowerPackageToProject('autosize');
  }
};
