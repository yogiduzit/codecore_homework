import React from 'react';

export default function Field(props) {
  const {title, value} = props;
  return (
    <small>{title}: {value} </small>
  )
}