# ember-cli-textarea-autosize [![GitHub version](http://badge.fury.io/gh/cybertoothca%2Fember-cli-textarea-autosize.svg)](http://badge.fury.io/gh/cybertoothca%2Fember-cli-textarea-autosize) ![](http://embadge.io/v1/badge.svg?start=1.13.0)

[![npm version](http://badge.fury.io/js/ember-cli-textarea-autosize.svg)](http://badge.fury.io/js/ember-cli-textarea-autosize) ![downloads](http://img.shields.io/npm/dy/ember-cli-textarea-autosize.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-textarea-autosize.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-textarea-autosize) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize) ![Dependencies](http://david-dm.org/cybertoothca/ember-cli-textarea-autosize.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-textarea-autosize.svg)](http://emberobserver.com/addons/ember-cli-textarea-autosize) [![License](http://img.shields.io/npm/l/ember-cli-textarea-autosize.svg)](LICENSE.md)

An Ember addon that provides a textarea component that adjusts its 
height according to the supplied text.  Included are also several 
mixins that can be used to ensure `autofocus` works properly, 
focused text inputs have their text selected, and ctrl+enter will 
submit the nearest form.

This addon installs from bower and uses the `autosize.js` library
from Jack Moore: [https://github.com/jackmoore/autosize](https://github.com/jackmoore/autosize).


## Built With

[![ember-cli-2.18.2](https://img.shields.io/badge/ember--cli-2.18.2-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

## Tested Against

[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-lts-2.16](https://img.shields.io/badge/ember--try-ember--lts--2.16-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

[![ember-release-2.18](https://img.shields.io/badge/ember--try-ember--release--2.18-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-default](https://img.shields.io/badge/ember--try-ember--default-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-text-support-mixins)

## Installation

Like most other Ember addons:

```
ember install ember-cli-textarea-autosize
```

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-textarea-autosize` command once 
you are done to get the latest version of the addon.

### Bower & JQuery

This add-on does not depend on bower libraries when installed in your application or add-on.

This add-on no longer depends on JQuery.  

### Dependencies

#### `ember-cli-text-support-mixins`

The helper mixins from [`ember-cli-text-support-mixins`](http://ember-cli-text-support-mixins.cybertooth.io/) 
are used by this textarea add-on to include support for:

* autofocus
* <kbd>CTRL+ENTER</kbd> submits the closest form
* textarea focus automatically selects text

## Demo

The demonstration web application can be found here:
[http://ember-cli-textarea-autosize.cybertooth.io/](http://ember-cli-textarea-autosize.cybertooth.io/). 

## What Does This Addon Do?

This addon gives you access to the following _component_:

* `textarea-autosize` - an extension of the Ember.TextArea that
produces a `<textarea>` that grows in height to fit the supplied 
content.

### Mixins Moved To `ember-cli-text-support-mixins` Add-On

Before 1.1 the `TriggerFocus`, `FocusSelectsText`, and `CtrlEnterSubmitsForm` mixins
were available in this add-on.  They are no longer here, and if you were using them your
code breaks.

You should be able to easily move your code over to the `ember-cli-text-support-mixins`
variation:

```js
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

## Usage

This textarea component extends the `ember-cli-text-support-mixins` add-on's
`text-area` component.  This text area does not accept a block, instead always
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

## For additional information about the Ember.TextArea:

 * [`ember-cli-text-support-mixins` `text-area` documentation](https://github.com/cybertoothca/ember-cli-text-support-mixins#text-area)
 * [Check out the Ember guide](https://guides.emberjs.com/v2.8.0/templates/input-helpers/#toc_text-areas)
 * [Also familiarize yourself with the TextArea API documents](http://emberjs.com/api/classes/Ember.TextArea.html)
 
## Extras

The `{{textarea-autosize}}` automatically:

1. Incorporates a mixin that corrects a quirk in Ember where the 
`autofocus=true` feature works across template transitions.
1. Includes a mixin that will select any text when the textarea is 
focused.
1. Will attempt to submit the _nearest_ form when `CTRL+ENTER` is
pressed.

Check out these extra mixins at
[ember-cli-text-support-mixins](https://github.com/cybertoothca/ember-cli-text-support-mixins#mixins).

---

# Ember Addon Building And Testing

## Setup

### Checkout

```
git clone git@github.com:cybertoothca/ember-cli-textarea-autosize.git
```

### With Yarn

```
yarn
```

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Addon Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Addon

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Addon For Local Testing

## Linking

Use yarn.

```bash
# from this addon project
$ yarn link
# from the other project that depends on this addon
$ yarn link ember-cli-textarea-autosize
```

## Unlinking

Again, use yarn.

```bash
# from the other project that linked to this addon
$ yarn unlink ember-cli-textarea-autosize
# from this addon project
$ yarn unlink
```

# Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_ 
with a valid key and secret,

```
[cybertooth]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET>
```

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-textarea-autosize.cybertooth.io/

# Releasing & Publishing To NPM

```
npm version x.y.z-sub.#
git push
git push --tags
npm publish
```
