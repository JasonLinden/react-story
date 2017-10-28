import React from 'react'
import Markdown from 'react-smackdown'
import { Title, Box } from 'react-interface/es/components'
import { getStoryFromSlugs, flattenStories } from '../../utils'
import syntax from '../../utils/syntax'
import MarkdownWrapper from './MarkdownWrapper'

export default ({ stories, storyPath }) => {
  const story = getStoryFromSlugs(
    storyPath.split('/'),
    stories,
    flattenStories(stories)
  )

  return (
    <Box p={1}>
      <Title size="xl" pb={1} mb={2} borderBottom borderColor='primary1' borderWidth={1}>
        {story.name}
      </Title>
      {story.component}
    </Box>
  )
}
