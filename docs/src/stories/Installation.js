import React from 'react'

import CodeHighlight from '../components/CodeHighlight'

export default () => (
  <div>
    <strong>Install via NPM:</strong>
    <CodeHighlight>
      $ yarn add react-story {'\n'}
      # or {'\n'}
      $ npm install react-story --save
    </CodeHighlight>
    <strong>or use the CDN:</strong>
    <CodeHighlight>
      {`<script src='https://npmcdn.com/react-story@latest/react-story.js' />`}
    </CodeHighlight>

    <br />
    <br />

    <strong>Import for usage:</strong>
    <CodeHighlight>
      {`import ReactStory from 'react-story'`}
    </CodeHighlight>
    <strong>or for CDN users:</strong>
    <CodeHighlight>
      {`const ReactStory = window.ReactStory.default`}
    </CodeHighlight>
  </div>
)
