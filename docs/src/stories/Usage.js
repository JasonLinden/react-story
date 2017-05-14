import React from 'react'

import CodeHighlight from '../components/CodeHighlight'

export default props => (
  <CodeHighlight>
    {`import ReactStory from 'react-story'

<ReactStory
  stories={[{
    name: 'Story 1',
    component: () => (
      <span>
        This is a React Story!
      </span>
    )
  }, {
    name: 'Story 2',
    component: () => (
      <span>
        Hey look! Another story.
      </span>
    )
  }, {
    name: 'Story 3',
    component: () => (
      <span>
        You get the idea :)
      </span>
    )
  }]}
/>`}
  </CodeHighlight>
)
