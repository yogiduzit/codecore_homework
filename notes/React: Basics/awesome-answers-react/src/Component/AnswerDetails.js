import React from 'react';
import Field from './Field';

export default function AnswerDetails(props) {
  return(
    <div>
      <p>
        <Field title="Option" value="red"/>
        <Field title="Author" value={ props.authors }/>
        <Field title="Created at" value= {props.createdAt}/>
      </p>
    </div>
  );
}