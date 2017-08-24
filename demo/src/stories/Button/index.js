import React from 'react'
import { Story, Demo, PropsTable } from '../../../../src'
import Button from './Button'
import ButtonRaw from '!raw-loader!./Button'
import NormalMarkdown from './ButtonNormal.md'

const ButtonNormal = () => (
  <Demo
    name="Normal Button"
    desc="Normal Buttons"
    code={NormalMarkdown}
  >
    <Button>Hello</Button>
    <Button>Hello</Button>
    <Button>Hello</Button>
  </Demo>
)

const ButtonLarge = () => (
  <Demo name="Large Button" code={NormalMarkdown}>
    <Button size='large'>Hello</Button>
  </Demo>
)

const DemoComponent = () => {
  return (
    <Story>
      <ButtonNormal />
      <ButtonLarge />
      <PropsTable
        demonstrating={Button}
        raw={ButtonRaw}
      />
    </Story>
  )
}

export default {
  name: 'Button',
  component: DemoComponent
}
