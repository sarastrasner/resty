import React from 'react';
//import ReactJson from 'react-json-view';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parseHistory: {}
    }
  }
  componentDidMount() {
    this.getHistory();
    //this.renderHistory();
  }

  getHistory = () => {
    let history = localStorage.getItem('successful results')
    let parseHistory = JSON.parse(history)
    console.log('PARSEHISTORY----', parseHistory)
    this.setState({ parseHistory });
    console.log('THIS.State', this.state);
    //this.renderHistory();
  }
  render() {
    console.log('HISTORY-------', this.state.parseHistory);
    return (
      <div>
        <h3>History Here!</h3>
        <div>
          <ul>
            {
              Object.keys(this.state.parseHistory.results).map(key =>
                <li
                  key={key}
                ><button type="submit" name={key} key={key}>{this.state.parseHistory.results[key].method}</button></li>
              )
            }

          </ul>


          {/* {this.state.parseHistory.length > 1 ? this.state.parseHistory.results.map((value, idx) => (

           

          )) : null} */}

        </div>
        {/* <ReactJson src={this.state.parseHistory} /> */}
      </div>
    )
  }
}

export default History;