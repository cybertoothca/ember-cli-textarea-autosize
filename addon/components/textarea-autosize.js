import AutosizeMixin from '../mixins/autosize';
import CtrlEnterSubmitsForm from '../mixins/ctrl-enter-submits-form';
import FocusSelectsText from '../mixins/focus-selects-text';
import TriggerFocus from '../mixins/trigger-focus';
import Ember from 'ember';
import layout from '../templates/components/textarea-autosize';

export default Ember.TextArea.extend(AutosizeMixin, CtrlEnterSubmitsForm, FocusSelectsText, TriggerFocus, {
  layout
});
