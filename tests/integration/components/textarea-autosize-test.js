import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | textarea autosize', function(hooks) {
  setupRenderingTest(hooks);

  test('when rendering a min-width', async function(assert) {
    await render(hbs`{{textarea-autosize min-height="200px"}}`);
    assert.equal(this.$('textarea').css('min-height'), '200px');
  });

  test('when rendering a max-width', async function(assert) {
    await render(hbs`{{textarea-autosize max-height="500px"}}`);
    assert.equal(this.$('textarea').css('max-height'), '500px');
  });

  test('when rendering some sort of text value', async function(assert) {
    await render(hbs`{{textarea-autosize value="Some text"}}`);
    assert.equal(find('textarea').value.trim(), 'Some text');
  });

  test('when supplying undefined the textarea value is empty string', async function(assert) {
    this.set('value', undefined);
    await render(hbs`{{textarea-autosize value=value}}`);

    assert.dom('textarea').hasValue('');
  });

  test('when supplying null the textarea value is empty string', async function(assert) {
    this.set('value', null);
    await render(hbs`{{textarea-autosize value=value}}`);

    assert.dom('textarea').hasValue('');
  });
});
