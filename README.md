# react-story

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe react-story here.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Usage

```js
import React from 'react'
import { Demo, PropsTable } from '../../../../src'
import Button from '../my-library/Button'
import ButtonRaw from '!raw-loader!../my-library/Button'
import Markdown from './Button.md'

const ButtonNormal = () => (
  <Demo
    name="Normal Button"
    desc="Normal Buttons"
    code={Markdown}
  >
    <Button>Hello</Button>
    <Button>Hello</Button>
    <Button>Hello</Button>
  </Demo>
)

const DemoComponent = () => {
  return (
    <Story>
      <ButtonNormal />
      <PropsTable
        demonstrating={Button}
        raw={ButtonRaw}
      />
    </Story>
  )
}

export default {
  name: 'Button',
  component: DemoComponent,
  children: []
}
```
