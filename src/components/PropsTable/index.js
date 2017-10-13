import React from 'react';
import PropTypes from 'prop-types';
import { propTypesToObject } from '../../utils'
import { parse } from 'react-docgen'
import resolver from 'react-docgen-annotation-resolver'

const getRows = propTypes => Object.keys(propTypes).map(prop => {
  const { type, required, defaultValue, description } = propTypes[prop]
  return (
    <tr key={prop}>
      <td>{prop}</td>
      <td>
        {type && type.name}
        {type.value && Array.isArray(type.value) && type.value.map(v => v.value)}
        {
          type.value &&
          !Array.isArray(type.value) &&
          typeof type.value === "object" &&
          JSON.stringify(type.value)
        }
      </td>
      <td>{required.toString()}</td>
      <td>{defaultValue && defaultValue.value}</td>
      <td>{description}</td>
    </tr>
  )
});


const Table = ({ raw, demonstrating }) => {
  // TODO: Catch parse error
  // Need a custom resolver to find the styled-component definition
  const parsed = demonstrating.name !== 'StyledComponent'
    ? parse(raw)
    : parse(raw, resolver)

  // May be an array if it's a styled-component
  const propTypes = Array.isArray(parsed) ? parsed[0].props : parsed.props

  if (!propTypes) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required?</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {getRows(propTypes)}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  raw: PropTypes.string.isRequired
}

export default Table;
