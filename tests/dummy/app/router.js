import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo', function () {
    this.route('max-height');
    this.route('min-height');
    this.route('ctrl-enter-submits');
  });
});

export default Router;
