import AutosizeMixin from '../mixins/autosize';
import CtrlEnterSubmitsForm from 'ember-cli-text-support-mixins/mixins/ctrl-enter-submits-form';
import Ember from 'ember';
import EscapeKeyClears from 'ember-cli-text-support-mixins/mixins/escape-key-clears';
import FocusSelectsText from 'ember-cli-text-support-mixins/mixins/focus-selects-text';
import TriggerFocus from 'ember-cli-text-support-mixins/mixins/trigger-focus';
// noinspection JSFileReferences
import layout from '../templates/components/textarea-autosize';

// noinspection JSUnusedGlobalSymbols
export default Ember.TextArea.extend(
  AutosizeMixin, CtrlEnterSubmitsForm, EscapeKeyClears, FocusSelectsText, TriggerFocus, {
    'ctrlEnterSubmitsForm?': true,
    layout
  });
