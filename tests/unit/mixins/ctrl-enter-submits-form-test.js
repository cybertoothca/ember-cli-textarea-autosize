import Ember from 'ember';
import CtrlEnterSubmitsFormMixin from 'ember-cli-textarea-autosize/mixins/ctrl-enter-submits-form';
import { module, test } from 'qunit';

module('Unit | Mixin | ctrl enter submits form');

// Replace this with your real tests.
test('it works', function(assert) {
  let CtrlEnterSubmitsFormObject = Ember.Object.extend(CtrlEnterSubmitsFormMixin);
  let subject = CtrlEnterSubmitsFormObject.create();
  assert.ok(subject);
});
