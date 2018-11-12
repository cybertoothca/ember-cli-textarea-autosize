# ember-cli-textarea-autosize

[![npm version](http://badge.fury.io/js/ember-cli-textarea-autosize.svg)](http://badge.fury.io/js/ember-cli-textarea-autosize) ![downloads](http://img.shields.io/npm/dy/ember-cli-textarea-autosize.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-textarea-autosize.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-textarea-autosize) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-textarea-autosize) 

![Dependencies](http://david-dm.org/cybertoothca/ember-cli-textarea-autosize.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-textarea-autosize.svg)](http://emberobserver.com/addons/ember-cli-textarea-autosize) [![License](http://img.shields.io/npm/l/ember-cli-textarea-autosize.svg)](LICENSE.md)

An Ember add-on that provides a textarea component that adjusts its 
height according to the supplied text.  Included is the Text Support 
Mixins for autofocus, focus selects text, escape-pressed clears text,
and CTRL+ENTER submits `closest('form')`.

This add-on installs from bower and uses the `autosize.js` library
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

## Demo & Documentation

The demonstration web application can be found here:
[https://ember-cli-textarea-autosize.cybertooth.io/](https://ember-cli-textarea-autosize.cybertooth.io/). 

## Installation

The following command will install this add-on:

```
ember install ember-cli-textarea-autosize
```

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-textarea-autosize` command once 
you are done to get the latest version of the add-on.

### Bower & JQuery

This add-on does not depend on bower libraries when installed in your application or add-on.

This add-on no longer depends on JQuery.  

### Dependencies

#### `ember-cli-text-support-mixins`

The helper mixins from [`ember-cli-text-support-mixins`](http://ember-cli-text-support-mixins.cybertooth.io/) 
are used by this textarea add-on to include support for:

* autofocus
* <kbd>ESCAPE</kbd> clears input text
* <kbd>CTRL+ENTER</kbd> submits the closest form
* textarea focus automatically selects text

#### `autosize`

Jack Moore's [https://github.com/jackmoore/autosize](https://github.com/jackmoore/autosize) NPM library.

---

# Contributing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-textarea-autosize.git`
* `yarn`

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Add-on Tests

* `npm test` (Runs `ember try:testall` to test your add-on against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Add-on

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Add-on For Local Testing

## Linking

Use yarn.

```bash
# from this add-on project
$ yarn link
# from the other project that depends on this add-on
$ yarn link ember-cli-textarea-autosize
```

## Unlinking

Again, use yarn.

```bash
# from the other project that linked to this add-on
$ yarn unlink ember-cli-textarea-autosize
# from this add-on project
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

You may need to go into AWS CloudFront to expire the index.html file before the site 
changes are picked up (see [issue](https://github.com/cybertoothca/ember-cli-text-support-mixins/issues/29)).

# Releasing & Publishing To NPM

```bash
# `yarn publish` will prompt you for the next/new version name
$ yarn publish
$ git push
$ git push --tags
```
