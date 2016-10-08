# ember-cli-textarea-autosize

[![Build Status](https://travis-ci.org/cybertoothca/ember-cli-textarea-autosize.svg)](https://travis-ci.org/cybertoothca/ember-cli-textarea-autosize)

An Ember addon that provides a textarea component that adjusts its
height according to the supplied text.

This addon installs from bower and uses the `autosize.js` library
from Jack Moore: [https://github.com/jackmoore/autosize](https://github.com/jackmoore/autosize).

## Installation In Your Project

Like most other Ember addons:

    $ ember install ember-cli-textarea-autosize

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

## Ember Addon Building And Testing 

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
