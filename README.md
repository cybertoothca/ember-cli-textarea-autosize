# ember-cli-textarea-autosize [![GitHub version](https://badge.fury.io/gh/cybertoothca%2Fember-cli-textarea-autosize.svg)](https://badge.fury.io/gh/cybertoothca%2Fember-cli-textarea-autosize)

[![npm version](https://badge.fury.io/js/ember-cli-textarea-autosize.svg)](https://badge.fury.io/js/ember-cli-textarea-autosize) [![CircleCI](https://circleci.com/gh/cybertoothca/ember-cli-textarea-autosize.svg?style=shield)](https://circleci.com/gh/cybertoothca/ember-cli-textarea-autosize) [![Code Climate](https://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize/badges/gpa.svg)](https://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize) ![Dependencies](https://david-dm.org/cybertoothca/ember-cli-textarea-autosize.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-textarea-autosize.svg)](http://emberobserver.com/addons/ember-cli-textarea-autosize) [![License](https://img.shields.io/npm/l/ember-cli-textarea-autosize.svg)](LICENSE.md)

An Ember addon that provides a textarea component that adjusts its 
height according to the supplied text.  Included are also several 
mixins that can be used to ensure `autofocus` works properly, 
focused text inputs have their text selected, and ctrl+enter will 
submit the nearest form.

This addon installs from bower and uses the `autosize.js` library
from Jack Moore: [https://github.com/jackmoore/autosize](https://github.com/jackmoore/autosize).

## What Does This Addon Do?

This addon gives you access to the following _component_:

* `textarea-autosize` - an extension of the Ember.TextArea that
produces a `<textarea>` that grows in height to fit the supplied 
content.

...and the following _mixins_:

* `TriggerFocus` - fixes the quirk in Ember where html5 `autofocus` does
not work after template re-renders.
* `FocusSelectsText` - triggers to select the text components text
when focus is placed into the input.
* `CtrlEnterSubmitsForm` - the `CTRL+ENTER` key combination will try
to submit the nearest form element.

## Requirements

* Ember >= 1.13.0
* Ember CLI

## Installation

Like most other Ember addons:

    $ ember install ember-cli-textarea-autosize

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-bootstrap3-tooltip` command once 
you are done to get the latest version of the addon.

## Usage

This textarea component extends the `Ember.TextArea` component and
can be used exactly the same way.

    {{textarea-autosize}}

### Minimum Height (default is 2 rows)

If you need to set the minimum height of the `<textarea>`, set the 
`rows` property:

    {{textarea-autosize rows=6}}

...or you can specify the `min-height` property

    {{textarea-autosize min-height="200px"}}

### Maximum Height (when to start scrolling)

The `<textarea>` will continue to grow indefinitely unless you set the
`max-height` property:

    {{textarea-autosize max-height="500px"}}

## For additional information about the Ember.TextArea:

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

### `trigger-focus` Mixin

Do you want to fix that silly quirk in Ember where your input won't 
_autofocus_ after transitioning back to a template that was already
previously loaded?  Include the `trigger-focus` mixin within your 
component.

To apply this _fix_ to the `Ember.TextField` and `Ember.TextArea`
you can reopen the `Ember.TextSupport` mixin from your `app/app.js`
file:

    // your `app/app.js` file
    import Ember from 'ember';
    ...
    // you must import the mixin
    import TriggerFocusMixin from 'ember-cli-textarea-autosize/mixins/trigger-focus';
    
    let App;
    
    ...
    
    // reopening Ember's `TextSupport` mixin
    Ember.TextSupport.reopen(TriggerFocusMixin);
    
    export default App;


### `focus-selects-text` Mixin

Do you want your component or `Ember.TextField` or `Ember.TextArea` to 
select your input's text when it takes focus?  Simply include the
`focus-selects-text` mixin within your component.

Do you want to apply this to all of your `Ember.TextField` and 
`Ember.TextArea` inputs within your app?  Reopen the 
`Ember.TextSupport` mixin and include this mixin.  From your 
`app/app.js`:

    // your `app/app.js` file
    import Ember from 'ember';
    ...
    // you must import the mixin
    import FocusSelectsTextMixin from 'ember-cli-textarea-autosize/mixins/focus-selects-text';
    
    let App;
    
    ...
    
    // reopening Ember's `TextSupport` mixin
    Ember.TextSupport.reopen(FocusSelectsTextMixin);
    
    export default App;


### `ctrl-enter-submits-form` Mixin

Do you want your component to submit the nearest form when `CTRL+ENTER`
is pressed?  Simply include the `ctrl-enter-submits-form` mixin within
your component.

Want to apply this `CTRL+ENTER` behaviour to all of your text inputs?
Add the mixin to the `Ember.TextSupport` by reopening the class in your
`app/app.js`.  Notice in this example that I am also including the 
focus mixins to really improve my default `Ember.TextSupport` 
components:

    // your `app/app.js` file
    import Ember from 'ember';
    ...
    // you must import the mixins
    import CtrlEnterSubmitsFormMixin from 'ember-cli-textarea-autosize/mixins/ctrl-enter-submits-form';
    import FocusSelectsTextMixin from 'ember-cli-textarea-autosize/mixins/focus-selects-text';
    import TriggerFocusMixin from 'ember-cli-textarea-autosize/mixins/trigger-focus';

    let App;
    
    ...
    
    // reopening Ember's `TextSupport` mixin
    Ember.TextSupport.reopen(
      CtrlEnterSubmitsFormMixin, 
      FocusSelectsTextMixin,
      TriggerFocusMixin
    );
    
    export default App;

---

# Ember Addon Building And Testing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-textarea-autosize.git`
* `npm install`
* `bower install`

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

1. From the command line at the root of __this__ project run the 
`npm link` command to _link_ this addon within your local 
node repository.
1. From the _other_ Ember project that you wish to test this addon 
in, execute the following command:
`npm link ember-cli-textarea-autosize`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember addon with the version _*_.  It will
look something like this: `"ember-cli-textarea-autosize": "*"`.  Now
when/if you execute `npm install` on this _other_ project it 
will know to look for the linked addon rather than fetch it from
the central repository.

## Unlinking

1. Remove the addon from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-cli-textarea-autosize`
1. Remove the reference to the `ember-cli-textarea-autosize` 
in your _other_ project's `package.json`.
1. Run an `npm prune` from the root of your _other_ project's 
command line.

