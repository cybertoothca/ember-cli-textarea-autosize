import AutosizeMixin from '../mixins/autosize';
import TextArea from 'ember-cli-text-support-mixins/components/text-area';

export default TextArea.extend(AutosizeMixin, {
  'ctrlEnterSubmitsForm?': true,
});
