/* eslint-env node */

module.exports = function (/*deployTarget*/) {
  let ENV = {
    build: {
      environment: 'production'
    },
    s3: {
      bucket: 'ember-cli-textarea-autosize.cybertooth.io',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,html}',
      profile: 'cybertooth',
      region: 'us-west-2'
    }
  };

  // if (deployTarget === 'production') {
  //   ENV.build.environment = 'production';
  // configure other plugins for production deploy target here
  // }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
