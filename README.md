# ember-cli-textarea-autosize [![version](http://badge.fury.io/js/ember-cli-textarea-autosize.svg)](http://badge.fury.io/js/ember-cli-textarea-autosize)

![downloads](http://img.shields.io/npm/dy/ember-cli-textarea-autosize.svg) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-textarea-autosize.svg)](http://emberobserver.com/addons/ember-cli-textarea-autosize)

An Ember addon that provides a textarea component that adjusts its
height according to the supplied text. Included are also several
mixins that can be used to ensure `autofocus` works properly,
focused text inputs have their text selected, and ctrl+enter will
submit the nearest form.

This addon uses the `autosize.js` library from Jack Moore: [https://github.com/jackmoore/autosize](https://github.com/jackmoore/autosize).

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-cli-textarea-autosize
```

## Demo

The demonstration web application can be found here:
[http://ember-cli-textarea-autosize.cybertooth.io/](http://ember-cli-textarea-autosize.cybertooth.io/).

## What Does This Addon Do?

This addon gives you access to the following _component_:

- `textarea-autosize` - an extension of the Ember.TextArea that
  produces a `<textarea>` that grows in height to fit the supplied
  content.

## Usage

This textarea component extends the `ember-cli-text-support-mixins` add-on's
`text-area` component. This text area does not accept a block, instead always
pass your value to the `value attribute`.

```handlebars
<TextareaAutosize @value='someModel.largeTextAttribute' />
```

### Minimum Height (default is 2 rows)

If you need to set the minimum height of the `<textarea>`, set the
`rows` property:

```handlebars
<TextareaAutosize rows='6' ... />
```

...or you can specify the `min-height` property

```handlebars
<TextareaAutosize min-height='200px' ... />
```

### Maximum Height (when to start scrolling)

The `<textarea>` will continue to grow indefinitely unless you set the
`max-height` property:

```handlebars
<TextareaAutosize max-height='500px' ... />
```

## Extras

The `<TextareaAutosize />` automatically:

1. Incorporates a mixin that corrects a quirk in Ember where the
   `autofocus=true` feature works across template transitions.
1. Includes a mixin that will select any text when the textarea is
   focused.
1. Will attempt to submit the _nearest_ form when `CTRL+ENTER` is
   pressed.

## Mixins Moved To `ember-cli-text-support-mixins` Add-On

Before 1.1 the `TriggerFocus`, `FocusSelectsText`, and `CtrlEnterSubmitsForm` mixins
were available in this add-on. They are no longer here, and if you were using them your
code breaks.

You should be able to easily move your code over to the `ember-cli-text-support-mixins`
variation:

```javascript
// import TriggerFocus from 'ember-cli-textarea-autosize/mixins/trigger-focus'
// ...now becomes ...
import TriggerFocus from 'ember-cli-text-support-mixins/mixins/trigger-focus';

// import FocusSelectsTextMixin from 'ember-cli-textarea-autosize/mixins/focus-selects-text';
// ... now becomes ...
import FocusSelectsText from 'ember-cli-text-support-mixins/mixins/focus-selects-text';

// import CtrlEnterSubmitsFormMixin from 'ember-cli-textarea-autosize/mixins/ctrl-enter-submits-form';
// ... now becomes ...
import CtrlEnterSubmitsForm from 'ember-cli-text-support-mixins/mixins/ctrl-enter-submits-form';
```

[Head over here for the mixin documentation](https://github.com/cybertoothca/ember-cli-text-support-mixins#mixins).

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
