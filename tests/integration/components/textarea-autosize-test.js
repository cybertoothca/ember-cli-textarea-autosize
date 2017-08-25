import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('textarea-autosize', 'Integration | Component | textarea autosize', {
  integration: true
});

test('when rendering a min-width', function (assert) {
  this.render(hbs `{{textarea-autosize min-height="200px"}}`);
  assert.equal(this.$('textarea').css('min-height'), '200px');
});

test('when rendering a max-width', function (assert) {
  this.render(hbs `{{textarea-autosize max-height="500px"}}`);
  assert.equal(this.$('textarea').css('max-height'), '500px');
});

test('when rendering without a block', function (assert) {
  this.render(hbs `{{textarea-autosize value="Some text"}}`);
  assert.equal(this.$('textarea').val().trim(), 'Some text');
});
