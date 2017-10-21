import React from 'react'
import styled from 'styled-components'
import { Box, Title, Icon, Expand, Pre, Paragraph } from 'react-interface/es/components'
import Code from '../Code'

const Wrapper = styled.div`
  margin-bottom: 2rem;
  pre { margin: 0 }
  .react-syntax-highlighter-line-number { color: #999 }
`

const Demo = ({ children, name, desc, code }) => (
  <Wrapper>
    <Title>{name}</Title>
    <Paragraph>{desc}</Paragraph>
    <Box
      borderColor='#D8E2EA'
      borderWidth={1}
      borderRadius={3}
    >
      <Box
        p={2}
        borderBottom
        borderWidth={1}
        borderColor='#D8E2EA'
      >
        {children}
      </Box>
      <Expand>
        <Pre m={0} bg='#FCFDFE'>
          <Code source={code} />
        </Pre>
      </Expand>
    </Box>
  </Wrapper>
)

export default Demo
