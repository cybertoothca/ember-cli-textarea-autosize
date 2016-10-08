import Ember from 'ember';
import TriggerFocusMixin from 'ember-cli-textarea-autosize/mixins/trigger-focus';
import { module, test } from 'qunit';

module('Unit | Mixin | trigger focus');

// Replace this with your real tests.
test('it works', function(assert) {
  let TriggerFocusObject = Ember.Object.extend(TriggerFocusMixin);
  let subject = TriggerFocusObject.create();
  assert.ok(subject);
});
