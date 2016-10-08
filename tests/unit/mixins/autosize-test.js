import Ember from 'ember';
import AutosizeMixin from 'ember-cli-textarea-autosize/mixins/autosize';
import { module, test } from 'qunit';

module('Unit | Mixin | autosize');

// Replace this with your real tests.
test('it works', function(assert) {
  let AutosizeObject = Ember.Object.extend(AutosizeMixin);
  let subject = AutosizeObject.create();
  assert.ok(subject);
});
