import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('textarea-autosize', 'Integration | Component | textarea autosize', {
  integration: true
});

test('when rendering without a block', function (assert) {
  this.render(hbs `{{textarea-autosize value="Some text"}}`);
  assert.equal(this.$('textarea').val().trim(), 'Some text');
  // assert.equal(this.$('textarea').height(), 44);
});

test('when rendering with a block', function (assert) {
  this.render(hbs `
    {{#textarea-autosize}}
      template block text
    {{/textarea-autosize}}
  `);
  assert.equal(this.$().text().trim(), 'template block text');
});
