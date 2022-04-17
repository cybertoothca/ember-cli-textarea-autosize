# ember-cli-textarea-autosize [![version](http://badge.fury.io/js/ember-cli-textarea-autosize.svg)](http://badge.fury.io/js/ember-cli-textarea-autosize)

![downloads](http://img.shields.io/npm/dy/ember-cli-textarea-autosize.svg) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-textarea-autosize.svg)](http://emberobserver.com/addons/ember-cli-textarea-autosize)

An Ember addon that provides a textarea component that adjusts its
height according to the supplied text. Included are also several
mixins that can be used to ensure `autofocus` works properly,
focused text inputs have their text selected, and ctrl+enter will
submit the nearest form.

This addon installs from bower and uses the `autosize.js` library
from Jack Moore: [https://github.com/jackmoore/autosize](https://github.com/jackmoore/autosize).

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

## Requirements

- Ember >= 1.13.0
- Ember CLI

## Usage

This textarea component extends the `ember-cli-text-support-mixins` add-on's
`text-area` component. This text area does not accept a block, instead always
pass your value to the `value attribute`.

```handlebars
{{textarea-autosize value=someModel.largeTextAttribute}}
```

### Minimum Height (default is 2 rows)

If you need to set the minimum height of the `<textarea>`, set the
`rows` property:

```handlebars
{{textarea-autosize rows=6 ...}}
```

...or you can specify the `min-height` property

```handlebars
{{textarea-autosize min-height="200px" ...}}
```

### Maximum Height (when to start scrolling)

The `<textarea>` will continue to grow indefinitely unless you set the
`max-height` property:

```handlebars
{{textarea-autosize max-height="500px" ...}}
```

## Extras

The `{{textarea-autosize}}` automatically:

1. Incorporates a mixin that corrects a quirk in Ember where the
   `autofocus=true` feature works across template transitions.
1. Includes a mixin that will select any text when the textarea is
   focused.
1. Will attempt to submit the _nearest_ form when `CTRL+ENTER` is
   pressed.

---

## Contributing

### Installation

```
git clone git@github.com:cybertoothca/ember-cli-textarea-autosize.git
cd ember-cli-textarea-autosize
yarn install
```

### Linting

- `yarn lint:hbs`
- `yarn lint:js`
- `yarn lint:js --fix`

### Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

---

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

## License

This project is licensed under the [MIT License](LICENSE.md).

---

## Linking This Addon For Local Testing

### Linking

1. From the command line at the root of **this** project run the
   `npm link` command to _link_ this addon within your local
   node repository.
1. From the _other_ Ember project that you wish to test this addon
   in, execute the following command:
   `npm link ember-cli-textarea-autosize`.
1. Now in that same _other_ Ember project, you should go into the
   `package.json` and add the ember addon with the version _\*_. It will
   look something like this: `"ember-cli-textarea-autosize": "*"`. Now
   when/if you execute `npm install` on this _other_ project it
   will know to look for the linked addon rather than fetch it from
   the central repository.
1. Lastly, in the _other_ Ember project run the blueprint for the
   `ember-cli-textarea-autosize` addon by executing: `ember g ember-cli-textarea-autosize`. This
   will install the appropriate Ember Addons and Bower dependencies.

### Unlinking

1. Remove the addon from your local node repository with the following
   command (that can be run anywhere):
   `npm uninstall -g ember-cli-textarea-autosize`
1. Remove the reference to the `ember-cli-textarea-autosize`
   in your _other_ project's `package.json`.
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.

## Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_
with a valid key and secret,

```
[cybertooth]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET>
```

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-textarea-autosize.cybertooth.io/

## Releasing & Publishing To NPM

```
yarn publish
git push
git push --tags
```
