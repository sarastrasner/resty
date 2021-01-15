import React from 'react';
import './help.scss';

class Help extends React.Component {
  render() {
    return (
      <div id='help'>
        <h2>Hints:</h2>
        <ol>
          <li>For a delete, add an id in the ID field.</li>
          <li>For a post, put an object containing the new item in the Search Query box.</li>
          <li>For a put, put an id in the ID field and object containing the information to update in the Search Query box.</li>
        </ol>
      </div>
    )
  }
}

export default Help;