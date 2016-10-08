import Ember from 'ember';
import FocusSelectsTextMixin from 'ember-cli-textarea-autosize/mixins/focus-selects-text';
import { module, test } from 'qunit';

module('Unit | Mixin | focus selects text');

// Replace this with your real tests.
test('it works', function(assert) {
  let FocusSelectsTextObject = Ember.Object.extend(FocusSelectsTextMixin);
  let subject = FocusSelectsTextObject.create();
  assert.ok(subject);
});
