# lib module
[![Build Status](https://travis-ci.org/kurtommy/lib-module.svg?branch=master)](https://travis-ci.org/kurtommy/lib-module)
[![npm version](https://badge.fury.io/js/lib-module.svg)](http://badge.fury.io/js/lib-module)
[![devDependency Status](https://david-dm.org/kurtommy/lib-module/dev-status.svg)](https://david-dm.org/kurtommy/lib-module#info=devDependencies)
[![GitHub issues](https://img.shields.io/github/issues/kurtommy/lib-module.svg)](https://github.com/kurtommy/lib-module/issues)
[![GitHub stars](https://img.shields.io/github/stars/kurtommy/lib-module.svg)](https://github.com/kurtommy/lib-module/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/kurtommy/lib-module/master/LICENSE)

## Demo
https://kurtommy.github.io/lib-module/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#licence)

## About



## Installation

Install through npm:
```
npm install --save lib-module
```

Then use it in your app like so:

```typescript
import {Component} from '@angular/core';
import {HelloWorld} from 'lib-module';

@Component({
  selector: 'demo-app',
  directives: [HelloWorld],
  template: '<hello-world></hello-world>'
})
export class DemoApp {}
```

You may also find it useful to view the [demo source](https://github.com/kurtommy/lib-module/blob/master/demo/demo.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/lib-module/lib-module.js"></script>
<script>
    // everything is exported libModule namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://kurtommy.github.io/lib-module/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
