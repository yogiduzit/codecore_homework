import React from 'react';
import Field from './Field';
export default function QuestionDetails(props) {
  return(
    <div>
      <h2>{ props.title }</h2>
      <p>{ props.options }</p>
      <p>
        <Field title="View Count" value={props.view_count}/>
        <Field title="Created at" value={props.createdAt}/>
        <br/>
        <Field title="Author" value={props.author.full_name}/>
        </p>
    </div>
  );
}
