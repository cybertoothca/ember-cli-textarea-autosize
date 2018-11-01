import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo-focus-selects-text');
  this.route('demo-trigger-focus');
  this.route('demo-min-height');
  this.route('demo-max-height');
  this.route('demo-ctrl-enter-submits');
});

export default Router;
