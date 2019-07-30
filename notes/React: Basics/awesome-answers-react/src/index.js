import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import QuestionDetails from "./Component/QuestionDetails";
import AnswerDetails from "./Component/AnswerDetails";

function QuestionShowPage(props) {
  return(
    <main>
      <h1>Question Show Page</h1>
      <QuestionDetails 
        title="What is your favorite color"
        options="red, blue, violet, green"
        author={{full_name: "Brandon Stark"}}
        view_count={100}
        createdAt={new Date().toLocaleString()}
        />
      <AnswerDetails
        option="red"
        author="Chief Wiggim"
        createdAt={new Date().toLocaleString()}  
        />
    </main>
  );
}

function App() {
  return(
    <div>
      <QuestionShowPage/>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
