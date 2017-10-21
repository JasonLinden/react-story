import React from 'react'
import PropTypes from 'prop-types'
import { Table, TBody, THead, Header, Row, Cell } from 'react-interface/es/components'
import { propTypesToObject } from '../../utils'
import { parse } from 'react-docgen'
import resolver from 'react-docgen-annotation-resolver'

const getRows = propTypes => Object.keys(propTypes).map(prop => {
  const { type, required, defaultValue, description } = propTypes[prop]
  return (
    <Row key={prop}>
      <Cell basis='15%' grow={0}>{prop}</Cell>
      <Cell basis='15%' grow={0}>
        {type && type.name}
        {type.value && Array.isArray(type.value) && type.value.map(v => v.value)}
        {
          type.value &&
          !Array.isArray(type.value) &&
          typeof type.value === "object" &&
          JSON.stringify(type.value)
        }
      </Cell>
      <Cell basis='15%' grow={0}>{required.toString()}</Cell>
      <Cell basis='15%' grow={0}>{defaultValue && defaultValue.value}</Cell>
      <Cell basis='15%' grow={1}>{description}</Cell>
    </Row>
  )
});


const PropsTable = ({ raw, demonstrating }) => {
  // TODO: Catch parse error
  // Need a custom resolver to find the styled-component definition
  const parsed = demonstrating.name !== 'StyledComponent'
    ? parse(raw)
    : parse(raw, resolver)

  // May be an array if it's a styled-component
  const propTypes = Array.isArray(parsed) ? parsed[0].props : parsed.props

  if (!propTypes) return null;

  return (
    <Table>
      <Header>
        <Row>
          <THead basis='15%' grow={0}>Name</THead>
          <THead basis='15%' grow={0}>Type</THead>
          <THead basis='15%' grow={0}>Required?</THead>
          <THead basis='15%' grow={0}>Default</THead>
          <THead basis='15%' grow={1}>Description</THead>
        </Row>
      </Header>
      <TBody>
        {getRows(propTypes)}
      </TBody>
    </Table>
  );
}

PropsTable.propTypes = {
  raw: PropTypes.string.isRequired
}

export default PropsTable;
