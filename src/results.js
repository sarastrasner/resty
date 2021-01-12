import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  render() {
    return (
      <>
        {!this.props.count ? '' : <div>Count: {this.props.count}</div>}
        {!this.props.results ? (
          ''
        ) : (
          <div>
            <ReactJson src={this.props.results} />
          </div>
        )}
      </>
    );
  }
}

export default Results;
