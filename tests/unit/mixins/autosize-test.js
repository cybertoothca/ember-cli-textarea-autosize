import EmberObject from '@ember/object';
import AutosizeMixin from 'ember-cli-textarea-autosize/mixins/autosize';
import { module, test } from 'qunit';

module('Unit | Mixin | autosize', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let AutosizeObject = EmberObject.extend(AutosizeMixin);
    let subject = AutosizeObject.create();
    assert.ok(subject);
  });
});
